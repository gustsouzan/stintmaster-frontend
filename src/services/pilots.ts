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

export const usePilots = () => {
    return useQuery<Pilot[]>({
    queryKey: ['get-pilots'],
    queryFn: () => getPilots(),
});};

const createPilot = async (pilotData: Pilot) => {
    const res = await api({ headers: { 'Content-Type': 'application/json' } }).post('/api/v1/pilots/', pilotData);
    return res.data;
}

const apiRemovePilot = async (id: number) => {
    const res = await api({ headers: { 'Content-Type': 'application/json' } }).delete(`/api/v1/pilots/${id}`);
    return res.data;
}

export { apiRemovePilot, createPilot };
