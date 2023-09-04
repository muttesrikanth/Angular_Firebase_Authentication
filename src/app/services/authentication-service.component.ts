import { Injectable } from "@angular/core";
import{AngularFireAuth} from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { userdata } from "src/app/interfaces/userdetails";
@Injectable({providedIn:"root"})
export class AuthenticationService {
    userdata:string=''
    constructor( private fireauth:AngularFireAuth,private route:Router){}
  signup(userdetails:userdata){
    const {username,password}=userdetails;
   this.fireauth.createUserWithEmailAndPassword(username,password).then((resp)=>{alert('Signup Success');this.route.navigate(['login'])}).catch(Error=>alert(Error.message))
  }

  login(userdetails:userdata){
    const {username,password}=userdetails;
    return this.fireauth.signInWithEmailAndPassword(username,password).then(()=>{alert('login success');this.userdata=username;localStorage.setItem('user',username);this.route.navigate(['/'])}).catch((e)=>alert(e.message));
  }
  logout(){
    this.fireauth.signOut().then(()=>{alert('logout success');this.userdata='',localStorage.removeItem('user');this.route.navigate(['login'])}).catch((e)=>alert(e.message));
  }
}
