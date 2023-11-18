import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {}

  public get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError));
  }

  public post<T>(url: string, data: any, options?: any) {
    return this.http
      .post<T>(url, data, options)
      .pipe(catchError(this.handleError));
  }

  public put<T>(url: string, data: any, options?: any) {
    return this.http
      .put<T>(url, data, options)
      .pipe(catchError(this.handleError));
  }

  public delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it   accordingly.
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      
    }
    // return an observable with a user-facing error message
    return throwError('Error Occurred; please try again later.');
  }
}
