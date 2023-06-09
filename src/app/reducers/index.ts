import { Action, ActionReducer, ActionReducerFactory, ActionReducerMap, combineReducers, compose } from '@ngrx/store';
import * as shoppingList from '../shopping-list/store/shopping-list.reducer';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    shoppingList: shoppingList.ShoppingListState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State, any> = {
    shoppingList: shoppingList.shoppingListReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>) {
    return function (state: State, action: any) {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const developmentReducerFactory: ActionReducerFactory<
    State,
    any
> = compose(logger, combineReducers);