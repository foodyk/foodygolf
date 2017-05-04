'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './bet.events';

var BetSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(BetSchema);
export default mongoose.model('Bet', BetSchema);
