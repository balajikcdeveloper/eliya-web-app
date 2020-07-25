import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/category/services/category.service';
import { NotificationService } from 'src/app/shared/services/general/notification.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  
  budgetApiUri: string = environment.baseUrl + '/budgets';
  
  categoryList:any;
  httpOptions: any;
  constructor(private http: HttpClient, private authService: AuthService,
    private categoryService:CategoryService,private notificationService:NotificationService
    ,private cookieService: CookieService) { 
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.authService.getToken(),
        }),
      };
    }
    addBudget(categoryId,budget){   
      return this.http.post(this.budgetApiUri+'?categoryId='+categoryId, budget, this.httpOptions);
      
    }
    

}
