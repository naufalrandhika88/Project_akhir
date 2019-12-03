import { Component, OnInit } from '@angular/core';
import { NavController,ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Newsa, NewsTestService } from '../service/news-test.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

// export interface Newsa {
//   id?: string,
//   title: string,
//   deskripsi: string,
//   image: string
// }

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {
  newsa: Newsa = {
    title: '',
    deskripsi: '',
    image: ''
  };

  // public userDoc: Newsa = {
  //   id: '',
  //   title: '',
  //   deskripsi: '',
  //   image: ''
  // };

  // public userDoc: any;

  public userDoc: Array<any>;
  userProfileCollection: any;

  // private news: Observable<Newsa[]>;
  // private newsCollection: AngularFirestoreCollection<Newsa>;
  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController, 
    private router: Router,
    private afs: AngularFirestore,
    private nts: NewsTestService
    ) {
    // this.nts.getNewFromDB().subscribe((res)=>{
    //   this.userDoc = [...res];
    // });
    this.userProfileCollection = afs.collection<any>('newsa');
    }

  ngOnInit() {
    
    //console.log(this.userDoc);
  }
  addNewsa(){
    this.userProfileCollection.add({
      title: this.newsa.title,
      image: this.newsa.image,
      deskripsi: this.newsa.deskripsi,
      // Other info you want to add here
    });
  }
  getData(){
    // this.nts.getNewFromDB().subscribe((res)=>{
    //   //this.userDoc = {...res}
    // });
  }
  // addNewsa(){
  //   this.ideaService.addNewsa(this.newsa).then(() => {
  //     this.router.navigateByUrl('/');
  //     this.showToast('Idea added');
  //   }, err => {
  //     this.showToast('There was a problem adding your idea :(');
  //   });
  // }
  
  // showToast(msg){
  //   this.toastCtrl.create({
  //     message: msg,
  //     duration: 2000
  //   }).then(toast => toast.present());
  // }
}
