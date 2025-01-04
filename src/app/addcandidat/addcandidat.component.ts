import { Component } from '@angular/core';
import { FormationService } from '../formations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrl: './addcandidat.component.css'
})
export class AddcandidatComponent {
  nom: string = ''; prenom: string = ''; 
    email: string = '';
   numeroCarteIdentite: string = '';
    photo: string = ''; 
    urlPhoto: string = ''; 
constructor(private formationService: FormationService, private router: Router) {} 
onSubmit() { this.formationService.addCandidat(this.nom, this.prenom, this.email, 
  this.numeroCarteIdentite, this.photo, this.urlPhoto) .subscribe(() => 
    { this.router.navigate(['/candidat']); }); }
}
