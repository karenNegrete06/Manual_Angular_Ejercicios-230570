import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exerciseDescription = new BehaviorSubject<string>(''); 
  currentDescription = this.exerciseDescription.asObservable(); 

  constructor() {}

  setDescription(description: string) {
    this.exerciseDescription.next(description);
  }
}
