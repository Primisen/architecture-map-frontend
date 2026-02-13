import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Routes, RouterModule, TitleStrategy } from '@angular/router'
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ConstructionComponent } from './features/construction/construction.component'
import { HomeComponent } from './features/home/home.component'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { NgxMasonryModule } from 'ngx-masonry'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxGalleryModule } from '@rybos/ngx-gallery'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SimilarConstructionComponent } from './features/construction/components/similar-construction/similar-construction.component'
import { ConstructionImageMasonryComponent } from './shared/construction-image-masonry/construction-image-masonry.component'
import { ArchitectComponent } from './features/construction/components/architect/architect.component'
import { ArchitecturalStyleLinkComponent } from './features/construction/components/architectural-style/components/architectural-style-link/architectural-style-link.component'
import { ArchitecturalStyleComponent } from './features/construction/components/architectural-style/architectural-style.component'
import { ArchitectLinkComponent } from './features/construction/components/architect/components/architect-link/architect-link.component'
import { ArchitecturalStyleListComponent } from './features/architectural-style-list/architectural-style-list.component'
import { SourceListComponent } from './features/source-list/source-list.component'
import { ArchitectsComponent } from './features/architects/architects.component'
import { ContactsComponent } from './features/contacts/contacts.component'
import { NavComponent } from './core/components/nav/nav.component'
import { LightgalleryModule } from 'lightgallery/angular'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { CustomPageTitleStrategy } from './core/services/custom-page-title-strategy'
import { ConstructionTitleResolver } from './core/services/construction-page-title-resolve'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SearchingWithFiltersComponent } from './features/searching-with-filters/searching-with-filters.component'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { translateHttpLoaderFactory } from './core/i18n/translate-loader.factory'

const appRoutes: Routes = [
    { path: '', component: HomeComponent, title: 'Architecture Map' },
    { path: 'constructions/:constructionId/:imageId', component: ConstructionComponent, title: ConstructionTitleResolver },
    { path: 'constructions/:constructionId', component: ConstructionComponent, title: ConstructionTitleResolver },
    { path: 'architectural-styles/:id', component: ArchitecturalStyleComponent },
    { path: 'architects/:id', component: ArchitectComponent },
    { path: 'architectural-styles', component: ArchitecturalStyleListComponent, title: 'Архітэктурныя стылі' },
    { path: 'sources', component: SourceListComponent, title: 'Крыніцы' },
    { path: 'architects', component: ArchitectsComponent, title: 'Архітэктары' },
    { path: 'contacts', component: ContactsComponent, title: 'Адваротная сувязь' },
    { path: '**', component: PageNotFoundComponent, title: 'Старонка не знойдзена' },
]

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
        ArchitectsComponent,
        ContactsComponent,
        NavComponent,
        PageNotFoundComponent,
        SearchingWithFiltersComponent,
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        AppRoutingModule,
        InfiniteScrollModule,
        NgxMasonryModule,
        BrowserAnimationsModule,
        NgxGalleryModule,
        FormsModule,
        FontAwesomeModule,
        LightgalleryModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        TranslateModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateHttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [
        { provide: TitleStrategy, useClass: CustomPageTitleStrategy },
        provideHttpClient(withInterceptorsFromDi()),
        {
            provide: APP_INITIALIZER,
            useFactory: (translateService: TranslateService) => () => {
                translateService.setDefaultLang('be')
                translateService.use('be')
            },
            deps: [TranslateService],
            multi: true,
        },
    ],
})
export class AppModule {}
