import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { HikeService } from '../services/hike.service';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.scss']
})
export class HikeDetailComponent implements OnInit {
  hikeId: number;
  hike: any;
  successMessage: string=''; // Variable pour afficher le message de succès

  
  hikes = [
    { id: 1, image: 'assets/R5.jpg', name: 'Sentier de la Plage de Raf Raf' ,description: ' Une promenade côtière offrant des vues spectaculaires sur les plages de sable fin et eau cristalline.',Location: 'Raf Raf, Tunisie',Difficulty: 'Facile',Length: '6 km' ,participants: 5,  maxParticipant: 20,budget: 90,startDate: new Date('2024-08-10'),endDate: new Date('2024-08-11'), gpsTrack: 'https://www.google.tn/maps/place/Rafraf+Plage+,+Bizerte+,+Tunisie/@37.1924125,10.1909722,14z/data=!4m10!1m2!2m1!1sSentier+de+la+Plage+de+Raf+Raf!3m6!1s0x12e2c1d14946bb8b:0x5b6dfe0d7e21fa5f!8m2!3d37.1924125!4d10.2084817!15sCh5TZW50aWVyIGRlIGxhIFBsYWdlIGRlIFJhZiBSYWZaICIec2VudGllciBkZSBsYSBwbGFnZSBkZSByYWYgcmFmkgEFdmlsbGGaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTndNWFZtTkVWM0VBReABAA!16s%2Fg%2F11c7hg1stm?entry=ttu' },
    { id: 2, image: 'assets/R2.png', name: 'Forêt de Ain Draham' ,description: 'Une randonnée tranquille à travers la forêt immersive à travers les bois denses et verts de Ain Draham, connue pour ses paysages verdoyants et sa biodiversité et idéale pour les amoureux de la nature.',Location: ' Ain Draham, Tunisie',Difficulty: 'Modéré',Length: '12 km',participants: 10,  maxParticipant: 30,budget: 80,startDate: new Date('2024-08-20'), endDate: new Date('2024-08-21'),gpsTrack: 'https://www.google.tn/maps/place/For%C3%AAt+A%C3%AFn+Draham/@36.7451635,8.7200707,13z/data=!4m10!1m2!2m1!1sFor%C3%AAt+de+Ain+Draham!3m6!1s0x12fb39005ef1a12f:0x5559ecd14a65c875!8m2!3d36.770851!4d8.7591311!15sChRGb3LDqnQgZGUgQWluIERyYWhhbZIBC2hpa2luZ19hcmVh4AEA!16s%2Fg%2F11vprw6rr1?entry=ttu'},
    { id: 3, image: 'assets/R3.jpg', name: 'Circuit des Dunes de Douz',description: 'Un parcours captivant à travers les dunes dorées du désert de Douz, offrant des vues impressionnantes sur les paysages désertiques.',Location: 'Douz, Tunisie',Difficulty: 'Difficile',Length: '15 km',participants: 8,  maxParticipant: 25 ,budget: 120,startDate: new Date('2024-09-05'), endDate: new Date('2024-09-06'),gpsTrack: 'https://www.google.tn/maps/place/Eriguet+dunes/@33.9948126,7.2788152,9z/data=!4m10!1m2!2m1!1sCircuit+des+Dunes+de+Douz!3m6!1s0x1257f76ce8a81fb1:0x4f146a8c8da1db3f!8m2!3d33.9948126!4d7.8391179!15sChlDaXJjdWl0IGRlcyBEdW5lcyBkZSBEb3V6WhsiGWNpcmN1aXQgZGVzIGR1bmVzIGRlIGRvdXqSAQtoaWtpbmdfYXJlYZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSb2IwNXRhalZuUlJBQuABAA!16s%2Fg%2F11rkp3mwgy?entry=ttu' },
    { id: 4, image: 'assets/mer.jpg', name: 'Sentier du Cap Bon' ,description: 'Une randonnée offrant des vues panoramiques sur la mer Méditerranée et les montagnes avoisinantes.',Location: 'Cap Bon, Tunisie',Difficulty: 'Moyen',Length: '12 km',participants: 10,  maxParticipant: 20,Budget: 80,startDate: new Date('2024-09-10'),endDate: new Date('2024-09-11'), gpsTrack:'https://www.google.tn/maps/place/Cap+Bon+Extremity/@37.0819871,11.0388889,14z/data=!4m10!1m2!2m1!1sSentier+de+Cap+Bon!3m6!1s0x131d3f952d7e6107:0x37efed92778a719c!8m2!3d37.07174!4d11.0408651!15sChJTZW50aWVyIGRlIENhcCBCb26SAQ9uYXR1cmVfcHJlc2VydmXgAQA!16s%2Fg%2F11g2tmwqrj?entry=ttu'},
    { id: 5, image: 'assets/motagne.jpg', name: 'Circuit du Djebel Zaghouan',description: 'Ucircuit captivant qui traverse les pentes du Djebel Zaghouan,connue pour ses paysages pittoresques et son riche patrimoine historique.' ,Location: 'Djebel Zaghouan, Tunisie',Difficulty: 'Difficile',Length: '15 km',participants: 8,  maxParticipant: 25,Budget: 100,  startDate: new Date('2024-09-20'), endDate: new Date('2024-09-21'),gpsTrack: 'https://www.google.tn/maps/place/Pic+Jebel+Zaghouan/@36.351888,10.1120798,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd0f3bc7e3b9eb:0x4e5cf27f1a5d0e28!8m2!3d36.351888!4d10.1120798!16s%2Fg%2F11khzk4tzt?entry=ttu'},
    { id: 6, image: 'assets/foret.jpg', name: 'Sentier du Lac Ichkeul',description: 'Un sentier autour du lac, parfait pour le camping  offrant des vues spectaculaires sur le lac et la faune environnante, idéal pour les amoureux de la nature.',Location: ' Lac Ichkeul, Tunisie',Difficulty: 'Modéré',Length: '12 km' ,participants: 10,  maxParticipant: 30,  budget: 70,startDate: new Date('2024-10-05'),endDate: new Date('2024-10-06'),gpsTrack:'https://www.google.tn/maps/place/Grotte+de+Ichkeul/@37.1370819,9.6005196,12z/data=!4m10!1m2!2m1!1sSentier+du+Lac+Ichkeul!3m6!1s0x12e33b9886ce4b01:0xf0afcaf59c9697d!8m2!3d37.1370819!4d9.6705574!15sChZTZW50aWVyIGR1IExhYyBJY2hrZXVsWhgiFnNlbnRpZXIgZHUgbGFjIGljaGtldWySAQ93aWxkbGlmZV9yZWZ1Z2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUndNblZRTWxoUkVBReABAA!16s%2Fg%2F11f2wd0mfz?entry=ttu'}
  ];

  constructor(
    private route: ActivatedRoute,
 private router: Router, // Ajout du Router

  ) {
    this.hike = history.state.hike; // Assuming hike data is passed via state

  }
  
  ngOnInit(): void {
    const hikeId = +this.route.snapshot.paramMap.get('id')!;

    console.log('Hike ID:', hikeId); // Ajoutez ce log
    this.hike = this.hikes.find(hike => hike.id === hikeId);
    console.log('Hike Details:', this.hike); // Ajoutez ce log
  }
  
  participate(hikeId: number): void {
    console.log(`Participate clicked for hike ID: ${hikeId}`);
    if (this.incrementParticipants()) {
      this.successMessage = 'Votre participation a été enregistrée avec succès!';
      setTimeout(() => {
        this.router.navigate(['/participation']);
      }, 2000); // Navigue vers la page après 2 secondes
    }
  }
  incrementParticipants(): boolean {
    if (this.hike.participants < this.hike.maxParticipant) {
      this.hike.participants++;
      console.log('Nombre de participants augmente', this.hike.participants);
      return true;
    } else {
      alert('Nombre maximum de participants atteint');
      return false;
    }
  }
}
 
  
  

  
