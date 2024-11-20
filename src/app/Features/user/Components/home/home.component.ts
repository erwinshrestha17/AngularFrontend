import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {Products} from "../../../../Core/Services/products/products";
import {ProductsService} from "../../../../Core/Services/products/products.service";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'home',
  standalone: true,
    imports: [
        NgForOf,
        NgClass,
        RouterOutlet,
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public products: Products[] | any;
  constructor( private productService:ProductsService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      (data:Products[]) => {
              this.products = data;
            })
  }












}
