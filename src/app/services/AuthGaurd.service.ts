import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./authentication-service.component";

@Injectable({providedIn:"root"})
export class AuthGaurd implements CanActivate{
constructor( private route:Router,private authServe:AuthenticationService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authServe.userdata){
                    return true;
                }
                else{
                    this.route.navigate(['/login'])
                    return false
                }
    }

}