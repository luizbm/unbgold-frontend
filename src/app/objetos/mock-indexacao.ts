import { list_indexacao } from "./list_indexacao";

export const INDEXACAOLIST: list_indexacao[] = [
    {
        "id": 1,
        "nome": "codigo",
        "publicar": false,
        "predicado": [
            {"value" : 1, "label" : "PEDICADO 1"}, {"value" : 2, "label" : "PEDICADO 2"}, {"value" : 3, "label" : "PEDICADO 3"}, {"value" : 4, "label" : "PEDICADO 4"}
        ],
        "objeto": [
            {"value" : 1, "label" : "Objeto Literal"}, {"value" : 2, "label" : "OBJETO 2"}, {"value" : 3, "label" : "OBJETO 3"}, {"value" : 4, "label" : "OBJETO 4"}
        ],
        "complemento": [
            {"value" : 1, "label" : "COMPLEMENTO 1"}, {"value" : 2, "label" : "COMPLEMENTO 2"}, {"value" : 3, "label" : "COMPLEMENTO 3"}, {"value" : 4, "label" : "COMPLEMENTO 4"}
        ],
        "temcomplemento" : false,
        "termo": 0, 
        "tipoObjeto": 1, 
        "colunaComplemento": 0 
    },
    {
        "id": 2,
        "nome": "nome_curso",
        "publicar": false,
        "predicado": [
            {"value" : 1, "label" : "Objeto Literal"}, {"value" : 2, "label" : "PEDICADO 2"}, {"value" : 3, "label" : "PEDICADO 3"}, {"value" : 4, "label" : "PEDICADO 4"}
        ],
        "objeto": [
            {"value" : 1, "label" : "OBJETO 1"}, {"value" : 2, "label" : "OBJETO 2"}, {"value" : 3, "label" : "OBJETO 3"}, {"value" : 4, "label" : "OBJETO 4"}
        ],
        "complemento": [
            {"value" : 1, "label" : "COMPLEMENTO 1"}, {"value" : 2, "label" : "COMPLEMENTO 2"}, {"value" : 3, "label" : "COMPLEMENTO 3"}, {"value" : 4, "label" : "COMPLEMENTO 4"}
        ],
        "temcomplemento" : false,
        "termo": 0, 
        "tipoObjeto": 1, 
        "colunaComplemento": 0 
    },
    {
        "id": 3,
        "nome": "departamento",
        "publicar": false,
        "predicado": [
            {"value" : 1, "label" : "PEDICADO 1"}, {"value" : 2, "label" : "PEDICADO 2"}, {"value" : 3, "label" : "PEDICADO 3"}, {"value" : 4, "label" : "PEDICADO 4"}
        ],
        "objeto": [
            {"value" : 1, "label" : "Objeto Literal"}, {"value" : 2, "label" : "OBJETO 2"}, {"value" : 3, "label" : "OBJETO 3"}, {"value" : 4, "label" : "OBJETO 4"}
        ],
        "complemento": [
            {"value" : 1, "label" : "COMPLEMENTO 1"}, {"value" : 2, "label" : "COMPLEMENTO 2"}, {"value" : 3, "label" : "COMPLEMENTO 3"}, {"value" : 4, "label" : "COMPLEMENTO 4"}
        ],
        "temcomplemento" : false,
        "termo": 0, 
        "tipoObjeto": 1, 
        "colunaComplemento": 0 
    }
]