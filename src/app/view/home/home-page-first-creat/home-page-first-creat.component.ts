import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page-first-creat',
  templateUrl: './home-page-first-creat.component.html',
  styleUrls: ['./home-page-first-creat.component.css']
})
export class HomePageFirstCreatComponent implements OnInit, OnDestroy {
  private autoScrollSubscription!: Subscription;
  currentIndex = 0;

  constructor(private renderer: Renderer2) {}

  navigateToPage(direction: 'left' | 'right'): void {
    const increment = direction === 'left' ? -1 : 1;
    this.currentIndex += increment;

    // Ensure currentIndex stays within bounds
    this.currentIndex = Math.max(0, Math.min(this.currentIndex, 1));

    const transformValue = `translateX(-${this.currentIndex * 100}%)`;

    const viewport = document.querySelector('.viewport');
    if (viewport) {
      this.renderer.setStyle(viewport, 'transform', transformValue);
    }
  }

  ngOnInit() {
    // Démarrez le défilement automatique après 3000ms et répétez toutes les 3000ms
    this.autoScrollSubscription = interval(5000).subscribe(() => {
      // Naviguez vers la deuxième page pour le défilement automatique
      // Vous pouvez ajouter une logique spécifique si nécessaire
    });
  }

  ngOnDestroy() {
    // Assurez-vous de désabonner pour éviter les fuites de mémoire
    this.autoScrollSubscription.unsubscribe();
  }


}
