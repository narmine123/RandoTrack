import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-hike',
  templateUrl: './edit-hike.component.html',
  styleUrls: ['./edit-hike.component.scss']
})
export class EditHikeComponent implements OnInit {
  hike: any = {
    name: '',
    description: '',
    location: '',
    difficulty: '',
    length: ''
  };
  hikeId!: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hikeId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchHikeDetails();
  }

  fetchHikeDetails(): void {
    this.http.get(`http://localhost:8080/api/hikes/${this.hikeId}`)
      .subscribe(
        (response: any) => {
          this.hike = response;
        },
        error => {
          console.error('Erreur lors de la récupération des détails de la randonnée:', error);
        }
      );
  }

  onSubmit() {
    
    this.router.navigate(['/admin']); // Naviguer vers la page admin après ajout     
}}

