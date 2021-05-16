import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';
import {FbResponse, Tree} from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class TreeService {
  type= 'Jabłonie';
  cartTrees: Tree[] = [];
  constructor(private http: HttpClient) { }
  create(tree) {
    return this.http.post(`${environment.fbDbUrl}/trees.json`, tree)
      .pipe(map((res: FbResponse) => {
        return {
          ...tree,
          id: res.name,
          date: new Date(tree.date),
        };
      }));
  }
  getAll() {
    return this.http.get(`${environment.fbDbUrl}/trees.json`)
    .pipe(map(res => {
      return Object.keys(res)
      .map(key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date),
      }))
    }))
  }
  getById(id) {
    return this.http.get(`${environment.fbDbUrl}/trees/${id}.json`)
      .pipe(map((res: Tree) => {
        return {
          ...res,
          id,
          date: new Date(res.date),
        }
      }))
  }
  remove(id) {
    return this.http.delete(`${environment.fbDbUrl}/trees/${id}.json`);
  }
  update(tree: Tree) {
    return this.http.patch(`${environment.fbDbUrl}/trees/${tree.id}.json`, tree);
  }
  setType(type) {
    this.type = type;
  }
  addTree(tree) {
    this.cartTrees.push(tree);
  }
}
