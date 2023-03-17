import * as axios from "./axios.instance";
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

export const getEvent = async (eventId: string) => {
  try {
    const response = await axios.instance.get(`/events/${eventId}`);
    return (response);
  } catch (error) {
    return (error);
  }
}

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