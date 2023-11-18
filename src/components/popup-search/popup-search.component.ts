import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiClientService } from 'src/services';

@Component({
  selector: 'app-popup-search',
  templateUrl: './popup-search.component.html',
  styleUrls: ['./popup-search.component.scss']
})
export class PopupSearchComponent {
  public isAdd: boolean = false
  public listLanguages: any = []
  public formData: FormGroup = this.fb.group({
    owner: [''],
    language: [''],
    date: [''],
    size: [[0,100]]
  })
  public listFilterType = [
    {title: 'Programing Language', key: 'language', isActive: false},
    {title: 'Minimum created date', key: 'date', isActive: false},
    {title: 'Repositories size', key: 'size', isActive: false}
  ]
  constructor(private fb: FormBuilder,
              private api: ApiClientService) {

  }

  ngOnInit(): void {
    this.getListLanguage()
  }

  getListLanguage() {
    this.api.getListLanguages().subscribe(res => {
      this.listLanguages = res
    })
  }

  onShow(key: string) {
    let found = this.listFilterType.find(item => item.key === key)
    return found?.isActive
  }

  onAdd() {
    this.isAdd = !this.isAdd
  }

  onSelect(item: any, index: number) {
    this.isAdd = false
    this.listFilterType[index].isActive = true
  }
}
