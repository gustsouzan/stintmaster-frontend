import { api } from "@/lib/utils/services/api";
import { CarClass, CarGroupedByClass, CarSuggestions } from "@/type/car";
import { useQuery } from "@tanstack/react-query";

const getCarsByClass = async (): Promise<CarGroupedByClass[]> => {
    const res = await api({}).get('/api/v1/cars/class-map');
    if (!res) {
        throw new Error('Failed to fetch cars by class');
    }
    return res.data;
}

export const useCarsByClass = () => {
    return useQuery<CarGroupedByClass[]>({
        queryKey: ['get-cars-class-map'],
        queryFn: () => getCarsByClass(),
        retry: 2
    })
}

const getCarSuggestions = async (): Promise<CarSuggestions[]> => {
    const res = await api({}).get('/api/v1/cars/car-suggestions')
    if (!res) {
        throw new Error('Failed to fetch car suggestions');
    }
    return res.data;
}

export const useCarSuggestions = () => {
    return useQuery<CarSuggestions[]>({
        queryKey: ['get-cars-suggestions'],
        queryFn: () => getCarSuggestions(),
        retry:2
    })
}

const getCarsClasses = async (): Promise<CarClass[]> => {
    const res = await api({}).get('/api/v1/cars/classes');
    if (!res) {
        throw new Error('Failed to fetch car classes');
    }
    return res.data;
}

export const useCarClasses = () => {
    return useQuery<CarClass[]>({
        queryKey: ['get-cars-class'],
        queryFn: () => getCarsClasses()
    })
}


