import { Component } from '@angular/core';
import { FormationService } from '../formations.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addformateur',
  templateUrl: './addformateur.component.html',
  styleUrl: './addformateur.component.css'
})
export class AddformateurComponent {
   nom: string = '';
     prenom: string = ''; email: string = '';
      numeroTelephone: string = '';
       numeroCarteIdentite: string = '';
        photo: string = ''; cvPdf: string = ''; specialites: string = '';
         urlPhoto: string = ''; 
         constructor( private router: Router, private formationService: FormationService ) {}
          onSubmit(){
            this.formationService.addFormateur(this.nom,this.prenom,this.email,this.numeroTelephone,this.numeroCarteIdentite,this.photo,this.cvPdf, this.specialites) .subscribe(() => 
                { this.router.navigate(['/formateur']); }); }
          }
