import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';
// import * as jwt from "jsonwebtoken";


import { getUserRole, setUserRole } from 'src/app/utils/util';
import { environment } from 'src/environments/environment';

export interface ISignInCredentials {
  username: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  displayName: string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  baseUrl = environment.baseUrl ;

  constructor(private auth: AngularFireAuth, private http: HttpClient) {}

  // tslint:disable-next-line:typedef
  signIn(credentials: ISignInCredentials) {
    console.log(credentials);

    const httpOptions = {
      params: { tenantId: 'T5' },

      headers: new HttpHeaders({
        // tenantId: 'T5',
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post(this.baseUrl+'user/login', credentials, httpOptions);
    // .then(({ user }) => {
    //   console.log(user);

    //   return user;
    // }).catch((error) => {console.log(error)}
    // );
  }
  verifyToken(body: any) {
    console.log(body);
    // const decoded = jwt.verify(body, "401b09eab3c013d4ca54201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed");
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     // tenantId: 'T5',
    //     'Content-Type': 'application/json',
    //   }),
    // };

    // return this.http.post('http://34.76.184.138:2001/verifytoken', body, httpOptions)
    return "decoded"
    // .then(({ user }) => {
    //   console.log(user);

    //   return user;
    // }).catch((error) => {console.log(error)}
    // );
  }

  signOut = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  };

  // tslint:disable-next-line:typedef
  register(credentials: ICreateCredentials) {
    return this.auth
      .createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(async ({ user }) => {
        user.updateProfile({
          displayName: credentials.displayName,
        });
        this.auth.updateCurrentUser(user);
        return user;
      });
  }

  // tslint:disable-next-line:typedef
  sendPasswordEmail(email) {
    return this.auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  }

  // tslint:disable-next-line:typedef
  resetPassword(credentials: IPasswordReset) {
    return this.auth
      .confirmPasswordReset(credentials.code, credentials.newPassword)
      .then((data) => {
        return data;
      });
  }

  // tslint:disable-next-line:typedef
  async getUser() {
    const u = localStorage.getItem("token");
    // console.log(u);
    return { token: u, role: getUserRole() };
  }
  async setUser(lang) {
    // const u = localStorage.getItem("token");
    // console.log(u);
    return setUserRole(lang)
  }
}
