import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Breadcrumb } from '../models/breadcrumb';

export interface PostProcessFunction {
  (crumbs: Breadcrumb[]): Promise<Breadcrumb[]> | Observable<Breadcrumb[]> | Breadcrumb[];
}

@Injectable()
export class BreadcrumbsConfig {
  postProcess: PostProcessFunction
}