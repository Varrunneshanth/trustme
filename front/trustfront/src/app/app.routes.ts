import { RouterModule, Routes } from '@angular/router';
import { SiginSigupComponent } from './sigin-sigup/sigin-sigup.component';
import { CategoriesComponent } from './categories/categories.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

export const routes: Routes = [
    //sigin and sigup
    { path:'',component:SiginSigupComponent},
    //categories
    {path:'categories',component:CategoriesComponent},
    {path: 'company/:id', component: CompanyDetailsComponent} 
];
