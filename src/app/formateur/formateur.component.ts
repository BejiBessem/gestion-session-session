import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formations.service'; 
import { Formateur } from '../schoolData';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css'] 
})
export class FormateurComponent implements OnInit {
  formateur: Formateur[] = []; constructor(private formationService: FormationService) {} 
    ngOnInit(): void { this.formationService.getFormateurs().subscribe(data => { this.formateur = data; }); } 
    deleteFormateur(id: number): void 
    { this.formationService.deleteFormateur(id).subscribe(() => 
    { this.formateur = this.formateur.filter(c => c.id !== id); }); }
}
