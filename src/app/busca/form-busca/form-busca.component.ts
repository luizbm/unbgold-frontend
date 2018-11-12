import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_URL } from '../../app.component';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.css']
})

export class FormBuscaComponent implements OnInit {
  buscaForm: FormGroup;
  resultados : any ;
  constructor(
    private http: HttpClient, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.buscaForm = this.formBuilder.group({
      busca: ['', Validators.required],
    });
  }

  buscar() {
    const busca = this.buscaForm.get('busca').value;
    var url = BASE_URL+"/busca/"+busca;
    this.http.get(url, {headers: new HttpHeaders()
        //.set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Credentials','true')
        .set('Access-Control-Allow-Methods', 'GET')
    })
      .subscribe(
        (response) => {
          this.resultados = response;
          console.log(this.resultados);
        },
        (error) => {console.log(error)}
      ),error=>{
        console.log(error);// Error getting the data
     }
  }
}
