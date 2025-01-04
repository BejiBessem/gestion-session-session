import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formations.service';  
import { Formation } from '../schoolData'; 

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];
  searchTerm: string = '';

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
      this.filteredFormations = formations;
      console.log(this.formations.map(f => f.urlPhoto)); 
    });
  }

  ngOnChanges(): void {
    this.filterFormations();
  }

  filterFormations(): void {
    if (this.searchTerm) {
      this.filteredFormations = this.formations.filter(formation =>
        formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        formation.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredFormations = this.formations;
    }
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/150'; 
  }
}