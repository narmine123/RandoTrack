import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl = 'http://localhost:8080/api/feedback';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

 
 
  submitFeedback(feedback: { commentaire: string }): Observable<any> {
    return this.http.post(this.apiUrl, feedback, { responseType: 'text' });
  }
  
}


///pour enviyer le feedback au backend