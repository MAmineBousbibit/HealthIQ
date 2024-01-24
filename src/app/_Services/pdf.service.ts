import { Injectable, NgZone } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { User } from '../_models/user';
import {Ordonnance} from "../_models/ordonnance";
import {content} from "html2canvas/dist/types/css/property-descriptors/content";

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor(private zone: NgZone) {}

  generateRapportPDF(user: User): void {
    const doc = new jsPDF();

    // Create a div to wrap the HTML content you want to capture
    const content = document.createElement('div');content.innerHTML = `
    <div class="p-5 ">
    <div class="header">
        <div>
            <img style="width: 9em;" src="../../assets/img/Logo/Logo14.png">
        </div>
        <div class="title">
            <div style="color: #2B7F75; font-size: 2.1em;">
            Medical Report For
            </div>
            <div style="max-width: 500px;font-weight: bold;font-family: 'Inter Black',  sans-serif;">
                ${user.firstName} ${user.lastName}
            </div>
        </div>
        <div>
            <img style="width: 10em;" src="../../assets/img/Logo/Logo%20minestere%20de%20la%20sante.png">
        </div>
    </div>

    <div>
        <div class="component-title" >
            Personal Informations
        </div>
        <div>
            <table class="info-table">
                <tr>
                    <td class="table-title">
                        Name
                    </td>
                    <td class="table-data">
                        ${user.firstName}
                    </td>
                    <td class="table-title">
                        Phone
                    </td>
                    <td class="table-data">
                        ${user.phoneNumber}
                    </td>
                </tr>
                <tr>
                    <td class="table-title">
                        Email
                    </td>
                    <td class="table-data">
                        ${user.email}

                    </td>
                    <td class="table-title">
                        Adress
                    </td>
                    <td class="table-data">
                       ${user.adresse}

                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div>
        <div class="component-title">
            Physical Informations
        </div>
        <div>
            <table class="info-table">
                <tr>
                    <td class="table-title"> Weight</td>
                    <td class="table-title"> Height</td>
                    <td class="table-title"> Sex</td>
                    <td class="table-title"> Active in sports</td>
                    <td class="table-title"> Type of sport</td>
                    <td class="table-title"> Number of times in sport</td>
                    <td class="table-title"> Blood group</td>
                </tr>
                <tr>
                    <td class="table-data"> ${user.poid}</td>
                    <td class="table-data"> ${user.taille}</td>
                    <td class="table-data"> ${user.sex}</td>
                    <td class="table-data"> ${user.typeSport}</td>
                    <td class="table-data"> ${user.typeSport}</td>
                    <td class="table-data"> ${user.nb_foisSport}</td>
                    <td class="table-data">${user.group_sang}</td>
                </tr>
            </table>
        </div>
        </div>

        <div>
            <div class="component-title">
                Medical history
            </div>
            <div>
                <table class="info-table ">
                    <tr>
                        <td class="table-title"> Has an existing medical condition</td>
                        <td class="table-title"> Type of medical condition</td>
                        <td class="table-title"> Has any allergies</td>
                        <td class="table-title"> Type of allergy</td>
                        <td class="table-title"> Medications</td>
                        <td class="table-title"> Prescribed medications</td>
                    </tr>
                    <tr>
                        <td class="table-data"> oui </td>
                        <td class="table-data"> diabète </td>
                        <td class="table-data"> non </td>
                        <td class="table-data">null</td>
                        <td class="table-data"> oui</td>
                        <td class="table-data"> liraglutide ,insuline dégludec</td>
                    </tr>
                </table>
            </div>
            </div>
            </div>
  <style>
   body{

    padding: 2em;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4em;
}

.title{
    text-align: center;

    font-size: 1.1em;
    margin-top: 3em;
}

.component-title{
   
   
    margin-bottom: 1em;
    font-weight: bolder;

}

.info-table{
    border: 0.1em solid #5B6268;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 3em;
}

.table-title, .table-data{
    border: 0.1em solid #5B6268;
    padding: 0.5em;
  
}

.table-data{
  color : green
}

.table-title{
  
    color: #5B6268;
}
  </style>
`;

    document.body.appendChild(content);


    // Run the html2canvas operation outside of Angular zone
    this.zone.runOutsideAngular(() => {
      // Use ngAfterViewInit to ensure that the view is fully initialized
      setTimeout(() => {
        // Use html2canvas to capture the content as an image
        html2canvas(content).then((canvas:any) => {
          // Convert the canvas image to data URL
          const imgData = canvas.toDataURL('image/jpeg');

          const margin = 10;
          const bottomMargin = 25;
          const textWidth = content.offsetWidth;
          const pdfWidth = textWidth + 2 * margin;


          doc.addImage(
            imgData,
            'JPEG',
            margin, // left margin
            margin, // top margin
            doc.internal.pageSize.width - 2 * margin, // width
            doc.internal.pageSize.height - 2 * margin - bottomMargin // height
          );
          // Save the PDF with a unique filename
          doc.save(`Patient_Report_${user.lastName}${user.firstName}.pdf`);
        });
      }, 0); // Use a minimal delay
    });
  }



  generateOrdonncePDF(ordonnace : Ordonnance): void {

    const doc = new jsPDF();

    // Create a div to wrap the HTML content you want to capture
    const content = document.createElement('div'); content.innerHTML = `

<body>
    <div class="header">
        <div>
            <div style="color: #2B7F75;">
                Dr.${ordonnace.nom_Doc} ${ordonnace.Prenom_Doc}
            </div>
            <div>
                Cabinet
            </div>
            <div>
                Gynecologue
            </div>
        </div>
        <div>
            <img style="width: 5em;" src="../../assets/img/Logo/Logo%20minestere%20de%20la%20sante.png">
        </div>
        <div>
            <div>
                Adresse: ${ordonnace.adresse_patient}
            </div>
            <div>
                Tel: ${ordonnace.phoneNumber_patient}
            </div>
            <div>
                ${ordonnace.email_patient}
            </div>
        </div>
    </div>

    <div class="title"><u>Ordonnance médicale</u></div>

    <div style="text-align: center; font-family: 'Inter SemiBold', sans-serif; font-size: 0.9em; margin-bottom: 1em;"> Fait à: Evry, Le 22/01/2024</div>
    <div style="text-align: center; font-family: 'Inter SemiBold', sans-serif; font-size: 0.9em; margin-bottom: 3em;"> Nom et prenom: ${ordonnace.Nom_patient} ${ordonnace.Prenom_patient}</div>

        <div style="display: flex; justify-content: center;">
            <table class="info-table">
                <tr>
                    <td class="table-title"> Médicaments</td>
                    <td class="table-title"> Nombre de fois/Jour</td>
                </tr>
                <tr>
                    <td class="table-data"> Doliprane</td>
                    <td class="table-data"> 3</td>
                </tr>
                <tr>
                    <td class="table-data"> Rhinomicine</td>
                    <td class="table-data"> 2</td>
                </tr>
            </table>
        </div>



</body>
<style>
body{
    font-family:'Inter', sans-serif;;
    padding: 2em;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4em;
    font-family: 'Inter SemiBold', sans-serif;
    font-size: 0.9em;
}

.title{
    text-align: center;
    font-family: 'Inter SemiBold', sans-serif;
    font-size: 1.1em;
    margin-top: 3em;
    color: #2B7F75;
    margin-bottom: 2em;
}


.component-title{
    font-family: 'Inter SemiBold', sans-serif;
    font-size: 0.9em;
    margin-bottom: 1em;
}

.info-table{
    border: 0.1em solid #5B6268;
    width: 80%;
    border-collapse: collapse;
    margin-bottom: 3em;
}

.table-title, .table-data{
    padding: 0.5em;
    font-size: 0.9em;
}

.table-data{
    border-right: 0.1em solid #5B6268;;
    font-family: 'Inter Medium', sans-serif;
}

.table-title{
    font-family: 'Inter SemiBold', sans-serif;
    border: 0.1em solid #5B6268;
    color: #5B6268;
}
</style>

`;

    document.body.appendChild(content);


    // Run the html2canvas operation outside of Angular zone
    this.zone.runOutsideAngular(() => {
      // Use ngAfterViewInit to ensure that the view is fully initialized
      setTimeout(() => {
        // Use html2canvas to capture the content as an image
        html2canvas(content).then((canvas:any) => {
          // Convert the canvas image to data URL
          const imgData = canvas.toDataURL('image/jpeg');

          const margin = 10;
          const bottomMargin = 25;
          const textWidth = content.offsetWidth;
          const pdfWidth = textWidth + 2 * margin;


          doc.addImage(
            imgData,
            'JPEG',
            margin, // left margin
            margin, // top margin
            doc.internal.pageSize.width - 2 * margin, // width
            doc.internal.pageSize.height - 2 * margin - bottomMargin // height
          );
          // Save the PDF with a unique filename
          doc.save(`Patient_Report_${ordonnace.Nom_patient}${ordonnace.Prenom_patient}.pdf`);
        });
      }, 0); // Use a minimal delay
    });
  }

}





