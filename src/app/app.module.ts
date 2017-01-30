import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from "./app.routing";

import { AboutComponent } from "./mainViews/about.component";
import { ProductsComponent } from "./mainViews/products.component";
import { ProjectsComponent } from "./mainViews/projects.component";
import { LinksComponent } from "./mainViews/links.component";

import { EnergeticsComponent } from "./products/energetics.component";
import { ProductsCategoriesComponent } from "./products/products-categories.component";
import { WaterComponent } from "./products/water.component";
import { OtherComponent } from "./products/other.component";
import { SingleProductComponent } from "./products/single-product.component";
import { ProductCategoryComponent } from "./products/product-category.component";

import { ProjectTimelineComponent } from "./projects/project-timeline.component";

import { PostService } from "./shared/post-service";

//import { PageNotfoundComponent } from "./mainViews/pagenotfound.component";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductsComponent,
    ProjectsComponent,
    LinksComponent,
    EnergeticsComponent,
    ProductsCategoriesComponent,
    WaterComponent,
    OtherComponent,
    SingleProductComponent,
    ProjectTimelineComponent,
    ProductCategoryComponent,
    //PageNotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
