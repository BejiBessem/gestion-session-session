export class SchoolData {
  candidats: Candidat[];
  formateurs: Formateur[];
  formations: Formation[];

  constructor(candidats: Candidat[], formateurs: Formateur[], formations: Formation[]) {
      this.candidats = candidats;
      this.formateurs = formateurs;
      this.formations = formations;
  }
}

export class Candidat {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  numeroCarteIdentite: string;
  photo: string;
  urlPhoto: string; 

  constructor(id: number, nom: string, prenom: string, email: string, numeroCarteIdentite: string, photo: string, urlPhoto: string) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.numeroCarteIdentite = numeroCarteIdentite;
      this.photo = photo;
      this.urlPhoto = urlPhoto; 
  }
}

export class Formateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  numeroTelephone: string;
  numeroCarteIdentite: string;
  photo: string;
  cvPdf: string;
  specialites: string[];
  urlPhoto: string; 

  constructor(id: number, nom: string, prenom: string, email: string, numeroTelephone: string, 
              numeroCarteIdentite: string, photo: string, cvPdf: string, specialites: string[], urlPhoto: string) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.numeroTelephone = numeroTelephone;
      this.numeroCarteIdentite = numeroCarteIdentite;
      this.photo = photo;
      this.cvPdf = cvPdf;
      this.specialites = specialites;
      this.urlPhoto = urlPhoto;
  }
}

export class Formation {
  id: number;
  titre: string;
  description: string;
  duree: string;
  formateurs: Formateur[];
  sessions: Session[];
  urlPhoto: string;
  tags : string;

  constructor(id: number, titre: string, description: string, duree: string, formateurs: Formateur[], sessions: Session[], urlPhoto: string,tags: string) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.duree = duree;
      this.formateurs = formateurs;
      this.sessions = sessions;
      this.urlPhoto = urlPhoto;
      this.tags=tags;
  }
}

export class Session {
  id: number;
  date: string;
  lieu: string;
  horaire: string;
  candidats: Candidat[];
  formateurs: Formateur[];
  urlPhoto: string; 

  constructor(id: number, date: string, lieu: string, horaire: string, candidats: Candidat[], formateurs: Formateur[], urlPhoto: string) {
      this.id = id;
      this.date = date;
      this.lieu = lieu;
      this.horaire = horaire;
      this.candidats = candidats;
      this.formateurs = formateurs;
      this.urlPhoto = urlPhoto;
  }
}
