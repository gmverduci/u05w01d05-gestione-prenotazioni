import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private location: Location) {}

  getCurrentUrl(): string {
    const currentUrl = this.location.path();
    return currentUrl;
  }
}
