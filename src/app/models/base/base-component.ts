import { Input } from '@angular/core';

export abstract class BaseComponent {
    @Input() class: string;
    @Input() name: string;
}
