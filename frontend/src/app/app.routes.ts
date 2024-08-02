import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { VerifyComponent } from './verify/verify.component';
import { CategoriesComponent } from './categories/categories.component';
import { RecentreviewsComponent } from './recentreviews/recentreviews.component';
import { BestofbankComponent } from './bestofbank/bestofbank.component';
import { AxisbankComponent } from './axisbank/axisbank.component';
import { IcicbankComponent } from './icicbank/icicbank.component';
import { IndianbankComponent } from './indianbank/indianbank.component';
import { HdfcComponent } from './hdfc/hdfc.component';
import { TataMotorsComponent } from './tata-motors/tata-motors.component';
import { MahindraComponent } from './mahindra/mahindra.component';
import { MoruthiSuzukiComponent } from './moruthi-suzuki/moruthi-suzuki.component';
import { HyundaiComponent } from './hyundai/hyundai.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'forgetpassword', component: ForgetpasswordComponent },
    { path: 'verify', component: VerifyComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'recentreviews', component: RecentreviewsComponent },
    { path: 'bestofbank', component: BestofbankComponent },
    { path: 'hdfc', component:HdfcComponent},
    {path:'axisbanks',component:AxisbankComponent},
    { path:'icicbank', component:IcicbankComponent},
    { path:'indianbank', component:IndianbankComponent},
    { path:'tataMotors',component:TataMotorsComponent},
    { path:'mahindra',component:MahindraComponent},
    { path:'moruthiSuzuki',component:MoruthiSuzukiComponent},
    { path:'hyundi',component:HyundaiComponent},
    { path: '**', redirectTo: '' }
]
