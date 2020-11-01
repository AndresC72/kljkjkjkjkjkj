import { types } from '../types/types';

/* 
string
{
    udi: 'dlksajdlaksjd2132313',
    name: 'Andy'
}
 */

 

export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
           return {
               uid: action.payload.uid,
               name: action.payload.displayName
           }

           case types.logout:
            return { }
    
        default:
            return state;
    }

}