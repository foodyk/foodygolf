/**
 * Tourneysetup model events
 */

'use strict';

import {EventEmitter} from 'events';
var TourneysetupEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TourneysetupEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Tourneysetup) {
  for(var e in events) {
    let event = events[e];
    Tourneysetup.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    TourneysetupEvents.emit(event + ':' + doc._id, doc);
    TourneysetupEvents.emit(event, doc);
  };
}

export {registerEvents};
export default TourneysetupEvents;
