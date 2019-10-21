import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MyTavern {
    Id: number;
    Name: string;
}

@Injectable({
    providedIn: 'root',
})
export class TavernsService {
    constructor(private http: HttpClient) {}

    getAll(): Observable<MyTavern[]> {
        return this.http.get<MyTavern[]>('http://localhost:3000/todos');
    }
}
