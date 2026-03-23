import { Routes } from '@angular/router'
import { ConstructionComponent } from './features/construction/construction.component'
import { HomeComponent } from './features/home/home.component'
import { ConstructionTitleResolver } from './core/services/construction-page-title-resolve'
import { ConstructionArchitecturalStyleComponent } from './features/construction/components/construction-architectural-style/construction-architectural-style.component'
import { ConstructionArchitectComponent } from './features/construction/components/construction-architect/construction-architect.component'
import { ArchitecturalStylesComponent } from './features/architectural-styles/architectural-styles.component'
import { SourcesComponent } from './features/sources/sources.component'
import { ArchitectsComponent } from './features/architects/architects.component'
import { ContactsComponent } from './features/contacts/contacts.component'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { APP_ROUTES } from './core/constants/routes.constants'

export const appRoutes: Routes = [
    { path: APP_ROUTES.HOME, component: HomeComponent, title: 'PAGE_TITLES.HOME' },
    {
        path: APP_ROUTES.CONSTRUCTION_IMAGE,
        component: ConstructionComponent,
        title: ConstructionTitleResolver,
    },
    { path: APP_ROUTES.CONSTRUCTIONS_BY_ID, component: ConstructionComponent, title: ConstructionTitleResolver },
    { path: APP_ROUTES.ARCHITECTURAL_STYLES_BY_ID, component: ConstructionArchitecturalStyleComponent },
    { path: APP_ROUTES.ARCHIECTS_BY_ID, component: ConstructionArchitectComponent },
    {
        path: APP_ROUTES.ARCHITECTURAL_STYLES,
        component: ArchitecturalStylesComponent,
        title: 'PAGE_TITLES.ARCHITECTURAL_STYLES',
    },
    { path: APP_ROUTES.SOURCES, component: SourcesComponent, title: 'PAGE_TITLES.SOURCES' },
    { path: APP_ROUTES.ARCHITECTS, component: ArchitectsComponent, title: 'PAGE_TITLES.ARCHITECTS' },
    { path: APP_ROUTES.CONTACTS, component: ContactsComponent, title: 'PAGE_TITLES.CONTACTS' },
    { path: '**', component: PageNotFoundComponent, title: 'PAGE_TITLES.PAGE_NOT_FOUND' },
]
