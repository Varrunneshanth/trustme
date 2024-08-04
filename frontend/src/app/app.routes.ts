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
import { HdfcComponent } from './hdfcs/hdfc.component';
import { TataMotorsComponent } from './tata-motors/tata-motors.component';
import { MahindraComponent } from './mahindra/mahindra.component';
import { MoruthiSuzukiComponent } from './moruthi-suzuki/moruthi-suzuki.component';
import { HyundaiComponent } from './hyundai/hyundai.component';
import { FabindiaComponent } from './fabindia/fabindia.component';
import { PantaloonsComponent } from './pantaloons/pantaloons.component';
import { ShoppersStopComponent } from './shoppers-stop/shoppers-stop.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { TonishqComponent } from './tonishq/tonishq.component';
import { MalabarGoldComponent } from './malabar-gold/malabar-gold.component';
import { PcJComponent } from './pc-j/pc-j.component';
import { KalyanComponent } from './kalyan/kalyan.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'forgetpassword', component: ForgetpasswordComponent },
    { path: 'verify', component: VerifyComponent},
    { path: 'categories', component: CategoriesComponent },
    { path: 'recentreviews', component: RecentreviewsComponent },
    { path: 'bestofbank', component: BestofbankComponent },

    //bank components
    { path: 'hdfc', component:HdfcComponent},
    {path:'axisbanks',component:AxisbankComponent},
    { path:'icicbank', component:IcicbankComponent},
    { path:'indianbank', component:IndianbankComponent},
    //car components
    { path:'tataMotors',component:TataMotorsComponent},
    { path:'mahindra',component:MahindraComponent},
    { path:'moruthiSuzuki',component:MoruthiSuzukiComponent},
    { path:'hyundi',component:HyundaiComponent},
    //shopping components
    { path:'fabindia',component:FabindiaComponent},
    { path:'pantaloos',component:PantaloonsComponent},
    { path:'shopperStop',component:ShoppersStopComponent},
    { path:'lifestyle',component:LifestyleComponent},
    //Jewelly components
    { path:'tonishq',component:TonishqComponent},
    { path:'malabar-gold',component:MalabarGoldComponent},
    { path:'pc-j',component:PcJComponent},
    { path:'kalyan',component:KalyanComponent},
    { path: '**', redirectTo: 'categories' }
]
