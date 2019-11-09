import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'number1/:data', loadChildren: './number1/number1.module#Number1PageModule' },
  { path: 'number2/:data', loadChildren: './number2/number2.module#Number2PageModule' },
  { path: 'number3/:data', loadChildren: './number3/number3.module#Number3PageModule' },
  { path: 'number4/:data', loadChildren: './number4/number4.module#Number4PageModule' },
  { path: 'result/:data', loadChildren: './result/result.module#ResultPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
