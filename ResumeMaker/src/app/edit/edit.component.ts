import { Component, OnInit } from '@angular/core';
import { TransferDataService } from '../services/transfer-data.service';
import { CookieService } from 'ngx-cookie-service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  data: any = {};
  header: any[] = [];
  keys: any[] = [];

  constructor(transferDataService: TransferDataService,  cookie: CookieService) {
      this.data = transferDataService.getData();
      if (Object.keys(this.data).length === 0) {
      // this.data = JSON.parse(cookie.get('data'));
      this.data = {
        basicInfo: {
           firstNameContent: 'Sakshi',
           lastNameContent: 'Kapoor',
           emailIdContent: 'sakshi.kapoor97@gmail.com'
        },
        aboutMe: {
           aboutMeContent: 'I currently am a web developer at Box8'
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
              rate: 100
           },
           {
              rate: 100
           }
        ],
        careerObjective: {
           careerObjectiveContent: 'want a good job'
        },
        website: {
           websiteContent: 'www.instagram.com/sakshire'
        },
        otherAccomplishments: {
           otherAccomplishmentContent: 'drew doodles for a published children\'s book'
        },
        certifications: [
           {
              certification: 'NA',
              institute: 'NA',
              year: 'NA'
           }
        ]
     };
    }
      this.keys = Object.keys(this.data);
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.keys, event.previousIndex, event.currentIndex);
 }

}
