import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})


//Menu du haut
export class TopMenu {

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
  public constructor() {
    this._titre = "Mon Titre";
    this._boutons = ["Bouton1","Bouton2"];
  }
  //#endregion
}
