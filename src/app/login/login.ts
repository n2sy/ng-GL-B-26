import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  defaultLanguage = 'js';

  defautlComment = 'Rien à signaler...';

  submitHandler(f: NgForm) {
    console.log(f.value);
  }

  generatePwd(f: NgForm) {
    f.setValue({
      login: '',
      password: crypto.randomUUID(),
      infos: {
        langage: '',
        commentaire: '',
      },
      erreurs: '',
    });
  }
  generatePwdII(f: NgForm) {
    f.form.patchValue({
      password: crypto.randomUUID(),
    });
  }

  resetForm(f: NgForm) {
    //f.reset();
    f.setValue({
      login: '',
      password: '',
      infos: {
        langage: 'js',
        commentaire: 'Rien à signaler...',
      },
      erreurs: '',
    });
  }
}
