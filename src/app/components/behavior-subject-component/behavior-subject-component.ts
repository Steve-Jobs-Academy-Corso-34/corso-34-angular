import { Component, inject, signal } from '@angular/core';
import { BehaviorSubjectService } from '../../../services/behavior-subject.service';
import { FormsModule } from '@angular/forms';
import { map, Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [FormsModule],
  templateUrl: './behavior-subject-component.html',
  styleUrl: './behavior-subject-component.scss',
})
export class BehaviorSubjectComponent {
  // Inject con il nuovo metodo inject()
  private messageService = inject(BehaviorSubjectService);

  newValue = signal<string>('ciao');

  message: string = '';

  private destroy$ = new Subject<void>();

  // Inject del servizio BehaviorSubjectService con costruttore (sempre così prima di inject())
  //constructor(private messageService: BehaviorSubjectService) {}

  ngOnInit() {
    this.messageService
      // Observable per la gestione del flusso di dati
      // prende il messaggio dal BehaviorSubjectService con observable
      .getMessage()

      // Operatori RxJS per gestire il flusso di dati
      // pipe: catena di operatori che trasformano l'Observable
      .pipe(
        // takeUntil: completa l'Observable quando riceve un valore da destroy$
        // takeUntil: previene memory leak quando il componente viene distrutto
        // takeUntil: elimina la necessità di fare unsubscribe manuale
        // takeUntil: tiene il subscribe attivo fino a quando destroy$ emette un valore
        takeUntil(this.destroy$),

        // tap: esegue un effetto collaterale senza modificare il flusso
        tap((msg) => console.log(`TAP: Messaggio Originale: "${msg}"`)),

        // map: trasforma il valore emesso dall'Observable
        // map: ritorna il nuovo valore trasformato (trim in questo caso)
        map((msg) => {
          console.log(
            `MAP: Faccio il trim() del messaggio: "Originale: ${msg}" - "Trimmed: ${msg.trim()}"`
          );

          // Ritorna il messaggio trasformato (obbligatorio in map)
          return msg.trim();
        })
      )

      // Subscribe: si iscrive all'Observable per ricevere i valori emessi
      .subscribe((msg) => {
        if (!msg) return;

        this.message = msg;

        console.log(`SUBSCRIBE: Messaggio ricevuto dal BehaviorSubject: "${this.message}"`);
        console.log('-----------------------------------');
      });

    // Stesso codice senza commenti esplicativi riga per riga
    /* this.messageService
      .getMessage()
      .pipe(
        takeUntil(this.destroy$),
        tap((msg) => console.log(`TAP: Messaggio Originale: "${msg}"`)),
        map((msg) => {
          console.log(
            `MAP: Faccio il trim() del messaggio: "Originale: ${msg}" - "Trimmed: ${msg.trim()}"`
          );
          return msg.trim();
        })
      )
      .subscribe((msg) => {
        if (!msg) return;

        this.message = msg;

        console.log(`SUBSCRIBE: Messaggio ricevuto dal BehaviorSubject: "${this.message}"`);
        console.log('-----------------------------------');
      }); */
  }

  ngOnDestroy() {
    console.log('BehaviorSubjectComponent distrutto');

    this.destroy$.next();
    this.destroy$.complete();
  }

  /* get message() {
    return this.messageService.getMessage();
  } */

  setMessage() {
    this.messageService.setMessage(this.newValue());
  }
}
