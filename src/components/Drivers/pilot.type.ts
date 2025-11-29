import { Car } from "@/type/car";

export interface Pilot {
    ID: number;
    Name: string;
    Irating: number; 
    cars: Car[];
}
