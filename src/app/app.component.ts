import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joaquim';
  userDate = {
    mail: 'joaquim@email.com',
    phone: '+55 11 945552551',
    andress: 'rua: alameda, n5420, jd vitoria, rio de janeiro',
    state: 'RJ',
    role: 'Adimin',
  }

  title = 'curso-angula-you';
}

