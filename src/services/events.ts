import { Event, Inputs } from "@/components/Event/event.type";

const fetchEvents = async (): Promise<Event[]> => {
const res = await fetch('http://localhost:4040/api/v1/events', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data;
};

const createEvent = async (eventData: Inputs
): Promise<Event> => {
    const res = await fetch('http://localhost:4040/api/v1/events/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });
    const data = await res.json();
    return data;
}

export { createEvent, fetchEvents };

