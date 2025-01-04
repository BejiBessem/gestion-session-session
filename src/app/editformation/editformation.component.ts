import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormationService } from '../formations.service'; 
import { Formateur, Formation } from '../schoolData';

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrl: './editformation.component.css'
})
export class EditformationComponent {
  formation: Formation = new Formation(0, '', '', '', [], [], '','');
   availableFormateurs: Formateur[] = []; 
    selectedFormateurs: number[] = []; 
   constructor( private route: ActivatedRoute, private router: Router, private formationService: FormationService ) {} 
   ngOnInit(): void { const id = this.route.snapshot.paramMap.get('id');
     this.loadFormateurs(); 
     if (id) { this.formationService.getFormationById(Number(id)).subscribe((data) => 
      { this.formation = data; this.selectedFormateurs = data.formateurs.map(f => f.id); }); } } 
      loadFormateurs(): void { this.formationService.getFormateurs().subscribe(data => 
        { this.availableFormateurs = data; }); } 
        onSubmit(): void { const selectedFormateurObjects = this.availableFormateurs.filter(f => this.selectedFormateurs.includes(f.id)); this.formation.formateurs = selectedFormateurObjects;
           this.formationService.editFormation(this.formation).subscribe(() => { this.router.navigate(['/formations']); }); }
}
