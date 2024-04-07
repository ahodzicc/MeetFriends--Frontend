import { Component } from '@angular/core';
import { MeetUpConfirmationServices } from '../services/meet-up-confirmation.services';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-meet-up-confirmation',
  templateUrl: './meet-up-confirmation.component.html',
  styleUrl: './meet-up-confirmation.component.css'
})
export class MeetUpConfirmationComponent {
  destroy$: Subject<any> = new Subject<any>();
  changed:boolean=true;
  streak: number = 0;
  constructor(private service:MeetUpConfirmationServices) {
    this.streak = this.service.getBroj();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  increaseStreak(): void {
    this.service.setBroj();
    this.streak = this.service.getBroj();
  }

  getStreak(): number {
    return this.streak;
  }
}
