import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs'
import { PlanningService } from "../services/planning.service"

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit, OnDestroy {

  joursDeLaSemaine: any[]
  afficher: any[]
  afficherSubscription: Subscription
  jour = new Date()

  constructor(private PlanningService: PlanningService) {}

  formSubmit(form: NgForm) {
    const chien = form.value['chien']
    const jour = form.value['jour']
    this.PlanningService.ajoutChienDansPlanning(chien, jour)
  }

  modificationChienDansPlanning(id){
    this.PlanningService.modificationChienDansPlanning(id, "blc")
  }

  suppressionChienDansPlanning(id: string) {
    this.PlanningService.suppressionChienDansPlanning(id)
  }

  ngOnInit(): void {
    this.joursDeLaSemaine = this.PlanningService.joursDeLaSemaine
    this.PlanningService.afficherChienDansPlanning()
    this.afficherSubscription = this.PlanningService.afficherSubject.subscribe(
      (afficher: any[]) => {
        this.afficher = afficher
      }
    )
    this.PlanningService.emitAfficherSubject()
  }

  ngOnDestroy() {
    this.afficherSubscription.unsubscribe()
  }

}
