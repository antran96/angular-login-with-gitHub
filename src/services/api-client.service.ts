import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { Observable, map } from 'rxjs';
import { ApiUrl } from 'src/data/api-url.data';
import { CONST_DATA } from 'src/data/const.data';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  public option = CONST_DATA.headers
  constructor(private http: HttpClientService) { }

  getListRepos(): Observable<any> {
    return this.http.get(ApiUrl.listRepo, CONST_DATA.headers)
      .pipe(
        map((res: any) => res)
      )
  }

  getListLanguages(): Observable<any> {
    return this.http.get(ApiUrl.listLanguages, CONST_DATA.headers)
      .pipe(
        map((res: any) => res)
      )
  }

  login(params: any): Observable<any> {
    return this.http.post('http://localhost:8000/' + ApiUrl.login, '' ,{
      params: params,
      headers: CONST_DATA.headers
    })
      .pipe(
        map((res: any) => res)
      )
  }
}
