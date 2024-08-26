import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-hike',
  templateUrl: './delete-hike.component.html',
  styleUrls: ['./delete-hike.component.scss']
})
export class DeleteHikeComponent {
  hikeId: number | null = null;
  message: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onDelete(): void {
    if (this.hikeId !== null) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette randonnée?')) {
        this.http.delete(`http://localhost:8080/api/hikes/${this.hikeId}`)
          .subscribe(
            () => {
              this.message = 'Randonnée supprimée avec succès.';
              this.router.navigate(['admin']); // Navigate back to the admin page after adding the hike

              this.hikeId = null; // Reset the input
            },
            error => {
              console.error('Erreur lors de la suppression de la randonnée:', error);
              this.message = 'Erreur lors de la suppression de la randonnée.';
            }
          );
      }
    } else {
      this.message = 'Veuillez entrer un ID valide.';
    }
  }
  onSubmit() {
    
    this.router.navigate(['/admin']); // Naviguer vers la page admin après ajout     
}}


