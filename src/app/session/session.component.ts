import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { FormationService } from '../formations.service';
import { Session } from '../schoolData';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
   sessions: Session[] = []; 
   constructor( private route: ActivatedRoute, private formationService: FormationService ) {} 
   ngOnInit(): void { const formationId = this.route.snapshot.paramMap.get('id'); 
    if (formationId) { this.loadSessions(Number(formationId)); } } 
    loadSessions(formationId: number): void { this.formationService.getFormationById(formationId).subscribe(formation => 
      { this.sessions = formation.sessions; }); } 
      deleteSession(id: number): void {  this.formationService.deleteSession(id).subscribe(() => 
        { this.sessions = this.sessions.filter(s => s.id !== id); }); }
}
