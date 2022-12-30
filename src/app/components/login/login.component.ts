import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/user.models';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private apiService: ApiService,private router: Router,private _snackBar: MatSnackBar) { }
  user: Persona[] = [];
  nombre = '';
  password = '';
  durationInSeconds = 5;
  loading = false;
  ngOnInit(): void {
    this.apiService.getAllUser().subscribe({
      next: (data) => {
        console.log('response received', data);
        this.user = data.lista;
        console.log('userr ', this.user);
      },
    });

  }
  ingresar() {
    if (this.user.find((data) => data.nombre == this.nombre)?.nombre) {
      console.log('User correcto');
      this.fakeloading();
    } else {
      this.openSnackBar("Usuario y contraseña incorrecto","Error")
      console.log('Noo');
    }
  }
  ingresarFake() {
    if (true) {
      console.log('User correcto');
      this.fakeloading();
    } else {
      this.openSnackBar("Usuario y contraseña incorrecto","Error")
      console.log('Noo');
    }
  }
  fakeloading() {
    this.loading=!this.loading
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    },1500);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
