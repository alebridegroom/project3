
  
  let stateMarkers = [];

  for (let i = 0; i < states.length; i++) {
    // loop through the cities array, create a new marker, and push it to the cityMarkers array
    stateMarkers.push(
      L.marker(states[i].location).bindPopup("<h1>" + states[i].name + "</h1>")
    );
  }
  
  let stateLayer = L.layerGroup(stateMarkers);

  let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

let baseMaps = {
    Street: street
  };

let overlayMaps = {
    States: stateLayer
  };

let myMap = L.map("map", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [street, stateLayer]
  });

  L.control.layers(baseMaps, overlayMaps).addTo(myMap);
  
  
  