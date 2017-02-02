import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./mainViews/about.component";
import { ProductsComponent} from "./mainViews/products.component";
import { ProjectsComponent } from "./mainViews/projects.component";
import { LinksComponent } from "./mainViews/links.component";

import { PRODUCT_ROUTES } from "./products/product-routes";
import { PROJECT_ROUTES } from "./projects/projects-routes";

//import { PageNotfoundComponent } from "./mainViews/pagenotfound.component";
//import { ProductListComponent } from "./mainViews/product-list.component";

const APP_ROUTES: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent, children: PRODUCT_ROUTES },
  { path: 'products/:id', component: ProductsComponent, children: PRODUCT_ROUTES },
  { path: 'projects', component: ProjectsComponent, children: PROJECT_ROUTES },
  { path: 'projects/:id', component: ProjectsComponent, children: PROJECT_ROUTES },
  { path: 'links', component: LinksComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/about', pathMatch: 'full'},

];

export const routing = RouterModule.forRoot(APP_ROUTES);
