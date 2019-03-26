import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from './item';

@Injectable({
    providedIn: 'root',
})
export class Items {
  items: Item[] = [];

  constructor() {
    let items = [
      {
         "name": "Fund 1000 Scholarships in Rural China for a Year",
         "profilePic": "assets/images/ruralschool.jpg",
         "about": "Some 200 million rural Chinese live below the poverty line by the World Bank definition of $1.25 per day, implying that 40 million school-aged children are at risk of dropping out of school before their high school graduation. In order to combat this huge waste of human capital, the SOAR Foundation, for the past 20 years, has provided 26,600 merit-based scholarships to more than 8,000 impoverished yet gifted students across rural China to finish high school and achieve success thereafter.",
         "isOwned": true,
         "count": 100000
      },
      {
         "name": "Education for Blind Chinese Orphans",
         "profilePic": "assets/images/blind.jpg",
         "about": "According to statistics, China has 20% of the world's blind population. The least fortunate among the blind are the blind orphans. Launched in 2003, Bethel is a not-for-profit organization which focuses on empowering the visually impaired Chinese orphan community by providing foster care, education, therapy, and livelihood opportunities. Bethel's school provides our blind and visually impaired orphans the education necessary so that one day they can lead a fulfilling, independent life.",
         "count": 80000
      },
      {
         "name": "Give Clean Water",
         "profilePic": "assets/images/water.jpg",
         "about": "1 in 10 people lack access to clean water. We are on a mission to change that. Here’s how.",
         "count": 80000
      },
      {
         "name": "Life Skill Education For Orphan Children",
         "profilePic": "assets/images/orphan_children.jpg",
         "about": "The Orphan Children wandering aimlessly and without proper parental affection and care will be provided Health Care & Life Skill Education & Vocational Training. They can get the social education which will help them to lead a fine life with social status. The Vocational Training will create confidence in them to avail self - reliance. The Home is started in Kurnool of Kurnool District presently with 20 Orphan Children.",
         "count": 40000
       },
       {
         "name": "Madhesh Education Initiative",
         "profilePic": "assets/images/madhesh.jpg",
         "about": "We believe that delivering quality education first needs compassionate teachers. And, we are wholeheartedly trying to prepare the teachers to be compassionate and deliver what they know the best in the face of this material challenge. We want the teachers to not only teach them academic knowledge and skills, but sports, arts, music, culture, values and compassion. Through our teaching methodology we will encourage the teachers to expose themselves and the children to questioning and reflecting.",
         "count": 40000
       },
       {
          "name": "Life Skill Education For Orphan Children",
          "profilePic": "assets/images/orphan_children.jpg",
          "about": "The Orphan Children wandering aimlessly and without proper parental affection and care will be provided Health Care & Life Skill Education & Vocational Training. They can get the social education which will help them to lead a fine life with social status. The Vocational Training will create confidence in them to avail self - reliance. The Home is started in Kurnool of Kurnool District presently with 20 Orphan Children.",
          "count": 40000
       },
     ];

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) > -1) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}