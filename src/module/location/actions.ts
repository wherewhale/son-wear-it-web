import {deprecated} from 'typesafe-actions';

const {createStandardAction} = deprecated;

export const SET_LOCATION = "location/SET_LOCATION";

export const setLocation = createStandardAction(SET_LOCATION)<{
    location : string;
}>();