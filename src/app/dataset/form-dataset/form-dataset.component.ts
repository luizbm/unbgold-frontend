import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { select_option } from '../../objetos/select_option';
import { select_option_group } from '../../objetos/select_option_group';
import { list_parametros } from '../../objetos/list_parametros';
import { MatChipInputEvent, MatTableDataSource } from '@angular/material';
import { marcador } from '../../objetos/marcador';
import { ontologia } from '../../objetos/ontologia';
import { SelectionModel } from '@angular/cdk/collections';
import { lista_ontologia } from '../../objetos/mock_ontologias';
import { list_indexacao } from 'src/app/objetos/list_indexacao';
import { INDEXACAOLIST } from 'src/app/objetos/mock-indexacao';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from 'src/app/app.component';
import { tap } from 'rxjs/operators';


//export const ELEMENT_DATA = lista_ontologia;

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: ontologia[] = lista_ontologia;

const ELEMENT_DATA_INDEX: list_indexacao[] = INDEXACAOLIST;

@Component({
  selector: 'app-form-dataset',
  templateUrl: './form-dataset.component.html',
  styleUrls: ['./form-dataset.component.css']
})


export class FormDatasetComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  fourFormGroup: FormGroup;


  displayedColumns: string[] = ['select', 'nm_ontologia', 'prefixo_ontologia', 'url_ontologia'];
  dataSource = new MatTableDataSource<ontologia>(ELEMENT_DATA);;
  selection = new SelectionModel<ontologia>(true, []);

  displayedColumnsColunas: string[] = ['nome', 'selectColunas', 'predicadoColuna', 'objeto', 'complemento'];
  dataSourceColunas = new MatTableDataSource<list_indexacao>(ELEMENT_DATA_INDEX);;
  selectionColunas = new SelectionModel<list_indexacao>(true, []);

  instancias_ckan: select_option[] = [
    {"value" : 1, "label" : "Dados Abertos da UnB" },
    {"value" : 2, "label" : "Dados Abertos da UFRN" },
    {"value" : 3, "label" : "Dados Abertos da UFG" }
  ]

  frequencia: select_option[] = [
    {"value" : 1, "label" : "Diária" },
    {"value" : 2, "label" : "Semanal" },
    {"value" : 3, "label" : "Mensal" },
    {"value" : 4, "label" : "Bismestral" },
    {"value" : 5, "label" : "Semestral" },
    {"value" : 6, "label" : "Período Letivo" },
    {"value" : 7, "label" : "Anual" },
  ]

  dias : select_option[] = [
    {"value" : 1, "label" : "Domingo" },
    {"value" : 2, "label" : "Segunda" },
    {"value" : 3, "label" : "Terça" },
    {"value" : 4, "label" : "Quarta" },
    {"value" : 5, "label" : "Quinta" },
    {"value" : 6, "label" : "Sexta" },
    {"value" : 7, "label" : "Sábado" },
  ]

  colunas : select_option[] = [
    {"value" : 1, "label" : "cod_departamento" },
    {"value" : 2, "label" : "sigla_departamento" },
    {"value" : 3, "label" : "nome_departamento" },
    {"value" : 4, "label" : "cod_orgao" },
    {"value" : 5, "label" : "nome_orgao" },
  ];

  termos : any = [];

  tipo_parametros : select_option_group[] = [
    {
      "name" : "Fixo",
      "select_option" : [{"value" : 10, "label" : "Parametro Fixo" }],
      "disabled" : false
    },
    {
      "name" : "Temporal",
      "select_option" : [
        {"value" : 1, "label" : "Dia" },
        {"value" : 2, "label" : "Semana" },
        {"value" : 3, "label" : "Mês" },
        {"value" : 4, "label" : "Bimestre" },
        {"value" : 5, "label" : "Semestre" },
        {"value" : 6, "label" : "Ano" },
        {"value" : 7, "label" : "Periodo Letivo" },
     ],
      "disabled" : false
    }  
  ]

  form_parametro_nome: String;
  form_parametro_tipo: number;
  form_parametro_valor: String;

  lista_parametros : list_parametros[] = [
    {"id" : 1, "nome" : "ano", "tipo" : 4, "valor" : "Anual" },
    {"id" : 2, "nome" : "departamento", "tipo" : 10, "valor" : "Departamento de Administração" },
    {"id" : 3, "nome" : "ano", "tipo" : 4, "valor" : "Anual" },
    {"id" : 4, "nome" : "departamento", "tipo" : 10, "valor" : "Departamento de Administração" },
    {"id" : 5, "nome" : "ano", "tipo" : 4, "valor" : "Anual" },
    {"id" : 6, "nome" : "departamento", "tipo" : 10, "valor" : "Departamento de Administração" },
    ];
   parametro: list_parametros;
   displayedColumnsParametro: string[] = ['nome', 'tipo', 'valor', 'id'];
   marcadores: marcador[] = [
    {nome: 'Educação'}, 
    {nome: 'Graduação'},
    {nome: 'Ensino Superior'},
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  

  disabledParametro = true;
  indexar = false;

  debug : string = "DEBUG INICIAL";
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.marcadores.push({nome: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(marca: marcador): void {
    const index = this.marcadores.indexOf(marca);

    if (index >= 0) {
      this.marcadores.splice(index, 1);
    }
  }
  
  constructor( 
    private http: HttpClient, 
    private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      indexar: []
    });
    this.secondFormGroup = this.formBuilder.group({
      fonte: [''],      
      form_parametro_nome: [''], 
      form_parametro_valor: [''],
      form_parametro_tipo: [''],
      titulo: [''],
      descricao: [''],
      documentacao: [''],
      organizacao: [''],
      granularidade: [''],
      endereco: [''],
      nome_parametro: [''],
      tipo_parametro: [''],
      valor_parametro: [''],
    });
    this.threeFormGroup = this.formBuilder.group({
      //threeCtrl: ['', Validators.required]
    });
    this.fourFormGroup = this.formBuilder.group({
      id_termo: [''],
      uri: [''],
      complemento_iri: [''],
      nameFormControl:[''],
      objetoFormControl: ['']
    });
   
  }


  viewTipoParametro(linha : list_parametros){
    var retorno  = "Parâmetro Temporal";
    if(linha.tipo == 10){
      retorno = "Parâmetro Fixo";
    }
    return retorno;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelectedColunas() {
    const numSelectedColunas = this.selectionColunas.selected.length;
    const numRowsColunas = this.dataSourceColunas.data.length;
    return numSelectedColunas === numRowsColunas;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleColunas() {
    this.isAllSelectedColunas() ?
        this.selectionColunas.clear() :
        this.dataSourceColunas.data.forEach(row => this.selectionColunas.select(row));
  }

  verefificar(){
    var log = [];
    console.log(this.selection.selected);
  }
  verefificarColunas(){
    var log = [];
    console.log(this.selectionColunas.selected);
  }

  buscarOntologiaSelecionadas() {
    var onto : select_option[] = [];
    var termos : select_option[] = [];
    this.selection.selected.forEach(function(select){
//     var so: select_option = {"value": select.id_ontologia, "label": select.nm_ontologia};
//     console.log(so);
     onto.push({"value": select.id_ontologia, "label": select.nm_ontologia});
    });
    console.log(onto);
    var url = BASE_URL+"/termo/buscarSelectPorIdsOntologiaNovo/";
  
    this.http.put<select_option>(
      url, 
      onto,
      {headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Credentials','true')
        .set('Access-Control-Allow-Methods', 'GET, PUT, POST')
        .set('access-control-allow-headers', 'Accept, Accept-Language, Content-Language, Content-Type, X-ACCESS_TOKEN, X-CSRF-Token, Access-Control-Allow-Origin, Authorization, Origin, x-requested-with, Content-Range, Content-Disposition, Content-Description')
        .set('Allow', 'OPTIONS')
    }
      ).subscribe(
        (response) => {
          this.termos = response;
          console.log(response);
        },
        (error) => {console.log(error)}
      ),error=>{
        console.log(error);// Error getting the data
     } 
      //console.log(url);
  }
  habilitar(object){
   
    
    //rt(object.checked);
  }
  buscarIntegrado(element){
    console.log(element)

    var url = BASE_URL+"/dataset/buscaPorTipo/"+element.termo;
    this.http.get(url, {headers: new HttpHeaders()
        //.set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Credentials','true')
        .set('Access-Control-Allow-Methods', 'GET')
    })
      .subscribe(
        (response) => {
          element.objeto = [{"value" : 1, "label" : "Objeto Literal"}];
          console.log(response);
          for(var i:number=0;i<response.length;i++){
            console.log(response[i]);
            element.objeto.push({"value": response[i].id_dataset, "label": response[i].ds_dataset});
          }
          console.log( element.objeto);
        },
        (error) => {console.log(error)}
      ),error=>{
        console.log(error);// Error getting the data
     }
  }
  buscarColunaDataset(element){
   
    console.log(element)

    var url = BASE_URL+"/coluna/dataset/"+element.tipoObjeto;
    element.complemento = [];
    this.http.get(url, {headers: new HttpHeaders()
        //.set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Credentials','true')
        .set('Access-Control-Allow-Methods', 'GET')
    })
      .subscribe(
        (response) => {
          element.complemento = [];
          console.log(response);
          for(var i:number=0;i<response.length;i++){
            console.log(response[i]);
            element.complemento.push({"value": response[i].id_coluna, "label": response[i].nm_campo});
          }
          console.log( element.objeto);
        },
        (error) => {console.log(error)}
      ),error=>{
        console.log(error);// Error getting the data
     }
  }
  
  habilitarParametroValor(){
    if(this.form_parametro_tipo == 10){
      this.disabledParametro = false;
    }else{
      this.disabledParametro = true;
    }
    
  }
  testeBotao(){
    console.log(this.indexar);
  }
  ecluirParametro(par){
//    if(confirm('Deseja excluir o parâmetro?')){
      var aux  = this.lista_parametros;
      this.lista_parametros = [];
      aux.forEach(element => {
        var colocar = true;
        if(element.nome == par.nome  && element.tipo == par.tipo && element.valor == par.valor && element.id == par.id){
         colocar = false;          
        }
        if(colocar){
          this.lista_parametros.push(element);
        }
      });
 //   }
  }
  incluirParametro(){
    var aux  = this.lista_parametros;
    this.lista_parametros = [];
    aux.forEach(element => {
      this.lista_parametros.push(element);
    });

    var valor = this.form_parametro_valor
    if(this.form_parametro_tipo != 10){
      switch(this.form_parametro_tipo){
        case 1: valor = "Dia"; break;
        case 2: valor = "Semana"; break;
        case 3: valor = "Mês"; break;
        case 4: valor = "Bimestre"; break;
        case 5: valor = "Semestre"; break;
        case 6: valor = "Ano"; break;
        case 7: valor = "Periodo Letivo"; break;
      }
    }
    this.lista_parametros.push(
      {
        "id" : 99, 
        "nome" : this.form_parametro_nome, 
        "tipo" : this.form_parametro_tipo, 
        "valor" : valor 
      }
    );          
    var ap = this.tipo_parametros;
  }



}
