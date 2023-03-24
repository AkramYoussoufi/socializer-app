import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(endpoint: string, json: Object): Object {
    return this.httpClient.post('http://localhost:8080/api/v1/' + endpoint, json)
  }
}
