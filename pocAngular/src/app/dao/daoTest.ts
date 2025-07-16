import { Injectable } from "@angular/core";
import { iDaoTest } from "./iDaoTest";

@Injectable({
    providedIn: 'root'
})
export class daoTest implements iDaoTest{
    public async Get() : Promise<string> {
        const reponse = await fetch("https://10.128.207.13:8081/Test");
        const text = await reponse.text(); 
        return text;
    }
}