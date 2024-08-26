import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hike-participation-form',
  templateUrl: './hike-participation-form.component.html',
  styleUrls: ['./hike-participation-form.component.scss']
})
export class HikeParticipationFormComponent {
  participant = {
    weight: null,
    illness: '',
    nationality: '',
    age: null,
    email: '',
    phone: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/participants', this.participant)
      .subscribe(response => {
        console.log('Participant saved:', response);
        this.incrementParticipants(); // Appeler l'incrémentation après l'inscription
        this.router.navigate(['/thank-you']);
      }, error => {
        console.error('Error:', error);
      });
  }

  incrementParticipants() {
    const hikeId = 1; // Remplacez par l'ID de la randonnée actuelle
    this.http.post(`http://localhost:8080/api/hikes/${hikeId}/increment-participants`, {})
      .subscribe(response => {
        console.log('Participants incremented:', response);
      }, error => {
        console.error('Error incrementing participants:', error);
      });
  }
}
