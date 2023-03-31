import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {


  sendGetRequest(endpoint: string, json: { email: string; }, token: string) {
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(json)
    };
    return this.httpClient.get('http://localhost:8080/api/v1/' + endpoint, httpOption);
  }

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(endpoint: string, json: Object,token: string): Observable<any> {
    const httpHeader = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post('http://localhost:8080/api/v1/' + endpoint, json, httpHeader);
  }
}
