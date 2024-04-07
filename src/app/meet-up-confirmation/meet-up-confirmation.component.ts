import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-up-confirmation',
  templateUrl: './meet-up-confirmation.component.html',
  styleUrl: './meet-up-confirmation.component.css'
})
export class MeetUpConfirmationComponent {
  meetupStreak: number = 0;

  increaseStreak() {
    this.meetupStreak++;
    alert("Meetup streak increased to " + this.meetupStreak);
  }

  noMeetup() {
    // No action needed if "No" is clicked, streak remains the same
  }
}
