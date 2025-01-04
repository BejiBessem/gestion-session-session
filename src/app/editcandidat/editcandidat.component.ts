import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormationService } from '../formations.service'; 
import { Candidat } from '../schoolData';

@Component({
  selector: 'app-editcandidat',
  templateUrl: './editcandidat.component.html',
  styleUrl: './editcandidat.component.css'
})
export class EditcandidatComponent {
  candidat: Candidat = new Candidat(0, '', '', '', '', '', '');
  constructor( private route: ActivatedRoute, private router: Router, private formationService: FormationService ) {}
   ngOnInit(): void { const id = this.route.snapshot.paramMap.get('id'); 
    if (id) { this.formationService.getCandidatById(Number(id)).subscribe((data) => 
      { this.candidat = data; }); } } 
      saveCandidat(): void { this.formationService.editCandidat(this.candidat).subscribe(() => 
    { this.router.navigate(['/candidat']); }); }
}
