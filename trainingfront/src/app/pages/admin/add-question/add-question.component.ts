import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId: any;
  qTitle:any;
  question:any={
    quiz:{

    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  };
  

  constructor(private _route:ActivatedRoute, private _question:QuestionService){}

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz['qId']=this.qId;
  }

  formSubmit(){
    if(this.question.content.trim()=='' || this.question.content==null){
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option1==null){
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer==null){
      return;
    }

    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire("Success","Question Added","success");
      },(error)=>{
        Swal.fire('Error','Error',error);
      }
    );
  }

}
