
let myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
}).addTo(myMap);

let arizona = L.polygon([[37.000263,-109.042503],[31.331629,-109.04798],[31.331629,-111.074448],[31.704061,-112.246513],[32.492741,-114.815198],[32.717295,-114.722095],[32.755634,-114.524921],[32.843265,-114.470151],[33.029481,-114.524921],[33.034958,-114.661844],[33.40739,-114.727567],[33.54979,-114.524921],[33.697668,-114.497536],[33.933176,-114.535874],[34.108438,-114.415382],[34.174162,-114.256551],[34.305608,-114.136058],[34.448009,-114.333228],[34.710902,-114.470151],[34.87521,-114.634459],[35.00118,-114.634459],[35.138103,-114.574213],[35.324319,-114.596121],[35.516012,-114.678275],[36.102045,-114.738521],[36.140383,-114.371566],[36.01989,-114.251074],[36.025367,-114.152489],[36.195153,-114.048427],[37.000263,-114.048427],[37.00574,-110.499369],[37.000263,-109.042503]
],
  {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.75
  }).addTo(myMap);
  
  arizona.bindPopup("Arizona: Rep Votes: 1,021,154, Dem Votes: 936,250, Electoral Votes: 11");

let florida = L.polygon([[30.997536,-85.497137],[31.003013,-85.004212],[30.712735,-84.867289],[30.647012,-83.498053],[30.570335,-82.216449],[30.356734,-82.167157],[30.362211,-82.046664],[30.564858,-82.002849],[30.751074,-82.041187],[30.827751,-81.948079],[30.745597,-81.718048],[30.707258,-81.444201],[30.27458,-81.383954],[29.787132,-81.257985],[29.14633,-80.967707],[28.461713,-80.524075],[28.41242,-80.589798],[28.094758,-80.56789],[27.738757,-80.381674],[27.021277,-80.091397],[26.796723,-80.03115],[26.566691,-80.036627],[25.739673,-80.146166],[25.723243,-80.239274],[25.465826,-80.337859],[25.383672,-80.304997],[25.197456,-80.49669],[25.241272,-80.573367],[25.164595,-80.759583],[25.120779,-81.077246],[25.224841,-81.170354],[25.378195,-81.126538],[25.821827,-81.351093],[25.903982,-81.526355],[25.843735,-81.679709],[26.090198,-81.800202],[26.292844,-81.833064],[26.517399,-82.041187],[26.665276,-82.09048],[26.878877,-82.057618],[26.917216,-82.172634],[26.791246,-82.145249],[26.758384,-82.249311],[27.300601,-82.566974],[27.437525,-82.692943],[27.837342,-82.391711],[27.815434,-82.588881],[27.689464,-82.720328],[27.886634,-82.851774],[28.434328,-82.676512],[28.888914,-82.643651],[28.998453,-82.764143],[29.14633,-82.802482],[29.179192,-82.994175],[29.420177,-83.218729],[29.518762,-83.399469],[29.66664,-83.410422],[29.721409,-83.536392],[29.885717,-83.640454],[30.104795,-84.02384],[30.055502,-84.357933],[29.902148,-84.341502],[29.929533,-84.451041],[29.743317,-84.867289],[29.699501,-85.310921],[29.80904,-85.299967],[29.940487,-85.404029],[30.236241,-85.924338],[30.362211,-86.29677],[30.395073,-86.630863],[30.373165,-86.910187],[30.280057,-87.518128],[30.427934,-87.37025],[30.510088,-87.446927],[30.674397,-87.408589],[30.86609,-87.633143],[30.997536,-87.600282],[30.997536,-85.497137]]
 , {
      color: "white",
      fillColor: "red",
      fillOpacity: 0.75
    }).addTo(myMap);
    florida.bindPopup("Florida: Rep Votes: 4,605,515, Dem Votes: 4,485,745, Electoral Votes: 29");

