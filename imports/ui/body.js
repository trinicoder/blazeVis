import {Template} from 'meteor/templating';
import vis from 'vis';


import Population from '../api/population.js';

import './body.html';
import './item.js';
Template.body.helpers({ 
  testdata() {
    let query= Population.findOne({_id:'cbHEDQG6gWehDsBc9'});
    if (query){
      console.log(query.GUY18[0]);
      return query.GUY18[0].total;
    }
    return "none";
    
  }
}); 

Template.body.events({ 
'click .graph'(event){
  var items = [
    {x: '2014-06-11', y: 10},
    {x: '2014-06-12', y: 25},
    {x: '2014-06-13', y: 30},
    {x: '2014-06-14', y: 10},
    {x: '2014-06-15', y: 15},
    {x: '2014-06-16', y: 30}
  ];

  var dataset = new vis.DataSet(items);
  var options = {
    start: '2014-06-10',
    end: '2014-06-18'
  };
  //var graph2d = new vis.Graph2d(container, dataset, options);
  $("#visjs").empty();
  var container = document.getElementById('visjs');
  var visjsobj = new vis.Graph2d(container, items, options);
  visjsobj.fit();
}
}); 
