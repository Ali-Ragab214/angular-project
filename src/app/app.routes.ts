import { Routes } from '@angular/router';
import { Cards } from './Components/cards/cards';
import { Navbar } from './Components/navbar/navbar';
import { Slider } from './Components/slider/slider';
import { Home } from './Components/home/home';  
import { About } from './Components/about/about';   
import { Footer } from './Components/footer/footer';    
import { NotFound } from './Components/not-found/not-found';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
     {path:"cards" ,component:Cards},
    {path:"slider",component:Slider},
     {path:"home",component:Home},
     {path:"about",component:About},
    {path:"**",component:NotFound}


];
