import { FormationService } from '../formations.service';
import { Formation } from '../schoolData';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrl: './it.component.css'
})
export class ItComponent {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];

  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.getFormations();
  }

  getFormations(): void {
    this.formationService.getFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
      this.filterByCategory('technologique information'); 
    }, error => {
      console.error('Error fetching formations:', error);
    });
  }

  filterByCategory(category: string): void {
    this.filteredFormations = this.formations.filter(formation =>
      formation.tags.includes(category)
    );
  }
  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/150';  
  }
}
