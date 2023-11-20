import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

// Import Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContactComponent } from './contact/contact.component';
// Import other necessary Angular Material modules

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, // Add Angular Material modules here
    MatInputModule,
    MatSelectModule,
    // Add other required Angular Material modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
