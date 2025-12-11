import { fetchCarSuggestions } from "@/services/cars";
import { CarSuggestions } from "@/type/car";
import { useEffect, useState } from "react";

export const useCarSuggestion = () => {
  
    const [carSuggestions, setCarSuggestions] = useState<CarSuggestions[]>([]);

    const {data} = fetchCarSuggestions();

    useEffect(() => {
        if (data){
        setCarSuggestions(data);
        }
    }, [data]);
    return {
        carSuggestions,
    };
  }