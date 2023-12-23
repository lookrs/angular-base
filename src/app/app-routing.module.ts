import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './page/todo-list/todo-list.component';
import { AboutComponent } from './page/about/about.component';
import { FakeStoreComponent } from './page/fake-store/fake-store.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'store',
    component: FakeStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
