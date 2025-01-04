import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { FormationsComponent } from './formations/formations.component';
import { DetaillesComponent } from './detailles/detailles.component';
import { AdminComponent } from './admin/admin.component';
import { FormationComponent } from './formation/formation.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AddcandidatComponent } from './addcandidat/addcandidat.component';
import { EditcandidatComponent } from './editcandidat/editcandidat.component';
import { AddformateurComponent } from './addformateur/addformateur.component';
import { EditformateurComponent } from './editformateur/editformateur.component';
import { SessionComponent } from './session/session.component';
import { AddformationComponent } from './addformation/addformation.component';
import { EditformationComponent } from './editformation/editformation.component';
import { CivilComponent } from './civil/civil.component';
import { ElectriqueComponent } from './electrique/electrique.component';
import { MecaniqueComponent } from './mecanique/mecanique.component';
import { GestionComponent } from './gestion/gestion.component';
import { ItComponent } from './it/it.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent,},
  {path:'formation',component:FormationsComponent},
  {path:'detaille/:id',component:DetaillesComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path: 'admin' , component:FormationComponent},
  {path: 'formations' , component:FormationComponent},
  {path: 'formateur' , component:FormateurComponent},
  {path: 'candidat' , component:CandidatsComponent},
  { path: 'candidat/add', component: AddcandidatComponent },
  {path: 'candidat/edit/:id',component:EditcandidatComponent},
  { path: 'formateur/add', component:AddformateurComponent },
  {path: 'formateur/edit/:id',component:EditformateurComponent},
  {path: 'session/:id' , component:SessionComponent},
  {path : 'formations/add' , component:AddformationComponent},
  {path: 'formation/edit/:id',component:EditformationComponent},
  {path:'it',component:ItComponent},
  {path:'gestion',component:GestionComponent},
  {path:'mecanique',component:MecaniqueComponent},
  {path:'electrique',component:ElectriqueComponent},
  {path:'civil',component:CivilComponent},
  {path:'register/:id',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
