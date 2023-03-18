import * as axios from "./axios.instance";
import ITFevent from "../../interface/event.interface";
import ITFlocation from "../../interface/location.interface";
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

export const searchEvent = async (stt: string, end: string): Promise<ITFevent[]> => {
  try {
    const response = await axios.instance.get<ITFevent[]>(`/events?startDate=${stt}&endDate=${end}`);
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

export const getLocations = async (): Promise<ITFlocation[]> => {
  try {
    const response = await axios.instance.get<ITFlocation[]>("/locations");
    return (response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getLocation = async (locationId: PlaceType): Promise<ITFlocation[]> => {
  try {
    const response = await axios.instance.get<ITFlocation[]>(`/locations/${locationId}`);
    return (response.data);
  } catch (error) {
    console.error(error);
    return [];
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
