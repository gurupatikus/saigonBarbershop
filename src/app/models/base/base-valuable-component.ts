import { BaseComponent } from './base-component';

import { Input } from '@angular/core';

export abstract class BaseValuableComponent extends BaseComponent {
    @Input() label: string;
    @Input() value: any;
}
