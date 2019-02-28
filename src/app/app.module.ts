import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { AppService } from './services/app.service';
import { SearchPipe } from './pipes/search.pipe';
import { BooksAdminComponent } from './components/books-admin/books-admin.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "books", component: BooksComponent, canActivate: [MainGuard]},
  {path: "books-admin", component: BooksAdminComponent, canActivate: [MainGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SearchPipe,
    BooksAdminComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService,
    LoginService,
    MainGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
