import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { FormationService } from '../formations.service'; 
import { Formateur } from '../schoolData';

@Component({
  selector: 'app-editformateur',
  templateUrl: './editformateur.component.html',
  styleUrl: './editformateur.component.css'
})
export class EditformateurComponent {
   formateur: Formateur = new Formateur(0, '', '', '', '', '', '', '', [], '');
    constructor( private route: ActivatedRoute, private router: Router, private formationService: FormationService ) {}
     ngOnInit(): void { const id = this.route.snapshot.paramMap.get('id'); 
    if (id) { this.formationService.getFormateurById(Number(id)).subscribe((data) => 
    { this.formateur = data; }); }
  } 
  saveFormateur(): void { this.formationService.editFormateur(this.formateur).subscribe(() => 
  { this.router.navigate(['/formateur']); }); 
}}
