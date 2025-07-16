import { InjectionToken } from '@angular/core';
import { iServiceTest } from './services/iServiceTest';
import { iDaoTest } from './dao/iDaoTest';

//Token pour l'injection de dépendance du service
export const SERVICE_TEST_TOKEN = new InjectionToken<iServiceTest>('serviceTest');
export const DAO_TEST_TOKEN = new InjectionToken<iDaoTest>('daoTest');
