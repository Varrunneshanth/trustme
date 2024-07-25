import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { VerifyComponent } from './verify/verify.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecentreviewsComponent } from './recentreviews/recentreviews.component';
import { BankComponent } from './bank/bank.component';
import { BestofbankComponent } from './bestofbank/bestofbank.component';
import { TotlereviewComponent } from './totlereview/totlereview.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'forgetpassword',component:ForgetpasswordComponent
    },
    {
        path:'resetpassword',component:ResetpasswordComponent
    },
    {
        path:'verify',component:VerifyComponent
    },
    {
        path:'categories',component:CategoriesComponent
    },
    {
        path:'recentreviews',component:RecentreviewsComponent
    },
    {
        path:'bank',component:BankComponent
    },
    {
        path:'bestofbank',component:BestofbankComponent
    },
    {
        path:'totlereview',component:TotlereviewComponent
    }
]
