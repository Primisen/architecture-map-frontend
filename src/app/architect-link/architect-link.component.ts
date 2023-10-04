import { Component, Input } from '@angular/core';
import { Architect } from '../model/architect';

@Component({
  selector: 'app-architect-link',
  templateUrl: './architect-link.component.html',
  styleUrls: ['./architect-link.component.css']
})
export class ArchitectLinkComponent {

  @Input()  architect!: Architect;

}
