import {combineReducers} from 'redux';
import covidReducer from './covid-reducer';

export default combineReducers(
    {
        covid: covidReducer
    }
)