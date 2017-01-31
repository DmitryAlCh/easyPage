import { Routes, RouterModule } from "@angular/router";

import { EnergeticsComponent } from "./energetics.component";
import { ProductsCategoriesComponent } from "./products-categories.component";

import { SingleProductComponent } from "./single-product.component";

export const PRODUCT_ROUTES = [
  { path: '', component: ProductsCategoriesComponent },
  { path: 'energetics', component: EnergeticsComponent },
  { path: 'energetics/:id', component: SingleProductComponent },
  { path: 'water', component: EnergeticsComponent },
  { path: 'water/:id', component: SingleProductComponent },
  { path: 'other', component: EnergeticsComponent },
  { path: 'other/:', component: SingleProductComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
