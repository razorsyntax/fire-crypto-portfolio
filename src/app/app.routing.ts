import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: '/loadingpage', pathMatch: 'full' },
  { path: 'loadingpage', loadChildren: () => import('./view/loading-page/loading-page.module').then(m => m.LoadingPageModule) },
  { path: 'welcome', loadChildren: () => import('./view/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'home', loadChildren: () => import('./view/home/home.module').then(m => m.HomeModule), data: { preload: true } },
  { path: 'transactions', loadChildren: () => import('./view/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'portfolioform', loadChildren: () => import('./view/portfolio-form/portfolio-form.module').then(m => m.PortfolioFormModule) },
  { path: 'settings', loadChildren: () => import('./view/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'search', loadChildren: () => import('./view/search-filter/search-filter.module').then(m => m.SearchFilterModule) },
  { path: 'coindetails', loadChildren: () => import('./view/coin-details/coin-details.module').then(m => m.CoinDetailsModule), data: { preload: true } },
  { path: 'createpin', loadChildren: () => import('./view/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'noconnection', loadChildren: () => import('./view/no-connection/no-connection.module').then(m => m.NoConnectionPageModule) },
  { path: 'aboutpage', loadChildren: () => import('./view/about-page/about-page.module').then(m => m.AboutPageModule) },
  { path: 'termsandconditions', loadChildren: () => import('./view/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule) },
  { path: 'licensesandacknowledgements', loadChildren: () => import('./view/licenses-and-acknowledgements/licenses-and-acknowledgements.module').then(m => m.LicensesAndAcknowledgementsModule) },
  { path: 'privacypolicy', loadChildren: () => import('./view/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'tagsearch', loadChildren: () => import('./view/tag-search/tag-search.module').then(m => m.TagSearchModule) },
  { path: 'webview', loadChildren: () => import('./view/webpage-view/webpage-view.module').then(m => m.WebpageViewModule) }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
