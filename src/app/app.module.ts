import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component';
import { DetaillesComponent } from './detailles/detailles.component';
import { PubliquesComponent } from './publiques/publiques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FormationComponent } from './formation/formation.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { AddcandidatComponent } from './addcandidat/addcandidat.component';
import { EditcandidatComponent } from './editcandidat/editcandidat.component';
import { AddformateurComponent } from './addformateur/addformateur.component';
import { EditformateurComponent } from './editformateur/editformateur.component';
import { SessionComponent } from './session/session.component';
import { AddformationComponent } from './addformation/addformation.component';
import { EditformationComponent } from './editformation/editformation.component';
import { GestionComponent } from './gestion/gestion.component';
import { CivilComponent } from './civil/civil.component';
import { ItComponent } from './it/it.component';
import { MecaniqueComponent } from './mecanique/mecanique.component';
import { ElectriqueComponent } from './electrique/electrique.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FormationsComponent,
    DetaillesComponent,
    PubliquesComponent,
    AdminComponent,
    FormationComponent,
    FormateurComponent,
    CandidatsComponent,
    AddcandidatComponent,
    EditcandidatComponent,
    AddformateurComponent,
    EditformateurComponent,
    SessionComponent,
    AddformationComponent,
    EditformationComponent,
    GestionComponent,
    CivilComponent,
    ItComponent,
    MecaniqueComponent,
    ElectriqueComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
