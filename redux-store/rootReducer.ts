import {combineReducers, createStore} from "redux";
import AuthReducer from "./auth/reducer";
import ChatReducer from "./chat/reducer";

type RootReducerType = typeof rootReducer;
export type CombinedStateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({
    AuthReducer,
    ChatReducer,
});


//explanation
// type actionsType = ReturnType<SomeType<typeof actions>>;
// type SomeType<T extends {[key: string]: (...args: any[]) => any}> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never

export const store = createStore(rootReducer);

if (process.browser) {
    // @ts-ignore
    window.store = store;
}
