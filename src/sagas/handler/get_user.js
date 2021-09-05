import {call, put} from "redux-saga/effects";
import { set_user } from "../../features/footer/button/buttonSlice";
import {requestGetUser} from "../requests/get_user";

export function* handleGetUser(){
    try{
        const res = yield call(requestGetUser);
        const {data} = res;
        yield put(set_user(data));
    }catch(e){
        console.log(e);
    }
}