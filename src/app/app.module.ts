import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './construction/construction.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes =[
  { path: '', component : HomePageComponent},
  { path: 'constructions/:constructionId', component: ConstructionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ConstructionComponent,
    HomePageComponent
    ]
})
export class AppModule { }
