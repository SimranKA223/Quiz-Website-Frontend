import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { 

  }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }

  public addQuiz(quiz: any){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete
  public deleteQuiz(qId: any){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //getting single quiz for future update
  public getQuiz(qId: number){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  public updateQuiz(quiz: any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  public getQuizzesOfCategory(cid: any){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  public getActiveQuizzesOfCategory(cid: any){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`)
  }

}
