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
  


      // console.log(sample_values.slice(0,10).reverse())
  
      let bar_graph = {
        x: Object.keys(states_filtered),
        //mapping the names if the id's to the graphs
        y: Object.values(states_filtered),
        type: "bar",

        marker: {
          color : '#cea2fd',
          line: {
            color: '#35063e',
            width: 1.5
          }
  
        }
      };
  
      let layout = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
  
      
      final_graph = [bar_graph]
      
      //plotting the graphs in there respective places
      Plotly.newPlot("bar", final_graph, layout);
      
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