export interface Reservation {
  id: number;
  demandeur_id: number;
  offre_id: number;
  statut: boolean;
  date: Date;
}
