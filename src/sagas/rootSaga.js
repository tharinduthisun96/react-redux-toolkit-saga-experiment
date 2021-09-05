import { take, takeEvery, takeLatest } from "redux-saga/effects";
import { get_user } from "../features/footer/button/buttonSlice";
import {handleGetUser} from "./handler/get_user"


export default function* watcherSaga(){
    yield takeLatest(get_user.type, handleGetUser);
    console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
}