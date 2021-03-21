import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//all component
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { AdsComponent } from './components/ads/ads.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';

// new module
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './routing/app-routing.module';

// All services
import { AdsService } from "./services/ads.service";
import { AuthService } from './services/auth.service';

//guard
import { AuthGuard } from './guard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AdsComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    NotFoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AdsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
