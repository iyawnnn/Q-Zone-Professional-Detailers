import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',  
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
