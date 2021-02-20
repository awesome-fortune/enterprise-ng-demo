import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Authenticate } from '@demo-app/data-models';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'demo-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login(authenticate: Authenticate) {
    this.authService.login(authenticate).subscribe();
  }
}
