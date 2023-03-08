import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modulefederation-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
