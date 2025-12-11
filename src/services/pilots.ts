import { Pilot } from "@/components/Drivers/pilot.type";
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/utils/services/api";

const getPilots = async (): Promise<Pilot[]> => {
    const res = await api({}).get('/api/v1/pilots');
    if (!res) {
        throw new Error('Failed to fetch pilots');
    }
    return res.data;
}

export const fetchPilots = () => {
    return useQuery<Pilot[]>({
    queryKey: ['get-pilots'],
    queryFn: () => getPilots(),
});};

const createPilot = async (pilotData: Pilot, token: string) => {
    const res = await fetch('http://localhost:4040/api/v1/pilots/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': `${token}`
        },
        body: JSON.stringify(pilotData),
    });
    if (!res.ok) {
        throw new Error('Failed to create pilot');
    }
    const data = await res.json();
    return data;
}

const apiRemovePilot = async (id: number) => {
    const res = await fetch(`http://localhost:4040/api/v1/pilots/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        throw new Error('Failed to remove pilot');
    }
    const data = await res.json();
    return data;
}

export { apiRemovePilot, createPilot };
