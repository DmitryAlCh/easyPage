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
import { LanguageBarComponent } from "./mainViews/language-bar.component";

import { EnergeticsComponent } from "./products/energetics.component";
import { ProductsCategoriesComponent } from "./products/products-categories.component";

import { SingleProductComponent } from "./products/single-product.component";
import { NavigationTree } from "./products/navigation-bar.component";

import { ProjectTimelineComponent } from "./projects/project-timeline.component";

import { PostService } from "./shared/post-service";
import { LanguageService } from "./shared/language-service";

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
    SingleProductComponent,
    ProjectTimelineComponent,
    NavigationTree,
    LanguageBarComponent,
    //PageNotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [PostService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
