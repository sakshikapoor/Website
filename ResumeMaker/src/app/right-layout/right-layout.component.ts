import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../services/transfer-data.service';
import { CookieService } from 'ngx-cookie-service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-right-layout',
  templateUrl: './right-layout.component.html',
  styleUrls: ['./right-layout.component.scss']
})
export class RightLayoutComponent implements OnInit {

  data: any = {};
  header: any[] = [];
  keys: any[] = [];
  imagePath;
  imgURL: any;
  message: string;

  constructor(transferDataService: TransferDataService,  cookie: CookieService) {
      this.data = transferDataService.getData();
      if (Object.keys(this.data).length === 0) {
      // this.data = JSON.parse(cookie.get('data'));
      this.data = {
        basicInfo: {
           firstNameContent: 'Sakshi',
           lastNameContent: 'Kapoor',
           emailIdContent: 'sakshi.kapoor97@gmail.com',
           Github: '/sakshikapoor',
           Instagram: '/sakshire',
           Behance: '/sakshire',
           LinkedIn: '/sakshire'
        },
        aboutMe: {
           aboutMeContent: 'I currently am a web developer at Box8'
        },
         careerObjective: {
           careerObjectiveContent: 'I want a good job'
        },
        profilePic: {
           profilePicContent: 'C:\\fakepath\\IMG_20191210_131427.jpg'
        },
        education: [
           {
              name: 'D. Y. Patil College of Engineering, Pune',
              specialization: 'Information Technology',
              year: '2017'
           }
        ],
        contactInfo: {
           mobilenumber: 8552885011,
           address: '27th Main, HSR Layout, Bangalore'
        },
        projectsUndertaken: [
           {
              name: 'Chatbot AI ',
              desc: 'Used Stanford NLP for english conversation and sentiment analysis'
           },
           {
              name: 'Society Management Website',
              desc: 'Database used - MongoDB'
           }
        ],
        hobbies: [
           {
              display: 'eating',
              value: 'eating'
           },
           {
              display: 'sleeping',
              value: 'sleeping'
           },
           {
              display: 'listening music',
              value: 'listening music'
           }
        ],
        workExperience: [
           {
              company: 'IBM',
              position: 'Mainframe Developer',
              description: 'Job Support'
           },
           {
              company: 'Box8',
              position: 'Web Developer',
              description: 'Bug fixes and enhancement in the websites'
           }
        ],
        internships: [
           {
              name: 'NA',
              description: 'NA'
           }
        ],
        languages: [
           {
              display: 'hindi',
              value: 'hindi'
           },
           {
              display: 'english',
              value: 'english'
           },
           {
              display: 'korean',
              value: 'korean'
           }
        ],
        professionalSkills: [
           {
              skill: 'Photoshop',
              rate: 70
           },
           {
              skill: 'Illustrator',
              rate: 85
           }
        ],
        website: {
           websiteContent: 'www.instagram.com/sakshire'
        },
        otherAccomplishments: {
           otherAccomplishmentContent: 'drew doodles for a published children\'s book'
        },
        certifications: [
           {
              certification: 'NA',
              year: 'NA'
           }
        ]
     };
    }
      this.keys = Object.keys(this.data);
  }

  ngOnInit() {
  }

  preview(files) {
   if (files.length === 0) {
     return;
   }

   const mimeType = files[0].type;
   if (mimeType.match(/image\/*/) == null) {
     this.message = 'Only images are supported.';
     return;
   }

   const reader = new FileReader();
   this.imagePath = files;
   reader.readAsDataURL(files[0]);
   reader.onload = (event) => {
     this.imgURL = reader.result;
   };
 }

  drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
 }

   print() {
      window.print();
 }
}
