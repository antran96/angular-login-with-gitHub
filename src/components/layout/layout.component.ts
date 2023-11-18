import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public userName: string = 'An Tran'
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  public onLogout(): void {
    this.router.navigateByUrl('/login')
  }
}
