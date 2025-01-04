import { Component } from '@angular/core';
import { FormationService } from '../formations.service'; 
import { Formation } from '../schoolData';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.css'
})
export class FormationComponent {
  formations: Formation[] = []; constructor(private formationService: FormationService) {}
   ngOnInit(): void { this.loadFormations(); } 
   loadFormations(): void { this.formationService.getFormations().subscribe(data => 
    { this.formations = data; }); } 
    deleteFormation(id: number): void 
    { this.formationService.deleteFormation(id).subscribe(() => 
    { this.formations = this.formations.filter(f => f.id !== id); }); }
    getFormateurs(formation: Formation): string 
    { return formation.formateurs.map(f => f.nom).join(', '); } 
    getSessions(formation: Formation): string 
    { return formation.sessions.map(s => s.date).join(', '); }
}
