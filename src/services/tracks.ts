import { api } from "@/lib/utils/services/api";
import { Track } from "@/type/track";
import { useQuery } from "@tanstack/react-query";

const getTracks = async (): Promise<Track[]> => {
    const res = await api({}).get('/api/v1/tracks');
    if (!res) {
        throw new Error('Failed to fetch tracks');
    }
    return res.data;
}

const useTracks = () => {
    return useQuery<Track[]>({
        queryKey: ['get-tracks'],
        queryFn: () => getTracks()
    })
}

export { useTracks };