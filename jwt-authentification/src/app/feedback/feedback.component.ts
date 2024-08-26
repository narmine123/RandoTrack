import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from '../services/feedback.service'; // Assurez-vous que le chemin est correct
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  hikeId!: number;
  comment: string = ''; // Déclaration de la propriété comment
  feedbackMessage: string = ''; // Déclaration de la propriété feedbackMessage

  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hikeId = +params['id'];
    });
  }

  onSubmitComment() {
    const feedbackData = { commentaire: this.comment };
    this.feedbackService.submitFeedback(feedbackData).subscribe(
      response => {
        console.log('Feedback submitted successfully:', response);
        this.feedbackMessage = 'Votre feedback a été envoyé avec succès.';
        this.comment = ''; // Réinitialiser le champ de texte
      },
      error => {
        console.error('Erreur lors de l\'envoi du feedback:', error);
        this.feedbackMessage = 'Une erreur est survenue lors de l\'envoi de votre feedback.';
      }
    );
  }
  
}
