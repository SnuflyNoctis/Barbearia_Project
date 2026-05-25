export interface Scheduling {
  id: string;
  clientName: string;
  date: string;
  time: string;
}

export type NewScheduling = Omit<Scheduling, 'id'>;