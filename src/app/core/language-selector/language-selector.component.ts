import { Component, OnInit, HostListener, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  @Input() public languages: string[][] = [['en', 'English'], ['ru', 'Русский']];
  public flag: boolean = false;
  public label: string;

  constructor(private translate: TranslateService) { }

  @HostListener('mouseleave') private onMouseLeave(): void {
    if (this.flag) { this.flag = !this.flag; }
  }

  public ngOnInit(): void {
    this.label = this.searchLabel(this.translate.currentLang);
  }

  public showMenu(): void {
    this.flag = !this.flag;
  }

  public onItemClick(event: Event, lang: string): void {
    event.preventDefault();
    this.translate.use(lang);
    this.label = this.searchLabel(lang);
  }

  public searchLabel(searchLang: string): string {
    return searchLang
      ? this.languages.find((el) => el[0] === searchLang)[1]
      : '';
  }
}
