import { Component } from '@angular/core';
import { CarModel } from 'src/app/models/car-model.interface';

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrls: ['./unavailable.component.scss'],
})
export class UnavailableComponent {
  cars: CarModel[] = [];
  unavailableCars: CarModel[] = [];

  constructor() {
    this.getCars().then((data) => {
      this.cars = data;
      console.log('All Cars:', this.cars);
      this.filterUnavailableCars();
      console.log('Unavailable Cars:', this.unavailableCars);
    });
  }

  async getCars() {
    const response = await fetch('../../assets/db.json');
    const data = await response.json();
    console.log(data);
    if (data) {
      for (let i = 0; i < data.length; i++) {
        data[i].modelImage =
          'https://www.kimballstock.com/pix/car/p/' + data[i].modelImage;
        data[i].brandLogo =
          'https://listcarbrands.com/wp-content/uploads/' + data[i].brandLogo;
      }
    }
    return data;
  }

  filterUnavailableCars() {
    this.unavailableCars = this.cars.filter((car) => !car.available);
    console.log('Unavailable Cars:', this.unavailableCars);
  }
}
