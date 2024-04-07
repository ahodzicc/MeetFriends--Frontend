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
  constructor(private service:MeetUpConfirmationServices) {
  }
  ngOnDestroy():void{
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  increaseStreak() : void{
    this.service.setBroj()
  }
  getStreak(){
    return this.service.GetAllStreaks();

  }
}
