import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../formations.service';
import { Formation, Session } from '../schoolData'; 

@Component({
  selector: 'app-detailles',
  templateUrl: './detailles.component.html',
  styleUrls: ['./detailles.component.css']
})
export class DetaillesComponent implements OnInit {
  formation: Formation | undefined;

  constructor(
  private route: ActivatedRoute,
   private router: Router,
 private formationService: FormationService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
   this.getFormationDetails(parseInt(id, 10));
    }
  }

  getFormationDetails(id: number): void {
    this.formationService.getFormationById(id).subscribe(data => {
    this.formation = data;
    });
  }
 register(): void {
    if (this.formation) {
    this.router.navigate(['/register', this.formation.id]);
    }
  }
downloadPDF(): void {
    console.log('Download PDF button clicked');
  }
}
