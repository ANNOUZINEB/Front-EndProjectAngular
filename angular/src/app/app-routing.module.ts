import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { SaladeComponent } from './salade/salade.component';
import { PatisserieComponent } from './patisserie/patisserie.component';
import { ContactComponent } from './contact/contact.component';
import { ArticlesComponent } from './articles/articles.component';
import { RecetteComponent } from './recette/recette.component';


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"cuisine",component:CuisineComponent},
{path:"salade",component:SaladeComponent},
{path:"patisserie",component:PatisserieComponent},
{path:"contact",component:ContactComponent},
{path:"articles",component:ArticlesComponent},
{path:"recette",component:RecetteComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
