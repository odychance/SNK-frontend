import { AUTHENTICATE_ADMIN, NEW_ADMIN } from "./Mutation/MutationAdmins";
import { AUTHENTICATE_USER, NEW_USER  } from "./Mutation/MutationUsers";
import { NEW_CHARACTER, DELETE_CHARACTER, UPDATE_CHARACTER } from "./Mutation/MutationCharacters"
import { NEW_TITAN, DELETE_TITAN, UPDATE_TITAN } from "./Mutation/MutationTitans";
import { NEW_MILITARY_DIVISION, DELETE_MILITARY_DIVISION, UPDATE_MILITARY_DIVISION } from "./Mutation/MutationMilitaryDivisions";

import { GET_USER } from "./Query/QueryUsers";
import { GET_ADMIN } from "./Query/QueryAdmins";
import { GET_BACK_OFS } from "./Query/QueryBackOfs";
import { GET_CHARACTERS } from './Query/QueryCharacters'
import { GET_TITANS } from './Query/QueryTitans'
import { GET_MILITARY_DIVISIONS } from "./Query/QueryMilitaryDivisions";


export const ApolloMutations = {
    // ADMIN
    AUTHENTICATE_ADMIN,
    NEW_ADMIN,

    // USER
    AUTHENTICATE_USER,
    NEW_USER,

    // CHARACTER
    NEW_CHARACTER,
    UPDATE_CHARACTER,
    DELETE_CHARACTER,

    // TITAN
    NEW_TITAN,
    DELETE_TITAN,
    UPDATE_TITAN,

    // MILITARY DIVISIONS
    NEW_MILITARY_DIVISION,
    DELETE_MILITARY_DIVISION,
    UPDATE_MILITARY_DIVISION,
    
}

export const ApolloQuerys = {
    // ADMIN 
    GET_ADMIN,

    // USER
    GET_USER,

    //BACK_OFS
    GET_BACK_OFS,

    // CHARACTER
    GET_CHARACTERS,

    // TITANS
    GET_TITANS,

    //MILITARY DIVISIONS
    GET_MILITARY_DIVISIONS,

}