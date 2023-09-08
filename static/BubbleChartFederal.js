// <block:setup:1>
const data = {
  datasets: [{
    label: 'Federal Votes 2016 Election',
    data: [{
      x: 62984825,
      y: 65853516,
      r: 4489221
    }, {
      x: 1429596,
      y: 510002,
      r: 186545
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  }]
};
// </block:setup>

// <block:config:0>
const config = {
  type: 'bubble',
  data: data,
  options: {}
};
// </block:config>

module.exports = {
  actions: [],
  config: config,
};