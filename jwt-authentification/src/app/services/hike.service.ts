import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HikeService {
  private baseUrl = 'http://localhost:8080/api/hikes'; // Remplacez par l'URL correcte

  constructor(private http: HttpClient) {}

  getHikeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getHikes(id: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  addHike(hike: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, hike);
  }

  updateHike(hike: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${hike.id}`, hike);
  }
  incrementParticipants(hikeId: number, newParticipantCount: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${hikeId}/participants`, { participants: newParticipantCount });
  }
  
}
