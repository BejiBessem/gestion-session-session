import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormationService } from '../formations.service';
import { Formation, Candidat, Session } from '../schoolData'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formation: Formation | undefined;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private formationService: FormationService,
    private router: Router
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

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  registerCandidate(f: NgForm): void {
    const formData: FormData = new FormData();
    formData.append('nom', f.value.nom);
    formData.append('prenom', f.value.prenom);
    formData.append('email', f.value.email);
    formData.append('numeroCarteIdentite', f.value.numeroCarteIdentite);
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }

    
  }
}