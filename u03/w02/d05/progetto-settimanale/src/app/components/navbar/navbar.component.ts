import { Component } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private urlService: UrlService) {}

  areWeHere(url: string): boolean {
    return this.urlService.getCurrentUrl() === url;
  }
}
