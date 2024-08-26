import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  errorMessage: string = '';

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    const email = this.loginForm?.get('email')?.value;
    const password = this.loginForm?.get('password')?.value;

    // Vérification des identifiants de l'administrateur
    if (email === 'admin@gmail.com' && password === 'admin') {
      // Redirection vers la page d'administration
      this.router.navigateByUrl("/admin");
    } else {
      // Gestion du flux de connexion normal avec génération de token
      this.service.login(this.loginForm?.value).subscribe(
        (response) => {
          console.log(response);
          if (response.jwt != null) {
            alert("Hello, Your token is " + response.jwt);
            const jwtToken = response.jwt;
            localStorage.setItem('jwt', jwtToken);
            this.router.navigateByUrl("/dashboard");
          }
        },
        (error) => {
          console.error('Login error', error);
          this.errorMessage = 'Invalid login credentials';
        }
      );
    }
  }
}
