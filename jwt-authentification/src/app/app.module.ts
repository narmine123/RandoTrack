import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HikePhotosComponent } from './hike-photos/hike-photos.component';
import { HikeDetailComponent } from './hike-detail/hike-detail.component';
import { HikeParticipationFormComponent } from './hike-participation-form/hike-participation-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddHikeComponent } from './admin/add-hike/add-hike.component';
import { EditHikeComponent } from './admin/edit-hike/edit-hike.component';
import { DeleteHikeComponent } from './admin/delete-hike/delete-hike.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HikePhotosComponent,
    HikeDetailComponent,
    HikeParticipationFormComponent,
    ThankYouComponent,
    FeedbackComponent,
    AdminComponent ,
    AddHikeComponent,
    EditHikeComponent,
    DeleteHikeComponent,
    HomeComponent
    
   
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
