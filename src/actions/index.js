import axios from 'axios';
import { allPatients, allCountriesUrl } from '../public/endpoints';
import { allDetails, allCountries, specificCountry, sortedData } from './types';

export function allDataAction() {
    return ((dispatch) => {
        return axios.get(allPatients)
        .then((res) => {
            console.log('allData', res.data)
            dispatch({
                type: allDetails,
                payload: res.data
            })
        })
    })
}

export function countriesData(specific) {
    return ((dispatch) => {
        if(specific) {
            console.log('input', specific)
            return axios.get(allCountriesUrl+'/'+specific)
            .then((res) => {
                dispatch({
                    type: specificCountry,
                    payload: res.data
                })
            })
        }
        else {
            return axios.get(allCountriesUrl)
            .then((res) => {
                dispatch({
                    type: allCountries,
                    payload: res.data
                })
            })
        }
    })
}

export function sorting(arr, name) {
    const country = arr;
    if(name==='cases'){
        const sorted = arr.sort(function(a,b){
            return a.cases - b.cases;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    else if(name==='deaths'){
        const sorted = arr.sort(function(a,b){
            return a.deaths - b.deaths;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    else if(name==='active') {
        const sorted = arr.sort(function(a,b){
            return a.active - b.active;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    else if(name==='critical') {
        const sorted = arr.sort(function(a,b){
            return a.critical - b.critical;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    else if(name==='recovered') {
        const sorted = arr.sort(function(a,b){
            return a.recovered - b.recovered;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    else if(name==='country') {
        const sorted = arr.sort(function(a,b){
            return a.country.localeCompare(b.country)
            //return a.country > b.country;
        })
        return {
            type: sortedData,
            payload: sorted
        }
    }
    
}