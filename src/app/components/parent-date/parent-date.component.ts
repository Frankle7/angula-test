import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  templateUrl: './parent-date.component.html',
  styleUrls: ['./parent-date.component.css']
})
export class ParentDateComponent {
  @Input() name!: string;
  @Input () userDate!: {
    mail: string,
    phone: number,
    andress: string,
    state: string,
    role: string,
  };


}
