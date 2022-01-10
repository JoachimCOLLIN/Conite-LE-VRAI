import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Subscription} from 'rxjs';
import {Ouvrier} from './ouvrier.model';
import {ExamsApiService} from './exams-api.service';
import { Exam } from './exam.model';

@Component({
    selector: 'chantier',
    template: `
    <div class ="mon_chantier">Mon Chantier: {{exam.title}}</div>
    <div>
        <section>                                     
            <button mat-raised-button color="Basic1" class ="big_button" [routerLink] = "['/listedesouvriers',exam.id]">Liste des ouvriers</button> 
            <button mat-raised-button color="Basic2" class ="big_button">Pointage</button>
            <button mat-raised-button color="Basic3" class ="big_button">Fiches de paie</button> 
            <button mat-raised-button color="Basic4" class ="big_button">Statistiques</button> 
        </section> 
    </div>
`,
    styles: [`
    button.big_button{
        width: 20vw;
        height: 20vh;
        font-size: 3vh;
        margin: 4vh;

      }
    div.mon_chantier{
        font-size: 3vh;
        margin : 3vh;
        font-weight : bold;
    }
    .mat-Basic1 {
        background-color: green;
        color: #fff;
    }
    .mat-Basic2 {
        background-color: red;
        color: #fff;
    }
    .mat-Basic3 {
        background-color: blue;
        color: #fff;
    }
    .mat-Basic4 {
        background-color: brown;
        color: #fff;
    }
  
  

`]
})


export class ChantierComponent implements OnInit {

    id = 0;
    examsListSubs: Subscription;
    exam : Exam;
    


    constructor(
      private route: ActivatedRoute,
      private examsApi: ExamsApiService,
      private router: Router,
    ) {}

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        this.id = +this.route.snapshot.paramMap.get('id')
      this.examsListSubs = this.examsApi
          .getExams()
          .subscribe(res => {this.exam = res[this.id-1];}, console.error);
      const self = this; 

      });
    

      };
    }

        

