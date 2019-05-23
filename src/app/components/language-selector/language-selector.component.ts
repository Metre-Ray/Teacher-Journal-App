import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  languages = [['en', 'English'], ['ru', 'Русский']];
  flag = false;
  label: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.label = this.searchLabel(this.translate.currentLang);
  }

  showMenu() {
    this.flag = !this.flag;
  }

  onItemClick(event, lang) {
    event.preventDefault();
    this.translate.use(lang);
    this.label = this.searchLabel(this.translate.currentLang);
  }

  searchLabel(searchLang) {
    return this.languages.find((el) => el[0] === searchLang)[1];
  }

  @HostListener('mouseleave') omMouseLeave() {
    if (this.flag) { this.flag = !this.flag; }
  }
}
