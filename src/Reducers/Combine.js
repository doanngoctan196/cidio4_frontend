var redux = require('redux'); // add thư viện redux
var StateApp = require('../Reducers/StateApp.js');
var StateInfoUser = require('../Reducers/StateInfoUser');
var StateCategory = require('../Reducers/StateCategory');
var StateInfoSystem = require('../Reducers/StateInfoSystem');

var reducer = redux.combineReducers({
    StateApp: StateApp,
    StateInfoUser: StateInfoUser,
    StateCategory: StateCategory,
    StateInfoSystem: StateInfoSystem
});

module.exports = reducer;