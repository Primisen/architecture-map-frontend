import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './construction/construction.component';
import { HomePageComponent } from './home-page/home-page.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { NgxMasonryModule } from 'ngx-masonry';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxGalleryModule } from '@rybos/ngx-gallery';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArchitecturalStyleComponent } from './architectural-style/architectural-style.component';
import { SimilarConstructionComponent } from './similar-construction/similar-construction.component';

const appRoutes: Routes =[
  { path: '', component : HomePageComponent},
  { path: 'constructions/:constructionId', component: ConstructionComponent},
  { path: 'architectural-style', component: ArchitecturalStyleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    HomePageComponent,
    ArchitecturalStyleComponent,
    SimilarConstructionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,

    InfiniteScrollModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    FormsModule,

    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ConstructionComponent,
    HomePageComponent,
    ArchitecturalStyleComponent
    ]
})
export class AppModule { }
