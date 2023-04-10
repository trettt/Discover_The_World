import { Injectable } from '@angular/core';
import { City } from '../interfaces/city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private cities: City[] = [
    {
      name: 'Paris',
      description:
        "...numit și 'orașul luminilor', Parisul este cunoscut pentru arhitectura sa magnifică, arta și cultura rafinată și mâncarea delicioasă.",
      image: '../../../assets/images/paris.jpg',
    },
    {
      name: 'Sydney',
      description:
        '...situat pe coasta de est a Australiei, Sydney-ul are o atmosferă vibrantă și este cunoscut pentru Opera House, plajele sale frumoase și peisajele de coastă.',
      image: '../../../assets/images/sydney.jpg',
    },
    {
      name: 'Rio de Janeiro',
      description:
        '...un oraș vibrant cu o cultură bogată, Rio de Janeiro este cunoscut pentru carnavalul său colorat, plajele sale frumoase și statuia lui Hristos Mântuitorul.',
      image: '../../../assets/images/rio-de-janeiro.jpg',
    },
    {
      name: 'Kyoto',
      description:
        '...un oraș plin de istorie și cultură, cu temple magnifice, grădini și spații verzi, mâncare excelentă și oameni prietenoși.',
      image: '../../../assets/images/kyoto.jpg',
    },
    {
      name: 'Marrakech',
      description:
        '...un oraș exotic și plin de culoare, Marrakech este cunoscut pentru piața sa tradițională, arhitectura sa magnifică și grădinile sale luxuriante.',
      image: '../../../assets/images/marrakech.jpg',
    },
    {
      name: 'San Francisco',
      description:
        '...situat pe coasta de vest a SUA, San Francisco-ul este un oraș plin de personalitate și cunoscut pentru podul său emblematic, tramvaiele sale vechi și cartierele sale eclectic.',
      image: '../../../assets/images/san-francisco.jpg',
    },
    {
      name: 'Cape Town',
      description:
        '...un oraș frumos situat la baza Table Mountain, Cape Town-ul are o combinație unică de cultură, istorie și peisaje de coastă.',
      image: '../../../assets/images/cape-town.jpg',
    },
    {
      name: 'Berlin',
      description:
        '...capitala Germaniei este un oraș vibrant cu o istorie bogată, cu muzee și galerii de artă importante, arhitectură modernă și o viață de noapte animată.',
      image: '../../../assets/images/berlin.jpg',
    },
    {
      name: 'Istanbul',
      description:
        '...Istanbul-ul este un oraș care conectează Europa și Asia, cu o arhitectură frumoasă, băi turcești, mâncare delicioasă și o combinație unică de culturi și tradiții.',
      image: '../../../assets/images/istanbul.jpg',
    },
  ];

  get allCities(): City[] {
    return this.cities;
  }
}
