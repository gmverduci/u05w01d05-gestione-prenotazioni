import { Component, Input } from '@angular/core';
import { CarModel } from 'src/app/models/car-model.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  cars: CarModel[] = [];
  availableCars: CarModel[] = [];
  unavailableCars: CarModel[] = [];

  constructor() {}
  @Input() car: CarModel | undefined;
}
