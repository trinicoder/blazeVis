import {Mongo} from 'meteor/mongo';
import './methods';

const Population = new Mongo.Collection('population');
export default Population;

if (Meteor.isServer) {
}
