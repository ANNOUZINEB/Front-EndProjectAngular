import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PatisserieComponent } from './patisserie/patisserie.component';
import { HomeComponent } from './home/home.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { SaladeComponent } from './salade/salade.component';
import { TitleComponent } from './title/title.component';
import { ArticlesComponent } from './articles/articles.component';
import { RecetteComponent } from './recette/recette.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    PatisserieComponent,
    HomeComponent,
    CuisineComponent,
    SaladeComponent,
    TitleComponent,
    ArticlesComponent,
    RecetteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
