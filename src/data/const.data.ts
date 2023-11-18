import { HttpHeaders } from "@angular/common/http";

export const CONST_DATA: any = {
    keyTokenHeader: 'Authorization',
    typeToken: 'Bearer ',
    statusCodeSuccess: '000000',
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
    }),
  }