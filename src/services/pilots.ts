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

const createPilot = async (pilotData: Pilot) => {
    const res = await fetch('http://localhost:4040/api/v1/pilots/', {
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