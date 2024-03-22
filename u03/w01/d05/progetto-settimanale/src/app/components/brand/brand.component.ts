import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/car-model.interface';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent implements OnInit {
  cars: CarModel[] = [];
  filteredCars: CarModel[] = [];
  brand: string = '';

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.brand = params['brand'];
      this.filterCarsByBrand();
    });

    try {
      const response = await fetch('../../assets/db.json');
      const data = await response.json();
      
      if (data) {
        for (let i = 0; i < data.length; i++) {
          data[i].modelImage = 'https://www.kimballstock.com/pix/car/p/' + data[i].modelImage;
          data[i].brandLogo = 'https://listcarbrands.com/wp-content/uploads/' + data[i].brandLogo;
        }
        this.cars = data;
        this.filterCarsByBrand();
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  filterCarsByBrand() {
    if (!this.brand || !this.cars) {
      this.filteredCars = this.cars;
      return;
    }
    
    this.filteredCars = this.cars.filter(car => car.brand.toLowerCase() === this.brand.toLowerCase());
  }
}
