import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('prelim-project-KIMK_Group5');

  ngAfterViewInit() {
  const collapseMenu = document.getElementById('navbarExample01') as HTMLElement;
  const overlay = document.querySelector('.navbar-overlay') as HTMLElement;

  const bsCollapse = new (window as any).bootstrap.Collapse(collapseMenu, { toggle: false });

  collapseMenu.addEventListener('show.bs.collapse', () => {
    overlay.style.display = 'block';
  });

  collapseMenu.addEventListener('hide.bs.collapse', () => {
    overlay.style.display = 'none';
  });
}

closeMenu() {
  const collapseMenu = document.getElementById('navbarExample01') as HTMLElement;
  const bsCollapse = (window as any).bootstrap.Collapse.getInstance(collapseMenu);
  if (bsCollapse) bsCollapse.hide();
}

}
