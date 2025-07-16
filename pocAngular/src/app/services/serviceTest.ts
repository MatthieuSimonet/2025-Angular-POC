import {Inject, Injectable} from '@angular/core';
import { iServiceTest } from './iServiceTest';
import { iDaoTest } from '../dao/iDaoTest';
import { DAO_TEST_TOKEN } from '../injecteur';

@Injectable({
    providedIn: 'root'
})
export class serviceTest implements iServiceTest {

    private _dao : iDaoTest;
    
    public constructor(@Inject(DAO_TEST_TOKEN) dao : iDaoTest ) {
        this._dao = dao;
    }

    public async Get() : Promise<string> 
    {
        return this._dao.Get();
    }
}