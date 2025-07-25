import { Component, OnInit, Input, Inject } from '@angular/core';
//Pour pouvoir utiliser le pipe dans le html
import {UpperCasePipe} from '@angular/common';
import { daoTest } from '../../dao/daoTest';
import { SERVICE_TEST_TOKEN } from '../../injecteur';
import { iServiceTest } from '../../services/iServiceTest';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss'
})
//Menu du haut
export class TopMenu implements OnInit {

  //#region --- Attributs ---
  private _titre : string = "Coucou";
  private _boutons : string[];
  private _adresseLogo : string;
  private _service : iServiceTest;
  //#endregion

  //#region --- Propriétés ---
  //Titre du menu
  public get titre() : string {
    return this._titre;
  }
  
  @Input() set titre(val : string) {
    this._titre = val;
  }

  //Liste des boutons
  public get boutons() : string[] {
    return this._boutons;
  }

  //Adresse du logo
  public get logo() : string {
    return this._adresseLogo;
  }
  //#endregion

  //#region --- Constructeurs ---
  //Constructeur = sert à initialisé les attributs de bases (principalement dépendances)
  public constructor(@Inject(SERVICE_TEST_TOKEN) service : iServiceTest) {
    alert('Ici');
    this._service = service;
    this._boutons = ["Bouton1","Bouton2"];
    this._adresseLogo = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  //Méthode appelée automatiquement à la fin de l'initialisation
  //Y mettre l'initialisation "avancée"
  ngOnInit(): void {
  }
  //#endregion

  //#region --- Méthodes ---
  public async OnClicPaf() {
    this._adresseLogo = 'https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png';

    const text = await this._service.Get();
    alert(text);
  }
  //#endregion
}
