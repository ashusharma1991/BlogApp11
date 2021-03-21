import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { TokensObj } from "../models/tokendata";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_KEY = "admin";
  apiUrl = environment.apiUrl;
  private userToken;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    const endpoint = this.apiUrl + "/login";
    const httpParams = {
      username: username,
      password: password
    };

    return this.httpClient
      .post<{ access_token: string }>(endpoint, httpParams)
      .pipe(
        map(token => {
          this.userToken = token.access_token;
          this.storeToken();
        })
      );
  }

  storeToken() {
    sessionStorage.setItem(this.TOKEN_KEY, this.getUserToken());
  }

  getUserToken() {
    return this.userToken;
  }

  logoutAndRedirect() {
    this.logout();
    const url = "/login";
    this.router.navigate([url]);
  }

  register(username: string, password: string) {
    const endpoint = this.apiUrl + "/register";
    const httpParams = {
      username: username,
      password: password
    };

    return this.httpClient
      .post(endpoint, httpParams)
  }

  logout() {
    this.userToken = undefined;
    this.clearToken();
  }

  hasStoredToken() {
    return (
      sessionStorage.getItem(this.TOKEN_KEY) &&
      sessionStorage.getItem(this.TOKEN_KEY).length > 0
    );
  }

  clearToken() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

}
