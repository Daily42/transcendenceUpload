import * as axios from "./axios.instance";
import ITFevent from "../../interface/event.interface";
import DateType from "../../enum/eventType.enum";
import PlaceType from "../../enum/placeType.enum";

export const getEventsList = async () => {
  try {
    const response = await axios.instance.get("/events");
    return (response);
  } catch (error) {
    return (error);
  }
}

export const getEventByDate = async (y: string, m: string, d: string): Promise<ITFevent[]> => {
  try {
    const response = await axios.instance.get<ITFevent[]>(`/events?date=${y}-${m}-${d}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEventType = async () => {
  try {
    const response = await axios.instance.get("/event-type");
    return (response);
  } catch (error) {
    return (error);
  }
}

export const getLocationsList = async () => {
  try {
    const response = await axios.instance.get("/locations");
    return (response);
  } catch (error) {
    return (error);
  }
}

export const getLocation = async (locId: PlaceType) => {
  try {
    const response = await axios.instance.get(`/locations/${locId}`);
    return (response);
  } catch (error) {
    return (error);
  }
}

export const getChildLocations = async (locId: PlaceType) => {
  try {
    const response = await axios.instance.get(`/locations/children/${locId}`);
    return (response);
  } catch (error) {
    return (error);
  }
}
//event-type