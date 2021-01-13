import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lista',
        loadChildren: () => import('../lista/lista.module').then(m => m.ListaPageModule)
      },
      {
        path: 'formulario',
        loadChildren: () => import('../formulario/formulario.module').then(m => m.FormularioPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/lista',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
