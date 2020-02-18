
import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Network } from '@ionic-native/network';
import { CordovaAvailableProvider } from '../cordova-available/cordova-available';

/*
  Generated class for the NetworkCheckerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkCheckerProvider {
  appIsOnline = false;
  constructor( public network: Network, public ica: CordovaAvailableProvider) {
  console.log('Hello Networkchecker');
  
  console.log("init network monitoring...")
  if ('onLine' in navigator) {
    this.appIsOnline = navigator.onLine;
  }
  // check if we are on device or if its a browser:
  if (this.ica.isCordovaAvailable) {
    // watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      console.log("network disconnected:(");
      this.appIsOnline = false;
    });
    // watch network for a connection
    this.network.onConnect().subscribe(() => {
      console.log("network connected!");
      this.appIsOnline = true;
      if (this.network.type === "wifi") {
        console.log("we got a wifi connection, woohoo!");
      }
   
    });
    console.log("device network monitor is ON")
  } else {
    fromEvent(window, "offline").subscribe(() => {
      this.appIsOnline = false;
      console.log("network disconnected:(");
     
    }
    );
    fromEvent(window, "online").subscribe(() => {
      this.appIsOnline = true;
      console.log("network connected!");
    
  }
  );
    console.log("PWA network monitor is ON")
  }

  }
}
