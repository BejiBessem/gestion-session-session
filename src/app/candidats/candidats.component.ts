import { Component } from '@angular/core';
import { FormationService } from '../formations.service'; 
import { Candidat } from '../schoolData';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrl: './candidats.component.css'
})
export class CandidatsComponent {
  candidats: Candidat[] = []; constructor(private formationService: FormationService) {} 
  ngOnInit(): void { this.formationService.getCandidats().subscribe(data => { this.candidats = data; }); } 
  deleteCandidat(id: number): void 
  { this.formationService.deleteCandidat(id).subscribe(() => { this.candidats = this.candidats.filter(c => c.id !== id); }); }

}
