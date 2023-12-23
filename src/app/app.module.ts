import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TodoDetailComponent } from './component/todo-detail/todo-detail.component';
import { TodoListComponent } from './page/todo-list/todo-list.component';
import { OperateBarComponent } from './component/operate-bar/operate-bar.component';
import { FakeStoreComponent } from './page/fake-store/fake-store.component';
import { AboutComponent } from './page/about/about.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TodosService } from './service/api/todos.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    TodoDetailComponent,
    TodoListComponent,
    OperateBarComponent,
    FakeStoreComponent,
    AboutComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule

  ],
  providers: [HttpClient, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
