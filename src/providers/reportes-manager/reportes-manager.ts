import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportesDataProvider } from '../reportes-data/reportes-data';
import { UserDataProvider } from '../user-data/user-data';
import { DateProvider } from '../date/date';
import { BaseUrlProvider } from '../base-url/base-url';
import { Observable } from 'rxjs/Observable';
import { reportes } from '../user-data/reportes';
import { DoctoresDataProvider } from '../doctores-data/doctores-data';
import { DrupalNodeManagerProvider } from '../drupal-node-manager/drupal-node-manager';
import { DrupalUserManagerProvider } from '../drupal-user-manager/drupal-user-manager';
import { Citas } from '../user-data/citas';
import { DrupalNodeEditorProvider } from '../drupal-node-editor/drupal-node-editor';
import { PermissionsProvider } from '../permissions/permissions';

/*
  Generated class for the ReportesManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportesManagerProvider {

  constructor(
    public http: HttpClient,
    public reportesData: ReportesDataProvider,
    public doctoresData: DoctoresDataProvider,
    public userData: UserDataProvider,
    public dp: DateProvider,
    public bu: BaseUrlProvider,
    public nodeMan: DrupalNodeManagerProvider,
    public nodeEditor: DrupalNodeEditorProvider,
    public perm: PermissionsProvider
  ) {
    console.log('Hello ReportesManagerProvider Provider');
  }


 

}
