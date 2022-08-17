import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { CreateProjectComponent } from './Components/create-project/create-project.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorComponent } from "./Components/error/error.component";

const appRoutes: Routes = [
    {path: '', component: AboutMeComponent},
    {path: 'about-me', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'create-project', component: CreateProjectComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);