import { Component } from '@angular/core';
import { CarModel } from 'src/app/models/car-model.interface';


@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.scss']
})
export class AvailableComponent {
  cars: CarModel[] = [];
  availableCars: CarModel[] = [];

  constructor() {
    this.getCars().then((data) => {
      this.cars = data;
      console.log('All Cars:', this.cars);
      this.filteravailableCars();
      console.log('Unavailable Cars:', this.availableCars);
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

  filteravailableCars() {
    this.availableCars = this.cars.filter((car) => car.available);
    console.log('Unavailable Cars:', this.availableCars);
  }
}
