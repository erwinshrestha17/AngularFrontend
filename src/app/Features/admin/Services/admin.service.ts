// admin/services/admin.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor() { }

  getAdminData(): string {
    return 'Admin Service Data';
  }
}
