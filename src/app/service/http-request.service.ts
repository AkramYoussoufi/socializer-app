import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(endpoint: string, json: Object,token: string): Observable<any> {

    let response = {};

    const httpHeader = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post('http://localhost:8080/api/v1/' + endpoint, json, httpHeader);
  }
}
