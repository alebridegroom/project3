// const url = 'https://cors.iamnd.eu.org/?url=https://example.com/api/data';
// fetch(url)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

const capsules = "http://127.0.0.1:5000//api/v1.0/federal2"
d3.json(capsules).then(function(data) {
    console.log(data)
  });

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
  


      // console.log(sample_values.slice(0,10).reverse())
  
      
  
      
      
      
      //plotting the graphs in there respective places
      
      
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
  //shows different graphs for the id's
  }
  function optionChanged(sample){
    bar_chart(sample);
    
  
  }
  init();