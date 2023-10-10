import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
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
import { SimilarConstructionComponent } from './similar-construction/similar-construction.component';
import { ConstructionImageMasonryComponent } from './construction-image-masonry/construction-image-masonry.component';
import { ArchitectComponent } from './architect/architect.component';
import { ArchitecturalStyleLinkComponent } from './architectural-style-link/architectural-style-link.component';
import { ArchitecturalStyleComponent } from './architectural-style/architectural-style.component';
import { ArchitectLinkComponent } from './architect-link/architect-link.component';
import { ArchitecturalStyleListComponent } from './architectural-style-list/architectural-style-list.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'constructions/:constructionId/:imageId', component: ConstructionComponent },
  { path: 'architectural-styles/:id', component: ArchitecturalStyleComponent },
  { path: 'architects/:id', component: ArchitectComponent },
  { path: 'architectural-styles', component: ArchitecturalStyleListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    HomePageComponent,
    SimilarConstructionComponent,
    ConstructionImageMasonryComponent,
    ArchitectComponent,
    ArchitecturalStyleLinkComponent,
    ArchitecturalStyleComponent,
    ArchitectLinkComponent,
    ArchitecturalStyleListComponent
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
    AppComponent
  ]
})
export class AppModule { }
