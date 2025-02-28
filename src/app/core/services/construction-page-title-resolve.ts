import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { ConstructionService } from "./construction/construction.service";
import { Construction } from "../models/construction";

@Injectable({
  providedIn: 'root'
})
export class ConstructionTitleResolver  {

  constructor(private constructionService: ConstructionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string | Observable<string> | Promise<string> {
    const constructionId = route.paramMap.get('constructionId');

    if (!constructionId) {
      return of('Канструкцыі');
    }

    return this.constructionService.getConstruction(constructionId).pipe(
      switchMap((constructionData: Construction) => {
        return of(constructionData.name);
      })
    );
  }
}