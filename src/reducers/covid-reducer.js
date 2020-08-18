import { allDetails, allCountries, specificCountry, sortedData } from '../actions/types';

const INITIAl_STATE=
{
    allData: [],
    allCountries: [],
    sorted: []
}

export default (state=INITIAl_STATE, action) => {
    switch(action.type) {
        case allDetails:
            return{...state, allData: action.payload};
        case allCountries:
            return{...state, allCountries: action.payload};
        case specificCountry:
            let {allCountries} = state;
            allCountries=[];
            allCountries.push(action.payload)
            return{...state, allCountries};
        case sortedData:
            let {sorted} = state;
            sorted=[];
            sorted.push(...action.payload)
            return{...state, allCountries: sorted};
        default:
            return state;
    }
}