import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, TitleStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './features/construction/construction.component';
import { HomeComponent } from './features/home/home.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxMasonryModule } from 'ngx-masonry';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from '@rybos/ngx-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CustomPageTitleStrategy } from './core/services/custom-page-title-strategy';
import { ConstructionTitleResolver } from './core/services/construction-page-title-resolve';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchingWithFiltersComponent } from './features/searching-with-filters/searching-with-filters.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Architecture Map' },
  { path: 'constructions/:constructionId/:imageId', component: ConstructionComponent, title: ConstructionTitleResolver },
  { path: 'constructions/:constructionId', component: ConstructionComponent, title: ConstructionTitleResolver },
  { path: 'architectural-styles/:id', component: ArchitecturalStyleComponent },
  { path: 'architects/:id', component: ArchitectComponent },
  { path: 'architectural-styles', component: ArchitecturalStyleListComponent, title: 'Архітэктурныя стылі' },
  { path: 'sources', component: SourceListComponent, title: 'Крыніцы' },
  { path: 'architects', component: ArchitectListComponent, title: 'Архітэктары' },
  { path: 'contacts', component: ContactsComponent, title: 'Адваротная сувязь' },
  { path: '**', component: PageNotFoundComponent, title: 'Старонка не знойдзена'}
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
    SearchingWithFiltersComponent,
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
    LightgalleryModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: TitleStrategy, useClass: CustomPageTitleStrategy},
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
