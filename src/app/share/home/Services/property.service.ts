import { Injectable } from '@angular/core';
import { Property } from '../Models/property';
import { TypeEnum } from '../Models/type-enums';
@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}

  getAll(): Property[] {
    const r = [
      new Property(
        1,
        'Home',
        'Bed',
        'Big Home',
        100,
        1,
        1,
        200,
        ['photo'],
        'Suez',
        'bla',
        'fnar',
        true,
        12,
        'Ethar ',
        '../../assets/image/HomePage/blog-compact-img2.jpg'
      ),
      new Property(
        1,
        'Home',
        'Bed',
        'Big Home',
        400,
        5,
        2,
        200,
        ['photo'],
        'Domyat',
        'mm',
        'fnar',
        true,
        12,
        'Abrar',
        '../../assets/image/HomePage/blog-compact-img1.jpg'
      ),
      new Property(
        1,
        'Home',
        'Apartment',
        'Big Home',
        500,
        2,
        2,
        200,
        ['photo'],
        'Suez',
        'fr',
        'fnar',
        true,
        12,
        'Mohamed ',
        '../../assets/image/HomePage/blog-compact-img2.jpg'
      ),
      new Property(
        1,
        'Home',
        'Apartment',
        'Big Home',
        500,
        3,
        1,
        200,
        ['photo'],
        'Cairo',
        'ezba',
        'fnar',
        true,
        12,
        'Eman',
        '../../assets/image/HomePage/blog-compact-img1.jpg'
      ),
      new Property(
        1,
        'Home',
        'Bed',
        'Big Home',
        700,
        7,
        3,
        200,
        ['photo'],
        'Zagazig',
        'ezba',
        'fnar',
        true,
        12,
        ' Hassan',
        '../../assets/image/HomePage/blog-compact-img2.jpg'
      ),
    ];
    return r;
    //return this.http.get<Property[]>(this.baseUrl)
  }
}