let georgia = L.polygon([[35.00118,-83.109191],[34.787579,-83.322791],[34.683517,-83.339222],[34.469916,-83.005129],[34.486347,-82.901067],[34.26727,-82.747713],[34.152254,-82.714851],[33.94413,-82.55602],[33.81816,-82.325988],[33.631944,-82.194542],[33.462159,-81.926172],[33.347144,-81.937125],[33.160928,-81.761863],[33.007573,-81.493493],[32.843265,-81.42777],[32.629664,-81.416816],[32.558464,-81.279893],[32.290094,-81.121061],[32.120309,-81.115584],[32.032678,-80.885553],[31.693108,-81.132015],[31.517845,-81.175831],[31.364491,-81.279893],[31.20566,-81.290846],[31.13446,-81.400385],[30.707258,-81.444201],[30.745597,-81.718048],[30.827751,-81.948079],[30.751074,-82.041187],[30.564858,-82.002849],[30.362211,-82.04666],[30.356734,-82.167157],[30.570335,-82.216449],[30.647012,-83.498053],[30.712735,-84.867289],[31.003013,-85.004212],[31.27686,-85.113751],[31.539753,-85.042551],[31.840985,-85.141136],[32.01077,-85.053504],[32.13674,-85.058981],[32.262709,-84.889196],[32.322956,-85.004212],[32.421541,-84.960397],[32.580372,-85.069935],[32.859696,-85.184951],[34.124869,-85.431413],[34.984749,-85.606675],[34.990226,-84.319594],[34.984749,-83.618546],[35.00118,-83.109191]]
,
  {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.75
    }).addTo(myMap);
    georgia.bindPopup("Georgia: Rep Votes: 2,068,623, Dem Votes: 1,837,300, Electoral Votes: 16");
    
  let iowa = L.polygon([[43.501391,-91.368417],[43.501391,-91.215062],[43.353514,-91.204109],[43.254929,-91.056231],[43.134436,-91.176724],[42.909881,-91.143862],[42.75105,-91.067185],[42.636034,-90.711184],[42.510065,-90.639984],[42.329326,-90.420906],[42.225264,-90.393521],[42.126679,-90.168967],[42.000709,-90.141582],[41.809016,-90.179921],[41.743293,-90.311367],[41.589939,-90.344229],[41.463969,-90.656414],[41.414677,-91.045277],[41.239415,-91.111001],[41.097014,-90.946692],[40.921752,-90.963123],[40.823167,-91.09457],[40.669813,-91.121954],[40.560274,-91.401278],[40.379535,-91.417709],[40.412397,-91.527248],[40.615043,-91.729895],[40.609566,-91.833957],[40.582182,-93.257961],[40.571228,-94.632673],[40.587659,-95.7664],[40.719105,-95.881416],[40.976521,-95.826646],[41.201076,-95.925231],[41.453015,-95.919754],[41.540646,-96.095016],[41.67757,-96.122401],[41.798063,-96.062155],[41.973325,-96.127878],[42.039048,-96.264801],[42.488157,-96.44554],[42.707235,-96.631756],[42.855112,-96.544125],[43.052282,-96.511264],[43.123482,-96.434587],[43.222067,-96.560556,],[43.397329,-96.527695],[43.479483,-96.582464],[43.501391,-96.451017],[43.501391,-91.368417]],
        {
          color: "white",
          fillColor: "red",
          fillOpacity: 0.75
          }).addTo(myMap);
    iowa.bindPopup("Iowa: Rep Votes: 798,923, Dem Votes: 650,790, Electoral Votes: 6");



let nevada = L.polygon([[42.000709,-117.027882],[41.995232,-114.04295],[37.000263,-114.048427],[36.195153,-114.048427],[36.025367,-114.152489],[36.01989,-114.251074],[36.140383,-114.371566],[36.102045,-114.738521],[35.516012,-114.678275],[35.324319,-114.596121],[35.138103,-114.574213],[35.00118,-114.634459],[35.970598,-115.85034],[36.501861,-116.540435],[37.21934,-117.498899],[38.101128,-118.71478],[38.999346,-120.001861],[40.264519,-119.996384],[41.995232,-120.001861],[41.989755,-118.698349],[42.000709,-117.027882]],
  {
    color: "white",
    fillColor: "blue",
    fillOpacity: 0.75
    }).addTo(myMap);
    nevada.bindPopup("Nevada: Rep Votes: 511,319, Dem Votes: 537,753, Electoral Votes: 6");

