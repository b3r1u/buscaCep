import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CepService {

    private url = `https://viacep.com.br/ws/`

    constructor(private httpClient: HttpClient) {

    }

    obterCep(cep: string): Observable<any> {
        const apiUrl = `${this.url}${cep}/json/`
        return this.httpClient.get<any>(apiUrl)
    }   

}