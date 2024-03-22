import { Component } from '@angular/core';
import { CarModel } from 'src/app/models/car-model.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent {
  cars: CarModel[] = [];
  featured: CarModel[] = [];
  brands: { brand: string, brandLogo: string }[] = [];;

  constructor() {
    this.getCars().then((data) => {
      this.cars = data;
      this.featuredCars();
      this.getUniqueBrands(this.cars);
    });
  }

  async getCars() {
    const response = await fetch('../../assets/db.json');
    const data = await response.json();
    console.log(data);
    if (data) {
      for (let i = 0; i < data.length; i++) {
        data[i].modelImage = 'https://www.kimballstock.com/pix/car/p/' + data[i].modelImage;
      }
    }
    return data;
  }

  featuredCars() {
    console.log(this.cars);
    while (this.featured.length < 2) {
      let index = Math.floor(Math.random() * this.cars.length);
      if (!this.featured.includes(this.cars[index])) {
        this.featured.push(this.cars[index]);
      }
    }
  }
  

  getUniqueBrands(cars: CarModel[]) {
    for (let i = 0; i < cars.length; i++) {
      if (!this.brands.some(brand => brand.brand === cars[i].brand)) {
        this.brands.push({brand: cars[i].brand, brandLogo: "https://listcarbrands.com/wp-content/uploads/" + cars[i].brandLogo})
      }
    }
    console.log(this.brands)
  }
}
