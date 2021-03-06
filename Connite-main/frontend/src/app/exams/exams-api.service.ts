import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {API_URL} from '../env';
import {Exam} from './exam.model';
import * as Auth0 from 'auth0-web';

@Injectable()
export class ExamsApiService
{
    constructor(private http: HttpClient)
    {}

    private static handleError(err: HttpErrorResponse | any)
    {
        return Observable.throw(err.message || 'Error: Unable to complete request.');
    }

    // GET list of public, future events
    getExams()
    {
        return this.http
            .get<Exam[]>(`${API_URL}/exams`)
            .pipe(catchError(ExamsApiService.handleError));
    }

  getExam(id: number) : Observable<Exam>
  {
    return this.http
      .get<Exam>(`${API_URL}/exam/${id}`)
      .pipe(catchError(ExamsApiService.handleError));
  }

    saveExam(exam: Exam): Observable<any> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${Auth0.getAccessToken()}`
          })
        };
        return this.http
          .post(`${API_URL}/exams`, exam, httpOptions);
    }

    saveExamId(exam: Exam, id : number): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${Auth0.getAccessToken()}`
        })
      };
      return this.http
        .post(`${API_URL}/exams/${id}`, exam, httpOptions);
  }
    

    deleteExam(examId: number)
    {
        return this.http.delete(`${API_URL}/exams/${examId}`);
    }


}
