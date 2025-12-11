import { Car } from "@/type/car";

export interface Pilot {
    id: number;
    name: string;
    irating: number; 
    cars: Car[];
}
