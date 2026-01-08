import { Event, Inputs } from "@/components/Event/event.type";
import { api } from "@/lib/utils/services/api";

const createEvent = async (eventData: Inputs
): Promise<Event> => {
    const res = await api({ headers: { 'Content-Type': 'application/json' } }).post('/api/v1/events/', eventData);
    return res.data;
}

export { createEvent };

