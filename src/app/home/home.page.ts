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
import { HttpClientModule } from "@angular/common/http";
//import { HttpModule } from "@angular/http";
declare var require: any;
const FileSaver = require("file-saver");
import { FileOpener } from "@ionic-native/file-opener/ngx";
//import { FileChooser } from "@ionic-native/file-chooser/ngx";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  ft: any;
  // fileOpener: any;
  fileTransfer: FileTransferObject;
  constructor(
    private platform: Platform,
    private file: File,
    private transfer: FileTransfer,
    private document: DocumentViewer,
    private alertController: AlertController,
    private fileOpener: FileOpener //private fileChooser: FileChooser
  ) {
    this.fileTransfer = this.transfer.create();
  }

  openLocalPdf() {
    const opt: DocumentViewerOptions = {
      title: "My PDF"
    };
    FileSaver.saveAs(
      "https://devdactic.com/html/5-simple-hacks-LBT.pdf",
      "myFile.pdf"
    );
  }

  downloadAndOpenLocalPdf() {
    /*  let path = null;
    path = this.file.dataDirectory;
    // this.presentAlert("CHECK" + this.file);

    //this.presentAlert("CHECK" + this.fileTransfer);
    //let proxyurl = "https://cors-anywhere.herokuapp.com/";
    this.fileTransfer
      .download(
        "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
        path + "myFile.pdf"
      )
      .then(entry => {
        console.log("download complete: " + entry.toURL());
        this.fileOpener
          .open(entry.toURL(), "application/pdf")
          .then(() => console.log("File is opened"))
          .catch(e => console.log("Error opening file", e));
      });*/
    let url = "https://devdactic.com/html/5-simple-hacks-LBT.pdf";
    FileSaver.saveAs(
      "https://cors-anywhere.herokuapp.com/" + url,
      "myFile.pdf"
    );

    FileSaver.saveAs(url, "myFile.pdf");
  }
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: " ",
      message: error,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary"
        }
      ]
    });

    await alert.present();
  }
}
