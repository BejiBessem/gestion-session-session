import { Injectable } from '@angular/core';
import { Candidat, Formateur, Formation, Session , SchoolData} from './schoolData';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private baseURL = "http://localhost:3000";
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  candidatsEdited = new Subject<Candidat[]>();
  formateursEdited = new Subject<Formateur[]>();
  formationsEdited = new Subject<Formation[]>();

  constructor(private httpClient: HttpClient) { }

  addCandidat(nom: string, prenom: string, email: string, numeroCarteIdentite: string, photo: string, urlPhoto: string): Observable<Candidat> 
  { return this.httpClient.post<Candidat>( `${this.baseURL}/candidats`, 
    JSON.stringify({ nom: nom, prenom: prenom, email: email, numeroCarteIdentite: numeroCarteIdentite, photo: photo, urlPhoto: urlPhoto })
    ,{ headers: this.headers } ); }
  getCandidats(): Observable<Candidat[]> {
    return this.httpClient.get<Candidat[]>(`${this.baseURL}/candidats`, { headers: this.headers });
  }
  
  

  getCandidatById(id: number): Observable<Candidat> {
    return this.httpClient.get<Candidat>(`${this.baseURL}/candidats/${id}`, { headers: this.headers });
  }

  editCandidat(candidat: Candidat): Observable<Candidat> {
    return this.httpClient.put<Candidat>(
      `${this.baseURL}/candidats/${candidat.id}`,
      candidat,
      { headers: this.headers }
    );
  }

  deleteCandidat(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/candidats/${id}`, { headers: this.headers });
  }

  getFormateurs(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(`${this.baseURL}/formateurs`, { headers: this.headers });
  }

  addFormateur(nom: string, prenom: string, email: string, numeroTelephone: string, numeroCarteIdentite: string, photo: string, cvPdf: string, specialites: string): Observable<Formateur> {
    return this.httpClient.post<Formateur>(
      `${this.baseURL}/formateurs`,
      { nom, prenom, email, numeroTelephone, numeroCarteIdentite, photo, cvPdf, specialites },
      { headers: this.headers }
    );
  }

  getFormateurById(id: number): Observable<Formateur> {
    return this.httpClient.get<Formateur>(`${this.baseURL}/formateurs/${id}`, { headers: this.headers });
  }

  editFormateur(formateur: Formateur): Observable<Formateur> {
    return this.httpClient.put<Formateur>(
      `${this.baseURL}/formateurs/${formateur.id}`,
      formateur,
      { headers: this.headers }
    );
  }

  deleteFormateur(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/formateur/${id}`, { headers: this.headers });
  }

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(`${this.baseURL}/formations`, { headers: this.headers });
  }

addFormation(titre: string, description: string, duree: string, formateurs: Formateur[], sessions: Session[], urlPhoto: string): Observable<Formation> {
    return this.httpClient.post<Formation>(
      `${this.baseURL}/formations`,
      { titre, description, duree, formateurs, sessions, urlPhoto },
      { headers: this.headers }
    );
  }

  getFormationById(id: number): Observable<Formation> {
    return this.httpClient.get<Formation>(`${this.baseURL}/formations/${id}`, { headers: this.headers });
  }
editFormation(formation: Formation): Observable<Formation> {
    return this.httpClient.put<Formation>(
      `${this.baseURL}/formations/${formation.id}`,
      formation,
      { headers: this.headers }
    );
  }

  deleteFormation(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseURL}/formations/${id}`, { headers: this.headers });
  }
  addSession(formationId: number, session: Session): Observable<Session> { 
    return this.httpClient.post<Session>( `${this.baseURL}/formations/${formationId}/sessions`, session, { headers: this.headers } ); } 
    editSession(formationId: number, session: Session): Observable<Session> { 
      return this.httpClient.put<Session>( `${this.baseURL}/formations/${formationId}/sessions/${session.id}`, session, { headers: this.headers } ); } 
  deleteSession(id: number): Observable<void> { return this.httpClient.delete<void>(`${this.baseURL}/sessions/${id}`, { headers: this.headers }); }
}