let colorado = L.polygon([[41.003906,-107.919731],[40.998429,-105.728954],[41.003906,-104.053011],[41.003906,-102.053927],[40.001626,-102.053927],[36.994786,-102.042974],[37.000263,-103.001438],[36.994786,-104.337812],[36.994786,-106.868158],[37.000263,-107.421329],[37.000263,-109.042503],[38.166851,-109.042503],[38.27639,-109.058934],[39.125316,-109.053457],[40.998429,-109.04798],[41.003906,-107.919731]],
      {
        color: "white",
        fillColor: "blue",
        fillOpacity: 0.75
        }).addTo(myMap);
        colorado.bindPopup("Colorado: Rep Votes: 1,136,354, Dem Votes: 1,208,095, Electoral Votes: 9");


   let new_Hampshire = L.polygon([[45.303304,-71.08183],[44.657025,-71.032537],[43.34256,-70.966814],[43.227544,-70.807983],[43.128959,-70.824413],[43.057759,-70.703921],[42.871543,-70.818936],[42.887974,-70.917521],[42.789389,-71.185891],[42.696281,-71.29543],[42.729142,-72.456542],[42.80582,-72.544173],[42.953697,-72.533219],[43.008466,-72.445588],[43.150867,-72.456542],[43.572591,-72.379864],[43.769761,-72.204602],[43.994316,-72.116971],[44.07647,-72.02934],[44.322932,-72.034817],[44.41604,-71.700724],[44.585825,-71.536416],[44.750133,-71.629524],[44.914442,-71.4926],[45.013027,-71.503554],[45.270443,-71.361154],[45.243058,-71.131122],[45.303304,-71.08183]],
          {
            color: "white",
            fillColor: "blue",
            fillOpacity: 0.75
            }).addTo(myMap);
            new_Hampshire.bindPopup("New Hampshire: Rep Votes: 345,789, Dem Votes: 348,521, Electoral Votes: 4");

let north_carolina = L.polygon([[36.562108,-80.978661],[36.545677,-80.294043],[36.5402,-79.510841],[36.551154,-75.868676],[36.151337,-75.75366],[36.189676,-76.032984],[36.140383,-76.071322],[36.080137,-76.410893],[36.025367,-76.460185],[36.008937,-76.68474],[35.937736,-76.673786],[35.987029,-76.399939],[35.943213,-76.3616],[35.992506,-76.060368],[35.899398,-75.961783],[35.937736,-75.781044],[35.696751,-75.715321],[35.581735,-75.775568],[35.570781,-75.89606],[35.324319,-76.147999],[35.313365,-76.482093],[35.14358,-76.536862],[34.973795,-76.394462],[34.940933,-76.279446],[34.661609,-76.493047],[34.694471,-76.673786],[34.667086,-76.991448],[34.60684,-77.210526],[34.415147,-77.555573],[34.163208,-77.82942],[33.845545,-77.971821],[33.916745,-78.179944],[33.851022,-78.541422],[34.80401,-79.675149],[34.820441,-80.797922],[34.935456,-80.781491],[35.105241,-80.934845],[35.044995,-81.038907],[35.149057,-81.044384],[35.198349,-82.276696],[35.160011,-82.550543],[35.066903,-82.764143],[35.00118,-83.109191],[34.984749,-83.618546],[34.990226,-84.319594],[35.225734,-84.29221],[35.247642,-84.09504],[35.41195,-84.018363],[35.559827,-83.7719],[35.565304,-83.498053],[35.718659,-83.251591],[35.773428,-82.994175],[35.997983,-82.775097],[36.063706,-82.638174],[35.965121,-82.610789],[36.156814,-82.216449],[36.118475,-82.03571],[36.304691,-81.909741],[36.353984,-81.723525],[36.589492,-81.679709],[36.562108,-80.978661]],
   {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.75
    }).addTo(myMap);
    north_carolina.bindPopup("North Carolina: Rep Votes: 2,339,603, Dem Votes: 2,162,074, Electoral Votes: 15");

    let ohio = L.polygon([[41.978802,-80.518598],[40.636951,-80.518598 ],[40.582182,-80.666475],[40.472643,-80.595275],[40.319289,-80.600752],[40.078303,-80.737675],[39.711348,-80.830783],[39.388209,-81.219646],[39.344393,-81.345616],[39.410117,-81.455155,],[39.267716,-81.57017],[39.273193,-81.685186],[39.0815,-81.811156],[38.966484,-81.783771],[38.873376,-81.887833],[39.026731,-82.03571],[38.785745,-82.221926],[38.632391,-82.172634],[38.577622,-82.293127],[38.446175,-82.331465],[38.424267,-82.594358],[38.561191,-82.731282],[38.588575,-82.846298],[38.758361,-82.890113],[38.725499,-83.032514],[38.626914,-83.142052],[38.703591,-83.519961],[38.632391,-83.678792],[38.769315,-83.903347],[38.807653,-84.215533],[38.895284,-84.231963],[39.103408,-84.43461],[39.103408,-84.817996],[40.500028,-84.801565],[41.694001,-84.807042],[41.732339,-83.454238],[41.595416,-83.065375],[41.513262,-82.933929],[41.589939,-82.835344],[41.431108,-82.616266],[41.381815,-82.479343],[41.513262,-82.013803],[41.485877,-81.739956],[41.672093,-81.444201],[41.852832,-81.011523],[41.978802,-80.518598],[41.978802,-80.518598]],
      {
       color: "white",
       fillColor: "red",
       fillOpacity: 0.75
       }).addTo(myMap);
       ohio.bindPopup("Ohio: Rep Votes: 2,771,984, Dem Votes: 2,317,001, Electoral Votes: 18");

