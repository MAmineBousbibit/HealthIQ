import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { AuthService } from 'src/app/_Services/auth.service';
import { FlaskAnalyseService } from 'src/app/_Services/flask-analyse.service';

@Component({
  selector: 'app-chart-admin',
  templateUrl: './chart-admin.component.html',
  styleUrls: ['./chart-admin.component.css']
})
export class ChartAdminComponent implements OnInit{
  AllUser:any
  AllDoctors:any
  NbrTotalPatient=0
  nbTotalAppoitment=0
  NbrTotalDoc=0
  AllEvent:any
  firstFourDoctors:any
  firstFourPatient:any
  specialtyCounts:any
  constructor(private AuthService:AuthService, private FlaskService:FlaskAnalyseService){
   this.AllUsers()
   this.AllDoc()
   this.AllEvents()
   
  }
  chart:any
  chart1:any
  chart2:any
   chart3:any
  ngOnInit(): void {
    //this.StaticDoc()
    this.chart2 = document.getElementById('second');
    this.chart1 = document.getElementById('first');
    this.chart3 = document.getElementById('third');

     // this.Chart1()
      this.Chart2()
      this.RenderChart()
      this.RenderChart2()
      this.RenderChart3()

  }
  nbPatientsTOTAL=0
  
AllUsers(){
  this.FlaskService.getAllUsers().subscribe(
    (data:any)=>{
      console.log("allUsers",data);
      this.AllUser=data
      this.NbrTotalPatient=data.length
      this.firstFourPatient = this.AllUser.slice(0, 4);
    }
  )
}

  AllDoc(){
   this.FlaskService.getAllDoc().subscribe(
      (data:any)=>{
        console.log("allDoc",data);
        this.AllDoctors=data
        this.firstFourDoctors = this.AllDoctors.slice(0, 4);
       
        
        this.Chart1()
      }
    )
  }
  AllEvents(){
    this.FlaskService.getAllEvents().subscribe(
      (data:any)=>{
        console.log("allEvents",data);
        this.AllEvent=data
        this.nbTotalAppoitment=data.length
      }
    )
  }

 


  Chart1(){
    
    const specialties = this.AllDoctors.map((doctor:any) => doctor.specialite);

  
    this.specialtyCounts = specialties.reduce((counts:any, specialty:any) => {
        const doctorsForSpecialty = this.AllDoctors.filter((doctor:any) => doctor.specialite === specialty);
        const countForSpecialty = doctorsForSpecialty.length;
        counts[specialty] = countForSpecialty;
        //console.log("counts",counts);
         
        return counts;
      }, {});

  const chart = new Chart("graph", {
   
    //label: "last12Months",
     type: 'bar',
    data: {
      labels: Object.keys(this.specialtyCounts),
      datasets: [{
      
        data:Object.values(this.specialtyCounts),
        backgroundColor: [
          'rgba(64, 202, 198, 0.99)',
      'rgba(62, 164, 161, 0.653)',
      
    ],
 
      }]
    },
   
      
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
      
        scales: {
          x: { grid: {
            display: false // Masquer les lignes de la grille de l'axe x
          },
          
           
          },
          y: {
           
            beginAtZero: true,
            
          }
        },
        
      
      
    }
  });
  }
  Chart2() {
    const chartData = {
      labels: ['1', '2', '3', '4', '5', '7'],
      datasets: [
        {
          label: "Nombre de consultation ",
          //backgroundColor: 'rgba(162, 111, 72, 0.181)',
          data: [14, 21, 10, 5, 19, 23, 25],
          backgroundColor: ' rgba(156, 88, 145, 0.304)', 
          fill: true,
          borderColor: 'rgba(154, 61, 138, 0.647)',
          tension: 0.5,
        },
        {
          label: "Consultation annulé",
          backgroundColor: 'rgba(62, 164, 161, 0.31)',
          data: [3, 1, 6, 7, 0, 2, 1],
          borderColor: 'rgba(62, 164, 161, 0.653)',
          tension: 0.1,
          fill: true,
        },
      ],
    };
  
    // Create the chart using the chartData
    const chart = new Chart("graph2", {
      type: 'line',
      data: chartData,
      options: {
        animations: {
          tension: {
            duration: 2000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
        plugins: {
          legend: {
            display: true
          }
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            beginAtZero: true,
          },
          y: {
            grid: {
              display: false
            },
            beginAtZero: true,
          }
        }
      }
    });
  }

  RenderChart() {
    const ctx = document.getElementById('first');
    const data = {
      labels: [' Patient visiter', 'Patient non Visiter'],
      datasets: [{
        data: [180, 15],
        backgroundColor: ['rgba(62, 164, 161, 0.653)','rgba(73, 88, 140, 0.647)'],
      }],
    };

    const options = {

      cutout: '80%',
       
      plugins: {
        legend: {
          display: false,
     //   position: 'right',
        
        },
        tooltip: {
          enabled: true,
        },
      },

      animation: {
        onComplete: function (animation:any) {
          const chartInstance = animation.chart;
          const ctx1 = chartInstance.ctx;
          //const font = ctx1.helpers.fontString(20, 'bold', Chart.defaults.font.family); // Using Chart.helpers
          ctx1.font = 'bold 20px Arial';
          ctx1.textAlign = 'center';
          ctx1.textBaseline = 'middle';
          ctx1.fillStyle = 'black';
          ctx1.fillText('15', (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2, (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2);
        }
      }
      
      
    };

    new Chart(this.chart1, {
      type: 'doughnut',
      data: data,
      options: options as ChartOptions
    });
  }
  
  /******************************* */
  RenderChart2() {
    const ctx = document.getElementById('second');
    const data = {
      labels: ['Declaration', ''],
      datasets: [{
        data: [10, 300],
        backgroundColor: ['rgba(162, 111, 72, 0.647)', 'rgba(73, 88, 140, 0.647)'],
      }],
    };

    const options = {

      cutout: '80%',
       
      plugins: {
        legend: {
          display: false,
    
        
        },
        tooltip: {
          enabled: true,
        },
      },

      animation: {
        onComplete: function (animation:any) {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;
          ctx.font = 'bold 20px Arial';
         // ctx.font = chartInstance.defaults.fontString(20, 'bold', chartInstance.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'black';
          ctx.fillText('10', (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2, (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2);
        }
      }
      
      
    };

    new Chart(this.chart2, {
      type: 'doughnut',
      data: data,
      options: options as ChartOptions
    });
  }
  /************************** */
  RenderChart3() {
    const ctx = document.getElementById('third');
    const data = {
      labels: ['operation', 'consultation'],
      datasets: [{
        data: [28, 200],
        backgroundColor: ['rgba(154, 61, 138, 0.647)', 'rgba(73, 88, 140, 0.647)'],
      }],
    };

    const options = {

      cutout: '80%',
      
      plugins: {
        legend: {
          display: false,
         
        },
        tooltip: {
          enabled: true,
        },
      },
      animation: {
        onComplete: function (animation:any) {
          const chartInstance = animation.chart;
          const ctx = chartInstance.ctx;
          ctx.font = 'bold 20px Arial';
         // ctx.font = chartInstance.defaults.fontString(20, 'bold', chartInstance.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = 'black';
          ctx.fillText('28', (chartInstance.chartArea.left + chartInstance.chartArea.right) / 2, (chartInstance.chartArea.top + chartInstance.chartArea.bottom) / 2);
        }
      }
      
      
    };

    new Chart(this.chart3, {
      type: 'doughnut',
      data: data,
      options: options as ChartOptions })
  }
}
