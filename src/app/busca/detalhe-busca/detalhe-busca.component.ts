import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Busca } from '../../objetos/busca';
import { ObjectLink } from '../../objetos/objectLink';
import { BASE_URL } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detalhe-busca',
  templateUrl: './detalhe-busca.component.html',
  styleUrls: ['./detalhe-busca.component.css']
})
export class DetalheBuscaComponent implements OnInit {

    resposta : any = {
      "created": "",
      "dataset": "",
      "date": "",
      "description": "",
      "fileFormat": [],
      "frequency": "",
      "identifier": "",
      "iri": "",
      "language": "",
      "organization": "",
      "relation": [],
      "source": "",
      "subject": [],
      "title": "",
      "type": "",
      "vocabularyEncodingScheme": []
  };
  relations : ObjectLink[] = [
    {
      "name" : "Conjunto de Dados de Professores",
      "desc" : "Conjunto de Dados de Professores",
      "link" : "/buscaDetalhe/6"
    },
    {
      "name" : "Conjunto de Dados de Matérias",
      "desc" : "Conjunto de Dados de Matérias",
      "link" : "/buscaDetalhe/4"
    },
    {
      "name" : "Conjunto de Dados de Departamentos",
      "desc" : "Conjunto de Dados de Departamentos",
      "link" : "/buscaDetalhe/1"
    }

  ];

  vocabularios : ObjectLink[] = [
    {
      "name" : "Academic Institution Internal Structure Ontology",
      "desc" : "AIISO (http://purl.org/vocab/aiiso/schema)",
      "link" : "http://purl.org/vocab/aiiso/schema"
    },
    {
      "name" : "Dublin Core Metadata Element Set, Version 1.1",
      "desc" : "DC (http://purl.org/dc/elements/1.1)",
      "link" : "http://purl.org/dc/elements/1.1"
    },
    {
      "name" : "Estruturas Organizacionais Governamentais Brasileira",
      "desc" : "VOCAB (http://vocab.e.gov.br/2011/09/org)",
      "link" : "http://vocab.e.gov.br/2011/09/org"
    },
    {
      "name" : "Friend of a Friend",
      "desc" : "FOAF (http://xmlns.com/foaf/0.1/)",
      "link" : "http://xmlns.com/foaf/0.1/"
    },
    {
      "name" : "UnB Ontologia Temporaria",
      "desc" : "UVOC (http://dadosabertos.unb.br/images/UnBVocabulario.owl)",
      "link" : "http://dadosabertos.unb.br/images/UnBVocabulario.owl"
    },
    {
      "name" : "Univ-bench Ontology",
      "desc" : "LUBM (http://swat.cse.lehigh.edu/onto/univ-bench.owl)",
      "link" : "http://swat.cse.lehigh.edu/onto/univ-bench.owl"
    },
    {
      "name" : "DCMI Metadata Terms",
      "desc" : "DCTERMS (http://purl.org/dc/terms)",
      "link" : "http://purl.org/dc/terms"
    },
    {
      "name" : "Metadata terms related to the DCMI Abstract Model",
      "desc" : "DCAM (http://purl.org/dc/dcam)",
      "link" : "http://purl.org/dc/dcam"
    },
    {
      "name" : "DCMI Type Vocabulary",
      "desc" : "DCMITYPE (http://purl.org/dc/dcmitype)",
      "link" : "http://purl.org/dc/dcmitype"
    },
  ];
 
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    
   }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    var url = BASE_URL+"/busca/detalhar/"+id;
    this.http.get(url)
      .subscribe(
        (response) => {
          this.resposta = response;
          console.log(this.resposta);
        },
        (error) => {console.log(error)}
      ),error=>{
        console.log(error);// Error getting the data
     }    
  }
  getBusca(): void{
    const id = +this.route.snapshot.paramMap.get('id');

    console.log(id);
  }


}
