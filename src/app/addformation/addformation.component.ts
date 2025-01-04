import { Component } from '@angular/core';
import { Router } from '@angular/router'; import { FormationService } from '../formations.service'; 
import { Formateur, Formation } from '../schoolData';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrl: './addformation.component.css'
})
export class AddformationComponent {
   titre: string = ''; description: string = ''; duree: string = ''; formateurs: Formateur[] = [];
    availableFormateurs: Formateur[] = [];
     selectedFormateurs: number[] = [];
 urlPhoto: string = ''; constructor( private router: Router, private formationService: FormationService ) {} 
 ngOnInit(): void { this.loadFormateurs(); } 
 loadFormateurs(): void { this.formationService.getFormateurs().subscribe(data => 
  { this.availableFormateurs = data; }); } 
  onSubmit(): void { const selectedFormateurObjects = this.availableFormateurs.filter(f =>
   this.selectedFormateurs.includes(f.id)); 
   this.formationService.addFormation(this.titre, this.description, this.duree, selectedFormateurObjects, [], this.urlPhoto).subscribe(() => { this.router.navigate(['/formations']); }); }
}
