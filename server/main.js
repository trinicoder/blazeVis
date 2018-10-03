import { Meteor } from 'meteor/meteor';
import Population from '../imports/api/population.js';

Meteor.startup(() => {
  if (!Population.findOne()){
      console.log("no population data yet... creating from filesystem");
      // pull in the NPM package 'fs' which provides
      // file system functions
      var fs = require('fs');
      // get a list of files in the folder private/jsonfiles, which
      // ends up as assets/app/jsonfiles in the app once it is built
      var files = fs.readdirSync('./assets/app/jsonfiles/');
      // iterate the files, each of which should be a
      // JSON file containing song data.
      for (var i=0;i<files.length; i++){


           var filename = 'jsonfiles/'+files[i];
           // in case the file does not exist, put it in a try catch

           // in case the file does not exist, put it in a try catch
          // in case the file does not exist, put it in a try catch
      try {
          var population = JSON.parse(Assets.getText(filename));
          Population.insert(population, function(err,docsInserted){
                                                          console.log(docsInserted);
                                                          });



      }catch (e){
           console.log("error parsing file "+filename);}
}

  }//end if

});