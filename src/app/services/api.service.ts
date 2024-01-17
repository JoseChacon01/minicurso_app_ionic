import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private options: any = { headers: new HttpHeaders({ 'Content-type': 'application/json; charset=UTF-8' }) }; //Informa qual o tipo de dado que estamos enviando
  headers: any;

  constructor(
    private http: HttpClient,
  ) { }

  ListarCars(){
    return this.http.get('https://raw.githubusercontent.com/vega/vega/master/docs/data/cars.json');
  }


  PublicarDados(data: any) {                                                                 //passando como string
    return this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(data), this.options);
  }
}

