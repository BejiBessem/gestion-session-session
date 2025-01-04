import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formations.service';
import { Formation } from '../schoolData';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css'], 
})
export class FormationsComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];
  searchTerm: string = '';

  constructor(private formationService: FormationService) {}

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
      this.filteredFormations = formations; 
    });
  }

  filterFormations(): void {
    this.filteredFormations = this.formations.filter((formation) =>
      formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      formation.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/150';  
  }
}