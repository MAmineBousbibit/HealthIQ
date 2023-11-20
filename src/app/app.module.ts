import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MapsComponent } from './Views/maps/maps.component';
import { BlogsComponent } from './Views/blogs/blogs.component';
import { StatistiqueComponent } from './Views/statistique/statistique.component';
import { BannerComponent } from './Views/banner/banner.component';
//import { AgmCoreModule } from '@agm/core';
=======
import { FooterComponent } from './footer/footer.component';

// Import Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContactComponent } from './contact/contact.component';
// Import other necessary Angular Material modules
>>>>>>> test

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MapsComponent,
    BlogsComponent,
    StatistiqueComponent,
    BannerComponent
=======
    FooterComponent,
    ContactComponent,
>>>>>>> test
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
   // AgmCoreModule.forRoot({
   // apiKey='AIzaSyCsDB4BgPFsmAUX5O2UluvYtZN8YUHpX8M'
  // })
=======
    MatFormFieldModule, // Add Angular Material modules here
    MatInputModule,
    MatSelectModule,
    // Add other required Angular Material modules
>>>>>>> test
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
