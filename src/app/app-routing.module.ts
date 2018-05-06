import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  PreloadAllModules,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: routes,
      },
    ], {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
