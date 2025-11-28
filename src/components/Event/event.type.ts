export interface Event {
    ID: number;
    Nome: string;
    Plataforma: string;
    DataEvento: string;
    Duracao: number;
    Imagem: string;
    MinPilotos: number;
    MaxPilotos: number;
    Classes: string[];
    Pista: Pista;    
}

export interface Pista {
    ID: number;
    Nome: string;
    Localizacao: string;
    Imagem: string;
}