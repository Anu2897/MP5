import { Component } from "@angular/core";
import { Platform, AlertController } from "@ionic/angular";
import {
  DocumentViewer,
  DocumentViewerOptions
} from "@ionic-native/document-viewer/ngx";
import { File } from "@ionic-native/file/ngx";
import {
  FileTransfer,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  ft: any;
  fileOpener: any;
  fileTransfer: FileTransferObject;
  constructor(
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer,
    private document: DocumentViewer,
    private alertController: AlertController
  ) {
    this.fileTransfer = this.transfer.create();
  }

  openLocalPdf() {
    const opt: DocumentViewerOptions = {
      title: "My PDF"
    };
    this.document.viewDocument("assets/MDB.pdf", "application/pdf", opt);
  }

  downloadAndOpenLocalPdf() {
    this.presentAlert('error');
    let path = null;
    path = this.file.dataDirectory;

    this.fileTransfer
      .download(
        "https://devdactic.com/html/5-simple-hacks-LBT.pdf",
        path + "myfile.pdf"
      )
      .then(
        result => {
          this.fileOpener.open(result.toURL(), "application/pdf");
        },
        error => {
          this.presentAlert(error);
        }
      );
  }
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: " ",
      message: error,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',

      }]
    });

    await alert.present();
  }
}
