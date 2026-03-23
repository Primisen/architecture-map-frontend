import { APP_INITIALIZER, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, TitleStrategy } from '@angular/router'
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
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
import { ConstructionImageMasonryComponent } from './shared/components/construction-image-masonry/construction-image-masonry.component'
import { ConstructionArchitectComponent } from './features/construction/components/construction-architect/construction-architect.component'
import { ArchitecturalStyleLinkComponent } from './features/construction/components/construction-architectural-style/components/architectural-style-link/architectural-style-link.component'
import { ConstructionArchitecturalStyleComponent } from './features/construction/components/construction-architectural-style/construction-architectural-style.component'
import { ArchitectLinkComponent } from './features/construction/components/construction-architect/components/architect-link/architect-link.component'
import { ArchitecturalStylesComponent } from './features/architectural-styles/architectural-styles.component'
import { SourcesComponent } from './features/sources/sources.component'
import { ArchitectsComponent } from './features/architects/architects.component'
import { ContactsComponent } from './features/contacts/contacts.component'
import { NavComponent } from './core/components/nav/nav.component'
import { LightgalleryModule } from 'lightgallery/angular'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { CustomPageTitleStrategy } from './core/services/custom-page-title-strategy'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { SearchingComponent } from './features/searching/searching.component'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'
import { translateHttpLoaderFactory, translateInitializerFactory } from './core/i18n/translate-loader.factory'
import { appRoutes } from './app.app-routes'

@NgModule({
    declarations: [
        AppComponent,
        ConstructionComponent,
        HomeComponent,
        SimilarConstructionComponent,
        ConstructionImageMasonryComponent,
        ConstructionArchitectComponent,
        ArchitecturalStyleLinkComponent,
        ConstructionArchitecturalStyleComponent,
        ArchitectLinkComponent,
        ArchitecturalStylesComponent,
        SourcesComponent,
        ArchitectsComponent,
        ContactsComponent,
        NavComponent,
        PageNotFoundComponent,
        SearchingComponent,
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
            useFactory: translateInitializerFactory,
            deps: [TranslateService],
            multi: true,
        },
    ],
})
export class AppModule {}
