import { useEffect, useState } from "react";
import { Pilot } from "./pilot.type";
import { fetchPilots } from "@/services/pilots";

const usePilots = () => {
    const [response, setResponse] = useState<Pilot[]>([]); 

    useEffect(() => {
      fetchPilots().then((data) => {
        setResponse(data);
      });
    }, []);
    return {response};
};

export default usePilots;