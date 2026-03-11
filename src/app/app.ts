import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Components/navbar/navbar';
import { Slider } from './Components/slider/slider';  
import { Cards } from './Components/cards/cards'; 
import { Footer } from './Components/footer/footer';  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Slider,Cards,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ali-store');
}
