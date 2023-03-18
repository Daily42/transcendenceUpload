import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import {
  Button, Container, Grid, List, ListItem, ListItemText, makeStyles, TextField,
} from "@material-ui/core";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { searchEvent, getLocations } from "../network/api/axios.custom";
import ITFevent from "../interface/event.interface";
import ITFlocation from "../interface/location.interface";
import Props from "../interface/props.interface";
import { DARK, LIGHT } from "../theme/theme";

const DatePickerInput = styled(DatePicker)<Props>`
  background-color: ${(props: any) => (props.darkMode ? DARK.FORM : LIGHT.FORM)};
  border: none;
  border-radius: 8px;
  color: ${(props: any) => (props.darkMode ? DARK.TEXT : LIGHT.TEXT)};
  padding: 16px;
  font-size: 16px;
`;

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  title: {
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
  },
  list: {
    marginTop: "2rem",
  },
});

function getBuildingTitle(locationCode: string, locationList: ITFlocation[]) {
  const location = locationList.find((loc) => loc.code === locationCode) || { title: "" };
  return location.title;
}

function EventsList(
  props: {
    events: ITFevent[],
    locations: ITFlocation[],
  }
) {
  const { events, locations } = props;
  return (
    <List>
      {events.map((event) => (
        <ListItem button key={event.id}>
          <ListItemText
            primary={event.title}
            secondary={`${event.location.parent?.title} > ${getBuildingTitle(event.locationCode, locations)}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function SearchEvents(
  props: {
    darkMode: boolean,
  }
) {
  // props varaibles
  const { darkMode } = props;

  // mui variables - dates
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [rangeDate, setRangeDate] = useState({
    date: [],
  })
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  // api variables
  const [events, setEvents] = useState<ITFevent[]>([]);
  const [locations, setLocations] = useState<ITFlocation[]>([]);
  const classes = useStyles();
  const hasRunOnceRef = useRef(false);

  const handleGetEventsClick = async () => {
    const eventResponse = await searchEvent(rangeDate.date[0], rangeDate.date[1]);
    const locationResponse = await getLocations();
    if (!hasRunOnceRef.current && locationResponse) {
      setLocations(locationResponse);
      hasRunOnceRef.current = true;
    }
    if (eventResponse) {
      setEvents(eventResponse);
    }
  };

  return (
    <Container className={classes.root}>
      <Grid container direction="row" alignItems="baseline">
        <Grid item className={classes.form}>
          <TextField
            id="startDate"
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DatePickerInput
            style={{
              width: "100%",
              boxSizing: "border-box",
              height: "26px"
            }}
            containerStyle={{
              width: "100%"
            }}
            darkMode={darkMode}
            className="rmdp-mobile"
            range
            name="date"
            placeholder="시작날짜 및 시각"
            format="YYYY-MM-DD"
            plugins={[
              <TimePicker position="bottom" />,
              <DatePanel markFocused />
            ]}
            value={rangeDate.date}
            onChange={(value) =>
              setRangeDate((prevFormData) => ({
                ...prevFormData,
                date: value,
              }))
            }
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleGetEventsClick}
          >
            Get Events
          </Button>
        </Grid>
        {events.length > 0 && (
          <Grid item className={classes.list}>
            <EventsList events={events} locations={locations} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
