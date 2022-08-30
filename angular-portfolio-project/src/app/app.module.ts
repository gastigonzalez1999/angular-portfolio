import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { CreateProjectComponent } from './Components/create-project/create-project.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorComponent } from './Components/error/error.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    CreateProjectComponent,
    ContactComponent,
    ErrorComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
