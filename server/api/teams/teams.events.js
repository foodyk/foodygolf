/**
 * Teams model events
 */

'use strict';

import {EventEmitter} from 'events';
var TeamsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TeamsEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Teams) {
  for(var e in events) {
    let event = events[e];
    Teams.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    TeamsEvents.emit(event + ':' + doc._id, doc);
    TeamsEvents.emit(event, doc);
  };
}

export {registerEvents};
export default TeamsEvents;
