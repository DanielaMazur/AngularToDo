import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export type LoginResponse = { accessToken: string };

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>('http://localhost:3000/auth/login', {
        username,
        password,
      })
      .pipe(
        tap((response: LoginResponse) =>
          this.storeAccessToken(response.accessToken)
        )
      );
  }

  private storeAccessToken(token: string): void {
    const ACCESS_TOKEN_STORAGE_NAME = '[anulgar-todo][access-token]';

    localStorage.setItem(ACCESS_TOKEN_STORAGE_NAME, token);
  }
}
