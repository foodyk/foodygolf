'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './teams.events';

var TeamsSchema = new mongoose.Schema({
  teamnumber: Number,
  teamname: String,
  handicap: Number,
  flight: String
});

registerEvents(TeamsSchema);
export default mongoose.model('Teams', TeamsSchema);
