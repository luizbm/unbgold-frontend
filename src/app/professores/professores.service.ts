import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { TokenService } from "@app/core/token/token.service";

const PROFESSORES_BASE_URL = 'http://localhost:3000/api/professors';

@Injectable()
export class ProfessoresService {

    constructor(private http: HttpClient, private tokenService: TokenService){}

    todosProfessores() {
        return this.http.get(PROFESSORES_BASE_URL);
    }

    cadastraProfessor(professor) {
        return this.http.post( PROFESSORES_BASE_URL,
            professor,
            {
                headers: new HttpHeaders()
                  .set('x-access-token', this.tokenService.recuperaToken())
                  .set('Content-Type', 'application/json')
              }
            );
    }
}