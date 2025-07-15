import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})


//Menu du haut
export class TopMenu implements OnInit {

  //#region --- Attributs ---
  private _titre : string;
  private _boutons : string[];
  //#endregion

  //#region --- Propriétés ---
  //Titre du menu
  public get titre() : string {
    return this._titre;
  }

  //Liste des boutons
  public get boutons() : string[] {
    return this._boutons;
  }
  //#endregion

  //#region --- Constructeurs ---
  //Constructeur = sert à initialisé les attributs de bases
  public constructor() {
    this._titre = "Mon Titre";
    this._boutons = ["Bouton1","Bouton2"];
  }

  //Méthode appelée automatiquement à la fin de l'initialisation
  //Y mettre l'initialisation "avancée"
  ngOnInit(): void {
      
  }
  //#endregion
}
