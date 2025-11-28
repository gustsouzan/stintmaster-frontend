import { Pilot } from "@/components/Drivers/pilot.type";

const fetchPilots = async (): Promise<Pilot[]> => {
    const res = await fetch('http://localhost:4040/api/v1/pilots', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data;
}

const createPilot = async (pilotData: {
    name: string;
    email: string;
    age: number;
    iracing_id: string;
    experience: string;
    team: string;
    created_by: string;
}) => {
    const res = await fetch('http://localhost:4040/api/v1/pilots/create-pilot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pilotData),
    });
    const data = await res.json();
    return data;
}

export { fetchPilots, createPilot };