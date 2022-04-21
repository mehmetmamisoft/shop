import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
   if (!filterText) {
       return value;
   }else{
     return value.filter(p=>p.name.toLocaleLowerCase()
     .indexOf(filterText.toLocaleLowerCase())!==-1)
   }
  }}







