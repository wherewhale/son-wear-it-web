import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

export type locationAction = ActionType<typeof actions>;

export type Location = {
    location : string;
    gu : string;
}