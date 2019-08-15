import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path: 'nav', loadChildren: './pages/nav/nav.module#NavPageModule' },
  { path: 'grid', loadChildren: './pages/grid/grid.module#GridPageModule' },
  { path: 'modal', loadChildren: './pages/modal/modal.module#ModalPageModule' },
  { path: 'infinite', loadChildren: './pages/infinite/infinite.module#InfinitePageModule' },
  { path: 'loadin', loadChildren: './pages/loadin/loadin.module#LoadinPageModule' },
  { path: 'popover', loadChildren: './pages/popover/popover.module#PopoverPageModule' },
  { path: 'input', loadChildren: './pages/input/input.module#InputPageModule' },
  { path: 'everything', loadChildren: './pages/everything/everything.module#EverythingPageModule' },
  { path: 'sources', loadChildren: './pages/sources/sources.module#SourcesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
