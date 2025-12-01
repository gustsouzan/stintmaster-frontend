import { CarClass, CarGroupedByClass, CarSuggestions } from "@/type/car";

const fetchCarsByClass = async (): Promise<CarGroupedByClass[]> => {
    const res = await fetch('http://localhost:4040/api/v1/cars/class-map', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch cars by class');
    }
    const data = await res.json();
    return data;
}

const fetchCarSuggestions = async (): Promise<CarSuggestions[]> => {
    const res = await fetch('http://localhost:4040/api/v1/cars/car-suggestions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch car suggestions');
    }
    const data = await res.json();
    return data;
}

const fetchCarsClasses = async (): Promise<CarClass[]> => {
    const res = await fetch('http://localhost:4040/api/v1/cars/classes', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch car classes');
    }
    const data = await res.json();
    return data;
}

export { fetchCarsByClass, fetchCarSuggestions, fetchCarsClasses };

