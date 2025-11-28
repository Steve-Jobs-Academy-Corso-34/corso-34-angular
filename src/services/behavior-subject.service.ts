import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  // BehaviorSubject per gestire lo stato del messaggio
  message$ = new BehaviorSubject<string>('');

  // Metodo per ottenere l'Observable del messaggio
  getMessage() {
    return this.message$.asObservable();
  }

  // Metodo per aggiornare il messaggio
  setMessage(newMessage: string) {
    this.message$.next(newMessage);
  }
}
