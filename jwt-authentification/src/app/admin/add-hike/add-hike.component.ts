import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-hike',
  templateUrl: './add-hike.component.html',
  styleUrls: ['./add-hike.component.scss']
})
export class AddHikeComponent {
  hike = {
    name: '',
    description: '',
    location: '',
    difficulty: '',
    length: null,
    startDate: '',
    endDate: '',
    gpsTrack: '',
    budget: null,
    maxParticipants:null
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    
        this.router.navigate(['/admin']); // Naviguer vers la page admin après ajout     
}}
