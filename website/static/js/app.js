// const url = 'https://cors.iamnd.eu.org/?url=https://example.com/api/data';
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const capsules = "http://127.0.0.1:5000//api/v1.0/federal2"
const hillary = "http://127.0.0.1:5000//api/v1.0/census"
const donald = "http://127.0.0.1:5000//api/v1.0/census2"
d3.json(hillary).then(function(data) {
    // console.log(data)
  });
function bubble_chart(hillary2){
  d3.json(hillary).then(function(data) {
    // console.log(data.alabama)
    let states_filtered = data[hillary2]
    let county_array = []
    let women_county = []
    let employed_county = []
    let unemployed_county = []
    let poverty_county = []
    let drive_county = []
    for (let i = 0; i < states_filtered.length; i++){
      values = states_filtered[i]
      counties = values.county
      county_array.push(counties)
      women_county.push(values.Women)
      employed_county.push(values.employed)
      unemployed_county.push(values.unemployed)
      poverty_county.push(values.poverty)
      drive_county.push(values.drive)
      

    
      
      // console.log(counties)

    }
    console.log(employed_county)
    var trace1 = {

      x: county_array,
    
      y: poverty_county,
    
      name: 'Poverty',
    
      type: 'bar',

      marker: {
        color : '#cea2fd',
        line: {
          color: '#35063e',
          width: 1.5
        }

      }
      
    
    };
    
    
    var trace2 = {
    
      x: county_array,
    
      y: employed_county,
    
      name: 'Employed',
    
      type: 'line',

      marker: {
        color : '#0343df',
        line: {
          color: '#00035b',
          width: 1.5
        }

      }
    
    };

    var trace3 = {

      x: county_array,
    
      y: unemployed_county,
    
      name: 'Unemployed',
    
      type: 'line',

      marker: {
        color : '#95d0fc',
        line: {
          color: '#8e82fe',
          width: 1.5
        }

      }
      
    
    };

    var trace4 = {

      x: county_array,
    
      y: drive_county,
    
      name: 'Drive',
    
      type: 'bar',

      marker: {
        color : '#75bbfd',
        line: {
          color: '#35063e',
          width: 1.5
        }

      }
      
    
    };
    
    
    var data = [trace1, trace2, trace3, trace4];
    
    
    var layout = {title: "Census demographics info", 
    font:{
      color: "blue"
    },
    barmode: 'group',
    paper_bgcolor:"rgba(0,0,0,0)"
  };
    
    
    Plotly.newPlot('bar2', data, layout);
    
    
  });
}

function donald_chart(donald1){
  d3.json(donald).then(function(data) {
    // console.log(data.alabama)
    let states_filtered = data[donald1]
    let county_array = []
    let total_votes = []
    let total_minority = []
    let total_unemployed = 
    yes_income = []
    total_income = []

    for (let i = 0; i < states_filtered.length; i++){
      values = states_filtered[i]
      counties = values.county
      county_array.push(counties)
      total_votes.push(values.total_votes)
      yes_income.push(values.above_24k)
      total_income.push(values.mean_income)
      total_minority.push(values.minority)
      total_unemployed.push(values.unemployed)

      // console.log(counties)

    }

    let census_graph = {
      x: county_array,
      y: total_income,
      mode: "markers",
      // text: yes_income,
      marker: {
        color: yes_income,
        colorscale: "Blackbody",
        size: total_unemployed,
        line: {
          color: '#35063e',
          width: 1.5
        }
      }
      
    };

    let layout2 = {
      title: "Income vs Counties",
      xaxis: {title: "counties"},
      yaxis:{title: "income"},
      autsize: true,
      margin: {
        l: 100,
        r: 50,
        t: 50,
        b: 50,
      },
      font:{
        color: "Purple"
      },
      paper_bgcolor:"rgba(0,0,0,0)"
    };

    final_buble = [census_graph]

    Plotly.newPlot("bar3", final_buble, layout2);
    
    
  });
}

  function bar_chart(us_states) {


    // Fetch the JSON data and console log it
    d3.json(capsules).then(function(data) {
      // console.log(data);
      let states_filtered = data[us_states]

      new Chart("myChart", {
        type: "bar",
        data: {
          labels: Object.keys(states_filtered),
          datasets: [{
            backgroundColor: "#ff028d",
            borderColor: "#4b006e",
            barPercentage: 1.09,
            borderWidth: 2,
            data: Object.values(states_filtered)
            
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yaxis: [{
              ticks:{
                beginAtZero:true
              }
            }]
          },
          title: {
            display: true,
            text: "state votes"
          }
        }
      });
      

    });
  }

  function init() {
    


    d3.json(capsules).then(function(data) {
    let names = Object.keys(data);
    let dropdownMenu = d3.select("#selDataset");
    for (let i = 0; i < names.length; i++) {
        dropdownMenu
          .append('option')
          .text(names[i])
          .property("value", names[i]);
  
  }
  
    let first_sample = names[0]
    
  
    bar_chart(first_sample);
    
  
    });

    d3.json(hillary).then(function(data) {

      // first_ones = Object.values(data)
      
      let states = Object.keys(data);
      console.log(states)
      let dropdownMenu = d3.select("#selDataset2");
      for (let i = 0; i < states.length; i++) {
          dropdownMenu
            .append('option')
            .text(states[i])
            .property("value", states[i]);
    
    }

    
      

    
      let census_demo = states[0]
      console.log(states[0])
      
    
      bubble_chart(census_demo);
      
    
      });

      d3.json(donald).then(function(data) {

        
        
        let states1 = Object.keys(data);
        
        let dropdownMenu2 = d3.select("#selDataset2");
        for (let i = 0; i < states1.length; i++) {
            dropdownMenu2
              .append('option')
              .text(states1[i])
              .property("value", states1[i]);
      
      }
  
      
        
  
      
        let census_demo2 = states1[0]
        
        
      
        donald_chart(census_demo2);
        
      
        });

      

  

  //shows different graphs for the id's
  }
  function optionChanged(sample){
    bar_chart(sample);
    bubble_chart(sample)
    donald_chart(sample)
    
  
  }
  init();