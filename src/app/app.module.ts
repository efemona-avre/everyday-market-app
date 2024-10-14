import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.model';
import { SharedModule } from './modules/shared/shared.module';
import { MarketModule } from './modules/market/market.module';




@NgModule({
  declarations: [
    AppComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MarketModule,
    CoreModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
