import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Newsa {
  id?: string,
  title: string,
  deskripsi: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})

export class NewsTestService {
  public test: any;
  private news: Observable<Newsa[]>;
  private newsCollection: AngularFirestoreCollection<Newsa>;

  constructor(public afs: AngularFirestore) {
  }

  getNewFromDB(){
    // this.newsCollection = this.afs.collection<Newsa>('newsa');
    // //console.log(this.newsCollection);
    // this.news = this.newsCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       //console.log(data);
    //       //console.log('test2');
    //       return { id, ...data };
    //     });
    //   })
    // );
    return this.afs.collection<Newsa>('newsa').valueChanges();
  }
  getNews(): Observable<Newsa[]> {
    return this.news;
  }

  getNew(id: string): Observable<Newsa>{
    return this.newsCollection.doc<Newsa>(id).valueChanges().pipe(
      take(1),
      map(news => {
        news.id = id;
        return news;
      })
    );
  }

  addNewsa(newsa: Newsa): Promise<DocumentReference> {
    return this.newsCollection.add(newsa);
  }

  updateIdea(newsa: Newsa): Promise<void> {
    return this.newsCollection.doc(newsa.id).update({ title: newsa.title, deskripsi: newsa.deskripsi, image: newsa.image});
  }

  deleteIdea(id: string): Promise<void> {
    return this.newsCollection.doc(id).delete();
  }
}
