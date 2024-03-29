import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { SourceListComponent } from './source-list/source-list.component';
import { ArchitectListComponent } from './architect-list/architect-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavComponent } from './nav/nav.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'constructions/:constructionId/:imageId', component: ConstructionComponent },
  { path: 'constructions/:constructionId', component: ConstructionComponent },
  { path: 'architectural-styles/:id', component: ArchitecturalStyleComponent },
  { path: 'architects/:id', component: ArchitectComponent },
  { path: 'architectural-styles', component: ArchitecturalStyleListComponent },
  { path: 'sources', component: SourceListComponent },
  { path: 'architects', component: ArchitectListComponent },
  { path: 'contacts', component: ContactsComponent }
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
    ArchitecturalStyleListComponent,
    SourceListComponent,
    ArchitectListComponent,
    ContactsComponent,
    NavComponent,
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