let pennsylvania = L.polygon([[42.252649,-79.76278],[42.000709,-79.76278],[42.000709,-75.35932],[41.863786,-75.249781],[41.869263,-75.173104],[41.754247,-75.052611],[41.60637,-75.074519],[41.436584,-74.89378],[41.431108,-74.740426],[41.359907,-74.69661],[41.288707,-74.828057],[41.179168,-74.882826],[40.971045,-75.134765],[40.866983,-75.052611],[40.691721,-75.205966],[40.576705,-75.195012],[40.543843,-75.069042],[40.417874,-75.058088],[40.215227,-74.773287],[40.127596,-74.82258],[39.963288,-75.129289],[39.88661,-75.145719],[39.804456,-75.414089],[39.831841,-75.616736],[39.722302,-75.786521],[39.722302,-79.477979],[39.722302,-80.518598],[40.636951,-80.518598],[41.978802,-80.518598],[41.978802,-80.518598],[42.033571,-80.332382],[42.269079,-79.76278],[42.252649,-79.76278]],
        {
         color: "white",
         fillColor: "red",
         fillOpacity: 0.75
         }).addTo(myMap);
         pennsylvania.bindPopup("Pennsylvania: Rep Votes: 2,912,941, Dem Votes: 2,844,705, Electoral Votes: 20");

let wis = L.polygon([[46.568478,-90.415429],[46.508231,-90.229213],[46.338446,-90.119674],[46.135799,-89.09001],[45.987922,-88.662808],[46.020784,-88.531362],[45.922199,-88.10416],[45.796229,-87.989145],[45.675736,-87.781021],[45.500474,-87.791975],[45.363551,-87.885083],[45.341643,-87.649574],[45.199243,-87.742682],[45.095181,-87.589328],[44.974688,-87.627666],[44.95278,-87.819359],[44.722749,-87.983668],[44.563917,-88.043914],[44.536533,-87.928898],[44.640595,-87.775544],[44.837764,-87.611236],[44.914442,-87.403112],[45.166381,-87.238804],[45.22115,-87.03068],[45.089704,-87.047111],[44.969211,-87.189511],[44.552964,-87.468835],[44.322932,-87.545512],[44.158624,-87.540035],[44.103854,-87.644097],[43.8793,-87.737205],[43.687607,-87.704344],[43.561637,-87.791975],[43.249452,-87.912467],[43.00298,-87.885083],[42.783912,-87.76459],[42.493634,-87.802929],[42.493634,-88.788778],[42.510065,-90.639984],[42.636034,-90.711184],[42.75105,-91.067185],[42.909881,-91.143862],[43.134436,-91.176724],[43.254929,-91.056231],[43.353514,-91.204109],[43.501391,-91.215062],[43.616407,-91.269832],[43.775238,-91.242447],[43.994316,-91.43414],[44.032654,-91.592971],[44.202439,-91.877772],[44.333886,-91.927065],[44.443425,-92.233773],[44.552964,-92.337835],[44.569394,-92.545959],[44.750133,-92.808852],[45.117088,-92.737652],[45.286874,-92.75956],[45.440228,-92.644544],[45.566198,-92.770513],[45.577151,-92.885529],[45.719552,-92.869098],[45.933153,-92.639067],[46.015307,-92.354266],[46.075553,-92.29402],[46.667063,-92.29402],[46.749217,-92.091373],[46.705401,-92.014696],[46.694447,-91.790141],[46.864232,-91.09457],[46.95734,-90.837154],[46.88614,-90.749522],[46.754694,-90.886446],[46.584908,-90.55783],[46.568478,-90.415429]],
          {
           color: "white",
           fillColor: "red",
           fillOpacity: 0.75
           }).addTo(myMap);
           wis.bindPopup("Wisconsin: Rep Votes: 1,409,467, Dem Votes: 1,382,210, Electoral Votes: 10");
  
  