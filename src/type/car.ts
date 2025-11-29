export interface Car {
    ID: number;
    Nome: string;
    Classe: string;
    Imagem: string;
}

export interface CarGroupedByClass {
    [key: string]: Car[];
}

export interface CarSuggestions {
    ID: number;
    Nome: string;
    Classe: string;
    Imagem: string;
    Qtd : number;
}

export interface CarClass {
    Classe: string;
}