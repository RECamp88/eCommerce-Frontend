import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'product', component: ProductDetailsComponent},
  { path: '**', component: LandingPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
