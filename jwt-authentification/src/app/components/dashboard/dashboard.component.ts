import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; // Assurez-vous d'importer votre AuthService
import { Router } from '@angular/router';
import { HikeDetailComponent } from 'src/app//hike-detail/hike-detail.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  photos: string[] = [];
  hikes = [
    { id: 1, image: 'assets/R5.jpg', name: 'Hike 1' },
    { id: 2, image: 'assets/R2.png', name: 'Hike 2' },
    { id: 3, image: 'assets/R3.jpg', name: 'Hike 3' },
    { id: 4, image: 'assets/mer.jpg', name: 'Hike 4' },
    { id: 5, image: 'assets/motagne.jpg', name: 'Hike 5' },
    { id: 6, image: 'assets/foret.jpg', name: 'Hike 6' }
  ];
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getHikePhotos().subscribe(
      (data) => {
        this.photos = data;
      },
      (error) => {
        console.error('Error fetching hike photos', error);
      }
    );
  }

 
  goToHikeDetail(hikeId: number): void {
    console.log('Navigating to hike with id:', hikeId);  // Ajout d'un log pour vérifier l'appel de la méthode
    this.router.navigate(['/hike-detail', hikeId]);
  }
    openFeedbackPage() {
      this.router.navigate(['/feedback']);
    }  
  
}
