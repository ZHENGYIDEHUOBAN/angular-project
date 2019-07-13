import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  url: Observable<string>;
  constructor(
    private router: ActivatedRoute
  ) {
    this.url = router.url.pipe(
      map(segments => segments.join(''))
    );
  }

  ngOnInit() {
    console.log(this.router);
    this.url.subscribe(res => {
      console.log(res);
    });
  }

  changeTrigger() {
    this.triggerTemplate = this.customTrigger;
  }

}
