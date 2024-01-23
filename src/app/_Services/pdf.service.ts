import { Injectable, NgZone } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  constructor(private zone: NgZone) {}

  generatePDF(user: User): void {
    const doc = new jsPDF();

    // Create a div to wrap the HTML content you want to capture
    const content = document.createElement('div');content.innerHTML = `
  <div class="container">
    <h2 class="text-center mb-4">Patient Medical Report</h2>

    <div class="row">
      <div class="col-md-6">
        <div>
          <strong>${user.lastName} ${user.firstName}</strong>
        </div>
        <div>${user.email}</div>
        <div>${user.phoneNumber}</div>
        <div>${user.adresse}</div>
      </div>

      <div class="col-md-12">
        <h4>Physical Information</h4>
        <table class="table">
          <thead>
            <tr>
              <th>Weight</th>
              <th>Height</th>
              <th>Sex</th>
              <th>Active in Sports</th>
              <th>Type of Sport</th>
              <th>Number of Times in Sports</th>
              <th>Blood Group</th>
            </tr>
          </thead>
          <tbody>
            <tr class="gray-row">
              <td>${user.poid}</td>
              <td>${user.taille}</td>
              <td>${user.sex}</td>
              <td>${user.sportActif}</td>
              <td>${user.typeSport}</td>
              <td>${user.nb_foisSport}</td>
              <td>${user.group_sang}</td>
            </tr>
            <!-- Add other rows as needed -->
          </tbody>
        </table>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-12">
        <h4>Medical History</h4>
        <table class="table">
          <thead>
            <tr>
              <th>Has any existing medical condition</th>
              <th>Type of Medical Condition</th>
              <th>Has any allergies</th>
              <th>Type of Allergy</th>
              <th>Medications</th>
              <th>Prescribed Medication</th>
              <th>Underwent Surgery</th>
              <th>Conditions after Surgery</th>
            </tr>
          </thead>
          <tbody>
            <tr class="gray-row">
              <td>${user.maladieCheck}</td>
              <td>${user.typeMaladie}</td>
              <td>${user.alergieCheck}</td>
              <td>${user.typeAlergie}</td>
              <td>${user.MedicamentCheck}</td>
              <td>${user.NomMedicament}</td>
              <td>${user.Chirurgie}</td>
              <td>${user.condition}</td>
            </tr>
            <!-- Add other rows as needed -->
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <style>
    /* Add the CSS styles for the table rows here */
    .gray-row {
      background-color: #f2f2f2; /* Gray background color for alternate rows */
    }
  </style>
`;

    document.body.appendChild(content);


    // Run the html2canvas operation outside of Angular zone
    this.zone.runOutsideAngular(() => {
      // Use ngAfterViewInit to ensure that the view is fully initialized
      setTimeout(() => {
        // Use html2canvas to capture the content as an image
        html2canvas(content).then((canvas) => {
          // Convert the canvas image to data URL
          const imgData = canvas.toDataURL('image/jpeg');

          // Add the image to the PDF
          doc.addImage(imgData, 'JPEG', 20, 40, 150, 75); // Adjust the position and size as needed

          // Save the PDF with a unique filename
          doc.save(`Patient_Report_${user.lastName}${user.firstName}.pdf`);
        });
      }, 0); // Use a minimal delay
    });
  }
}




// import { Injectable } from '@angular/core';
// import { jsPDF } from 'jspdf';
// import { User } from '../_models/user';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class PdfGeneratorService {
//   generatePDF(user: User): void {
//     const doc = new jsPDF();
//
//     // Set font and text color
//     doc.setFont('times');
//     doc.setTextColor(0, 0, 0);
//
//     // Add a title to the PDF
//     doc.setFontSize(16);
//     doc.text('Patient Medical Report', 20, 20);
//
//     // Track Y position manually
//     let yPosition = 30;
//
//     // Add personal information section
//     yPosition = this.addSection(doc, yPosition, 'Personal Information', [
//       `Code Medical: ${user.CodeMedical}`,
//       `Nom: ${user.Nom}`,
//       `Prenom: ${user.prenom}`,
//       `Email: ${user.email}`,
//       `Phone Number: ${user.phoneNumber}`,
//       `Date of Birth: ${user.dateNaissance}`,
//       `Address: ${user.adresse}, ${user.ville}`,
//     ]);
//
//     // Add physical information section
//     yPosition = this.addSection(doc, yPosition, 'Physical Information', [
//       `Weight: ${user.poid}`,
//       `Height: ${user.taille}`,
//       `Sex: ${user.sex}`,
//       `Active in Sports: ${user.sportActif}`,
//       `Type of Sport: ${user.typeSport}`,
//       `Number of Times in Sports: ${user.nb_foisSport}`,
//       `Blood Group: ${user.group_sang}`,
//     ]);
//
//     // Add medical history section
//     yPosition = this.addSection(doc, yPosition, 'Medical History', [
//       `Has any existing medical condition: ${user.maladieCheck}`,
//       user.maladieCheck === 'Yes' ? `Type of Medical Condition: ${user.typeMaladie}` : '',
//       `Has any allergies: ${user.alergieCheck}`,
//       user.alergieCheck === 'Yes' ? `Type of Allergy: ${user.typeAlergie}` : '',
//       `Medications: ${user.MedicamentCheck}`,
//       user.MedicamentCheck === 'Yes' ? `Prescribed Medication: ${user.NomMedicament}` : '',
//       `Underwent Surgery: ${user.Chirurgie}`,
//       user.Chirurgie === 'Yes' ? `Conditions after Surgery: ${user.condition}` : '',
//     ]);
//
//     // Save the PDF with a unique filename
//     doc.save(`Patient_Report_${user.Nom}.pdf`);
//   }
//
//   private addSection(doc: jsPDF, yPosition: number, title: string, lines: string[]): number {
//     doc.setFontSize(14);
//     doc.text(title, 20, yPosition);
//
//     doc.setFontSize(12);
//     lines.forEach((line, index) => {
//       doc.text(line, 20, yPosition + (index + 1) * 10);
//
//     });
//
//     // Return the updated Y position
//     return yPosition + lines.length * 10 + 20; // Adjust for spacing
//   }
// }



