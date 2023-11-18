import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public clearAll(): void {
    window.sessionStorage.clear();
  }

  public saveItem(key: string, data: any) {
    window.sessionStorage.setItem(key, btoa(JSON.stringify(data)))
  }

  public getItem(key: string) {
    let data = window.sessionStorage.getItem(key)
    if(data) {
      return JSON.parse(atob(data))
    } else {
      return null
    }
  }

}
