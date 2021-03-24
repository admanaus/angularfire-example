import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Company } from '../models/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyRef: AngularFirestoreDocument<Company | undefined>;

  constructor(private db: AngularFirestore) {
    this.companyRef = this.db.doc<Company>('companies/5jDzBwSQBWRYXg2h4xXT');
  }

  getCompanyObservable(): Observable<Company> {
    return this.companyRef.valueChanges();
  }

  saveCompany(company: Company) {
    this.companyRef.set(company)
      .then(_ => console.log('Success on set'))
      .catch(error => console.log('set', error));
  }

  editCompany(company: any) {
    this.companyRef.update(company)
      .then(_ => console.log('Success on update'))
      .catch(error => console.log('update', error));
  }

  deleteCompany() {
    this.companyRef.delete()
      .then(_ => console.log('Success on remove'))
      .catch(error => console.log('remove', error));
  }

}
