import React, { useState } from "react";
import {
  Button, Container, Grid, List, ListItem, ListItemText, makeStyles, TextField,
} from "@material-ui/core";
import { getEventByDate } from "../network/api/api";
import ITFevent from "../interface/event.interface";
import ITFlocation from "../interface/location.interface";
import PlaceType from "../enum/placeType.enum";

const locationData: ITFlocation[] = [
  {
    code: PlaceType.PL0000,
    parentCode: null,
    title: "개포 클러스터",
    sort: 1
  },
  {
    code: PlaceType.PL0001,
    parentCode: PlaceType.PL0000,
    title: "2층 Cluster 01",
    sort: 1
  },
  {
    code: PlaceType.PL0002,
    parentCode: PlaceType.PL0000,
    title: "2층 Cluster 02",
    sort: 2
  },
  {
    code: PlaceType.PL0003,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 03",
    sort: 3
  },
  {
    code: PlaceType.PL0004,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 04",
    sort: 4
  },
  {
    code: PlaceType.PL0005,
    parentCode: PlaceType.PL0000,
    title: "5층 Cluster 05",
    sort: 5
  },
  {
    code: PlaceType.PL0006,
    parentCode: PlaceType.PL0000,
    title: "5층 Cluster 06",
    sort: 6
  },
  {
    code: PlaceType.PL0007,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 07",
    sort: 7
  },
  {
    code: PlaceType.PL0008,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 08",
    sort: 8
  },
  {
    code: PlaceType.PL0009,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 09",
    sort: 9
  },
  {
    code: PlaceType.PL0010,
    parentCode: PlaceType.PL0000,
    title: "4층 Cluster 10",
    sort: 10
  },
  {
    code: PlaceType.PL0011,
    parentCode: PlaceType.PL0000,
    title: "3층 ClusterX 01",
    sort: 11
  },
  {
    code: PlaceType.PL0012,
    parentCode: PlaceType.PL0000,
    title: "3층 ClusterX 02",
    sort: 12
  },
  {
    code: PlaceType.PL0013,
    parentCode: PlaceType.PL0000,
    title: "1층 오픈클러스터",
    sort: 13
  },
  {
    code: PlaceType.PL0014,
    parentCode: PlaceType.PL0000,
    title: "1층 게임장",
    sort: 14
  },
  {
    code: PlaceType.PL0015,
    parentCode: PlaceType.PL0000,
    title: "1층 42Lab",
    sort: 15
  },
  {
    code: PlaceType.PL0100,
    parentCode: null,
    title: "서초 클러스터",
    sort: 2
  },
  {
    code: PlaceType.PL0200,
    parentCode: null,
    title: "기타",
    sort: 3
  }
]

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

function EventsList({ events }: { events: ITFevent[] }) {
  return (
    <List>
      {events.map((event) => (
        <ListItem button key={event.id}>
          <ListItemText
            primary={event.title}
            secondary={`${event.location.parent?.title} > ${getBuildingTitle(event.locationCode, locationData)}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export function Main(
  props: {
    darkMode: boolean,
    toggleDarkMode: any
  }
) {
  const { darkMode, toggleDarkMode } = props;
  const [date, setDate] = useState("");
  const [events, setEvents] = useState<ITFevent[]>([]);
  const classes = useStyles();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleGetEventsClick = async () => {
    const [year, month, day] = date.split("-");
    const response = await getEventByDate(year, month, day);
    console.log(response);
    if (response) {
      console.log(response);
      setEvents(response);
    }
  };

  return (
    <Container className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid item className={classes.form}>
          <TextField
            id="date"
            label="Select Date"
            type="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
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
            <EventsList events={events} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
