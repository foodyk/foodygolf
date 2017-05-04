/**
 * Bet model events
 */

'use strict';

import {EventEmitter} from 'events';
var BetEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BetEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Bet) {
  for(var e in events) {
    let event = events[e];
    Bet.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    BetEvents.emit(event + ':' + doc._id, doc);
    BetEvents.emit(event, doc);
  };
}

export {registerEvents};
export default BetEvents;
