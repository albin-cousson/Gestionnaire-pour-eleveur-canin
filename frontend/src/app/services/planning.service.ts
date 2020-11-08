import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs'
import { Thing } from '../models/planning.model'

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  joursDeLaSemaine = [
    "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"
  ]

  thing = new Thing()
  afficherSubject = new Subject<any[]>()
  private afficher = []

  constructor(private http: HttpClient, private router: Router) { }

  ajoutChienDansPlanning(chien: string, jour: string) {
    this.thing.chien = chien
    this.thing.jour = jour
    this.thing.propre = false
    this.http.post('http://localhost:3000/ajouter', this.thing).subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['redirect'])
      },
      (error) => {
        console.log(error)
      }
    )
  }

  afficherChienDansPlanning() {
    this.http.get<any[]>('http://localhost:3000/afficher').subscribe(
      (response) => {
        this.afficher = response
        console.log(this.afficher)
        this.emitAfficherSubject()
      }, 
      (error) => {
        console.log(error)
      }
    )
  }

  modificationChienDansPlanning(id: string, obj: string) {
    this.http.put('http://localhost:3000/update/' + id, obj).subscribe(
      () => {
        console.log("Update réussi")
        this.router.navigate(['redirect'])
      }, 
      (error) => {
        console.log("Echec d'update: " + error)
      }
    )
  }

  suppressionChienDansPlanning(id: string) {
    this.http.delete('http://localhost:3000/delete/' + id).subscribe(
      () => {
        console.log("Suppression réussi")
        this.router.navigate(['redirect'])
      }, 
      (error) => {
        console.log("Echec de suppression: " + error)
      }
    )
  }

  emitAfficherSubject() {
    this.afficherSubject.next(this.afficher.slice())
  }

}
