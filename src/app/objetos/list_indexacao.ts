import { select_option } from "./select_option";

export class list_indexacao{
    id: number;
    nome: string;
    publicar: boolean;
    predicado: select_option[];
    objeto: select_option[];
    complemento: select_option[];
    temcomplemento: boolean;
    termo: number;
    tipoObjeto: number;
    colunaComplemento: number;
}