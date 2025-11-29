import { Track } from "@/type/track";

const getTracks = async (): Promise<Track[]> => {
    const res = await fetch('http://localhost:4040/api/v1/tracks', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await res.json();
    return data;
}

export { getTracks };