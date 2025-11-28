import { fetchEvents } from "@/services/events";
import { useEffect, useState } from "react";
import { Event } from "./event.type";

export const useEvents = () => {
    const [response, setResponse] = useState<Event[]>([]); 

    useEffect(() => {
      fetchEvents().then((data) => {
        setResponse(data);
      });
    }, []);
    return {response};
};