import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from 'src/services/api-client.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public data: any
  public search: string = ''
  public isPopup: boolean = false
  constructor(private api: ApiClientService,
    private router: Router) {}

  ngOnInit(): void {
    this.getListRepos()
  }

  getListRepos() {
    this.api.getListRepos().subscribe((res) => {
      this.data = res
    })
  }

  onChange(value: string) {
    if(!value) this.getListRepos()
    this.data = this.data.filter((item: any) => item.name.includes(value))
  }

  onClick(item: any) {
    window.open(`https://github.com/${item.full_name}`)
  }
}
