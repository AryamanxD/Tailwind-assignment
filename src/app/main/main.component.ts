import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { SubheaderComponent } from "./subheader/subheader.component";
import { CardsComponent } from "./cards/cards.component";
import { ProductlistComponent } from "./productlist/productlist.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, SubheaderComponent, CardsComponent, ProductlistComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
