import { Component, Input } from '@angular/core';
import { ArchitecturalStyle } from '../model/architecturalStyle';

@Component({
  selector: 'app-architectural-style-link',
  templateUrl: './architectural-style-link.component.html',
  styleUrls: ['./architectural-style-link.component.css']
})
export class ArchitecturalStyleLinkComponent {

  @Input() architecturalStyle!: ArchitecturalStyle;

}
