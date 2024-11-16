import {Component} from '@angular/core';
import {HomeService} from "../../../Core/Services/Home/home.service";
import {LowerCasePipe, NgForOf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {ReversePipe} from "../../../Core/pipes/reverse/reverse.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'home',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, ReversePipe, NgOptimizedImage, RouterLink, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  display: string =""
  constructor(protected HomeService:HomeService) {
    this.display= HomeService.getCars().join('');
  }
  //homeService = inject(HomeService)



}
