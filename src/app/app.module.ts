import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './Views/maps/maps.component';
import { BlogsComponent } from './Views/blogs/blogs.component';
import { StatistiqueComponent } from './Views/statistique/statistique.component';
import { BannerComponent } from './Views/banner/banner.component';
//import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    BlogsComponent,
    StatistiqueComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AgmCoreModule.forRoot({
   // apiKey='AIzaSyCsDB4BgPFsmAUX5O2UluvYtZN8YUHpX8M'
  // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
