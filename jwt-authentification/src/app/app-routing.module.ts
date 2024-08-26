import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HikePhotosComponent } from './hike-photos/hike-photos.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';
import { HikeParticipationFormComponent } from './hike-participation-form/hike-participation-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FeedbackComponent } from './feedback/feedback.component'; // Assurez-vous que ce chemin est correct
import { AdminComponent } from './admin/admin.component';
import { EditHikeComponent } from './admin/edit-hike/edit-hike.component';
import { DeleteHikeComponent } from './admin/delete-hike/delete-hike.component';
import { AddHikeComponent } from './admin/add-hike/add-hike.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }, // Page par défaut

  { path: "register", component: RegisterComponent },
  {path: "login" , component: LoginComponent},
  {path: "dashboard" , component: DashboardComponent},
  { path: 'hikes', component: HikePhotosComponent },
  { path: 'hike-detail/:id', component: HikeDetailComponent },
  { path: 'participation', component: HikeParticipationFormComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-hike', component: AddHikeComponent },
  { path: 'edit-hike', component: EditHikeComponent },
  { path: 'delete-hike', component: DeleteHikeComponent },
  { path: '**', redirectTo: 'dashboard' }, // Redirection de toutes les routes inconnues vers la page de connexion
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
