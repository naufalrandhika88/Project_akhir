import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { map } from 'rxjs/operators';
import { PlaceService } from '../../../contact/place.service';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private http: HttpClient, private placeSvc: PlaceService) { }

  ngOnInit() { }

  async onPickLocation() {
    const modal = await this.modalCtrl.create({
      component: MapModalComponent
    });
    modal.onDidDismiss().then((modalData) => {
      console.log(modalData.data);
      this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
        (address) => {
          console.log(address);
          this.placeSvc.setAddress(address);
        }
      );
    });
    return await modal.present();
  }

  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDqvejUkbbqph6J9c-IDG_MSSUrF9AjZ2Q`)
      .pipe(
        map(geoData => {
          if (!geoData || !geoData.results || !geoData.results.length) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      );
  }

}
