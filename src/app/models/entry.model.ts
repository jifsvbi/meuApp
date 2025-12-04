export type EntryType = 'recurso' | 'local' | 'perigo';


export interface Entry {
id: string; // uuid
tipo: EntryType;
titulo: string;
descricao?: string;
importancia?: number; // 1-5
coordenadas?: string;
dataCriacao: string; // ISO
}