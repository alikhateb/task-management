import { Component, computed, input, output } from '@angular/core';
import { type User } from '../models/user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);
  isSelected = input.required<boolean>();

  selectUser(): void {
    this.select.emit(this.user().id);
  }
}
