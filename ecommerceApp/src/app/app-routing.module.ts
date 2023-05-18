import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'account', component: CustomerFormComponent},
  { path: 'order', component: OrderComponent},
  { path: '**', component: LandingPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
