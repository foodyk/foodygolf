'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './tourneysetup.events';

var TourneysetupSchema = new mongoose.Schema({
  name: String,
  startdate: Date,
  enddate: Date,
  numdays: Number,
  minbet: Number,
  maxbet: Number
});

registerEvents(TourneysetupSchema);
export default mongoose.model('Tourneysetup', TourneysetupSchema);
