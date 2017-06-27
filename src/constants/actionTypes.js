"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = keyMirror({
    INITIALIZE: null,
    DELETE_AUTHOR: null,
    UPDATE_AUTHOR: null,
    CREATE_AUTHOR: null,    //keyMirror coppies CREATE_AUTHOR into null (shortcut)
    DELETE_COURSE: null,
    UPDATE_COURSE: null,
    CREATE_COURSE: null 
});