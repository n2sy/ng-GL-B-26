import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  defaultLanguage = 'js';

  defautlComment = 'Rien à signaler...';
}
