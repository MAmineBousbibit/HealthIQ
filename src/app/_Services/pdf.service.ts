import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class PdfGeneratorService {
  generatePDF(user: User): void {
    const doc = new jsPDF();

    // Set font and text color
    doc.setFont('times');
    doc.setTextColor(0, 0, 0);

    // Add a title to the PDF
    doc.setFontSize(16);
    doc.text('Patient Medical Report', 20, 20);

    // Track Y position manually
    let yPosition = 30;

    // Add personal information section
    yPosition = this.addSection(doc, yPosition, 'Personal Information', [
      `Code Medical: ${user.CodeMedical}`,
      `Nom: ${user.Nom}`,
      `Prenom: ${user.prenom}`,
      `Email: ${user.email}`,
      `Phone Number: ${user.phoneNumber}`,
      `Date of Birth: ${user.dateNaissance}`,
      `Address: ${user.adresse}, ${user.ville}`,
    ]);

    // Add physical information section
    yPosition = this.addSection(doc, yPosition, 'Physical Information', [
      `Weight: ${user.poid}`,
      `Height: ${user.taille}`,
      `Sex: ${user.sex}`,
      `Active in Sports: ${user.sportActif}`,
      `Type of Sport: ${user.typeSport}`,
      `Number of Times in Sports: ${user.nb_foisSport}`,
      `Blood Group: ${user.group_sang}`,
    ]);

    // Add medical history section
    yPosition = this.addSection(doc, yPosition, 'Medical History', [
      `Has any existing medical condition: ${user.maladieCheck}`,
      user.maladieCheck === 'Yes' ? `Type of Medical Condition: ${user.typeMaladie}` : '',
      `Has any allergies: ${user.alergieCheck}`,
      user.alergieCheck === 'Yes' ? `Type of Allergy: ${user.typeAlergie}` : '',
      `Medications: ${user.MedicamentCheck}`,
      user.MedicamentCheck === 'Yes' ? `Prescribed Medication: ${user.NomMedicament}` : '',
      `Underwent Surgery: ${user.Chirurgie}`,
      user.Chirurgie === 'Yes' ? `Conditions after Surgery: ${user.condition}` : '',
    ]);

    // Save the PDF with a unique filename
    doc.save(`Patient_Report_${user.Nom}.pdf`);
  }

  private addSection(doc: jsPDF, yPosition: number, title: string, lines: string[]): number {
    doc.setFontSize(14);
    doc.text(title, 20, yPosition);

    doc.setFontSize(12);
    lines.forEach((line, index) => {
      doc.text(line, 20, yPosition + (index + 1) * 10);

    });

    // Return the updated Y position
    return yPosition + lines.length * 10 + 20; // Adjust for spacing
  }
}
