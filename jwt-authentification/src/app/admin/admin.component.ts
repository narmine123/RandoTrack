import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}

  navigateToAdd() {
    this.router.navigate(['/add-hike']);
  }

  navigateToEdit() {
    this.router.navigate(['/edit-hike']);
  }

  navigateToDelete() {
    this.router.navigate(['/delete-hike']);
  }
}