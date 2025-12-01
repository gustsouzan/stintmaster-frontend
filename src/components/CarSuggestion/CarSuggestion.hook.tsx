import { fetchCarSuggestions } from "@/services/cars";
import { CarSuggestions } from "@/type/car";
import { useEffect, useState } from "react";

export const useCarSuggestion = () => {
  
    const [carSuggestions, setCarSuggestions] = useState<CarSuggestions[]>([]);

    const getCarSuggestions = async() => {
        const response = await fetchCarSuggestions();
        setCarSuggestions(response);
    };

    useEffect(() => {
        getCarSuggestions();
    }, []);
    return {
        carSuggestions,
    };
  }