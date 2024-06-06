import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './features/construction/construction.component';
import { HomeComponent } from './features/home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@rybos/ngx-gallery';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SimilarConstructionComponent } from './features/similar-construction/similar-construction.component';
import { ConstructionImageMasonryComponent } from './shared/construction-image-masonry/construction-image-masonry.component';
import { ArchitectComponent } from './features/architect/architect.component';
import { ArchitecturalStyleLinkComponent } from './features/architectural-style-link/architectural-style-link.component';
import { ArchitecturalStyleComponent } from './features/architectural-style/architectural-style.component';
import { ArchitectLinkComponent } from './features/architect-link/architect-link.component';
import { ArchitecturalStyleListComponent } from './features/architectural-style-list/architectural-style-list.component';
import { SourceListComponent } from './features/source-list/source-list.component';
import { ArchitectListComponent } from './features/architect-list/architect-list.component';
import { ContactsComponent } from './features/contacts/contacts.component';
import { NavComponent } from './core/components/nav/nav.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'constructions/:constructionId/:imageId', component: ConstructionComponent },
  { path: 'constructions/:constructionId', component: ConstructionComponent },
  { path: 'architectural-styles/:id', component: ArchitecturalStyleComponent },
  { path: 'architects/:id', component: ArchitectComponent },
  { path: 'architectural-styles', component: ArchitecturalStyleListComponent },
  { path: 'sources', component: SourceListComponent },
  { path: 'architects', component: ArchitectListComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    HomeComponent,
    SimilarConstructionComponent,
    ConstructionImageMasonryComponent,
    ArchitectComponent,
    ArchitecturalStyleLinkComponent,
    ArchitecturalStyleComponent,
    ArchitectLinkComponent,
    ArchitecturalStyleListComponent,
    SourceListComponent,
    ArchitectListComponent,
    ContactsComponent,
    NavComponent,
    PageNotFoundComponent,
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
    FontAwesomeModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
