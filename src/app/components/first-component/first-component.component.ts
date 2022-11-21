import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
name: string = 'Fkh7';
age: number=21;
job: string = 'ti'
hobbies = [ 'jogar futebol', 'Ler', 'Sair com amigos' ];

car = {
  name: 'Saveiro',
  year: '2018',
  color: 'vermelha',
  stilo:  ['Rebaixada', 'Arqueada'],
};

}
