import {call, put} from "redux-saga/effects";
import { set_user } from "../../features/footer/button/buttonSlice";
import {requestGetUser} from "../requests/get_user";

export function* handleGetUser(){ console.log("jHHHHHHHHHHHHH");
    try{
        const res = yield call(requestGetUser);
        const {data} = res;
       console.log(data);
        yield put(set_user(data));
       // yield put({type: get_user.toString(), response: data});
    }catch(e){
        console.log(e);
    }
}