import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api';
  private hikes = [
    { id: 0, name: 'Randonnée 1', description: 'Description de la randonnée 1' },
    { id: 1, name: 'Randonnée 2', description: 'Description de la randonnée 2' },
    { id: 2, name: 'Randonnée 3', description: 'Description de la randonnée 3' }
  ];

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials)
      .pipe(
        catchError(error => {
          let errorMsg = 'An unknown error occurred!';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Client-side error: ${error.error.message}`;
          } else {
            errorMsg = `Server-side error: ${error.status} - ${error.statusText || ''} ${error.error?.message || ''}`;
          }
          console.error('Login error:', errorMsg);
          return throwError(errorMsg);
        })
      );
  }

  getHikePhotos(): Observable<string[]> {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<string[]>(`${this.baseUrl}/hikes/photos`, { headers })
      .pipe(
        catchError(error => {
          let errorMsg = 'An unknown error occurred!';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Client-side error: ${error.error.message}`;
          } else {
            errorMsg = `Server-side error: ${error.status} - ${error.statusText || ''} ${error.error?.message || ''}`;
          }
          console.error('Error fetching hike photos:', errorMsg);
          return throwError(errorMsg);
        })
      );
  }

 
  getHikeDetails(id: string): Observable<any> {
    const token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.baseUrl}/hikes/${id}`, { headers });
  }
}



