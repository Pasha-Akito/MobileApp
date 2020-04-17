import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'rock',
    loadChildren: () => import('./rock/rock.module').then( m => m.RockPageModule)
  },
  {
    path: 'metal',
    loadChildren: () => import('./metal/metal.module').then( m => m.MetalPageModule)
  },
  {
    path: 'rap',
    loadChildren: () => import('./rap/rap.module').then( m => m.RapPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then( m => m.OtherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
