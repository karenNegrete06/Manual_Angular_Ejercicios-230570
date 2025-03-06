import { Component, Output, EventEmitter } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FooterComponent]
})
export class LoginComponent {
  @Output() loginEvent = new EventEmitter<void>(); // ✅ Enviar evento de inicio de sesión

  login() {
    this.loginEvent.emit(); // ✅ Notificar al padre (app.component.ts)
  }
}
