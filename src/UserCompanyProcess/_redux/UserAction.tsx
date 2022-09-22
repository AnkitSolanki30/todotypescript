import * as UserCRUD from "./UserCRUD";
import { userOfCompanySlice } from "./UserSlice";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";
import { State } from "history";
import { addUserOfCompanyData } from "../UserInterface/UserInterface";

const { actions } = userOfCompanySlice;

/*** ADD NEW USER OF COMPANY API ***/

export const addNewUserOfCompany = (data: addUserOfCompanyData) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.addUserOfCompany(data);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}

/*** GET ALL USER OF COMPANY API ***/

export const fetchUserOfCompanyData = (url: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  return await UserCRUD.fetchUserOfCompany(url).then((response) => {
    console.log(response);
    const totalPagesForUserOfCompany: number = response.data?.meta?.totalPages;
    let userofCompanyEntities: Array<{
      id: string;
      status: string;
      firstName: string;
      lastName: string;
      lastActive: string;
    }> = response.data;
    if (response.data.data?.length > 0) {
      userofCompanyEntities = response.data?.data.map((e: any) => {
        if (e) {
          e["userOfCompanyId"] = e._id;
        }
        return e;
      });
      if (response.data.code === 200) {
        dispatch(actions.fetchUserOfCompanyDataSlice(userofCompanyEntities));
        dispatch(actions.fetchUserOfCompanyPagesSlice(totalPagesForUserOfCompany));
      } else {
        dispatch(actions.fetchOUserOfCompanyDataSlice(userofCompanyEntities));
      }
    }
  })
}

/*** GET SINGLE USER OF COMPANY BY ID API ***/

export const fetchSingleUserOfCompanyData = (id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  return await UserCRUD.fetchSingleUserOfCompany(id).then((response) => {
    console.log(response);
    let singleUserOfCompany: Array<{
      id: string;
      status: string;
      firstName: string;
      lastName: string;
      lastActive: string;
    }> = response.data.data;
    dispatch(actions.fetchSingleUserOfCompanySlice(singleUserOfCompany));
  })
}

/*** UPDATE USER OF COMPANY BY ID API ***/

export const updateUserOfCompanyData = (data: addUserOfCompanyData, id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.updateUserOfCompany(id, data);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}

/*** SEND INVITATION TO USER OF COMPANY BT ID API ***/

export const resendInviationForUserOfCompanyData = (id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.resendInviationForUserOfCompany(id);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}

/*** USER OF COMPANY ACTIVATED BY ID API ***/

export const activeUserOfCompanyData = (id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.activeUserOfCompany(id);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}

/*** USER OF COMPANY DEACTIVATED BY ID API ***/

export const deactiveUserOfCompanyData = (id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.deactiveUserOfCompany(id);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}

/*** DELETE USER OF COMPANY BY ID API ***/

export const deleteUserOfCompanyData = (id: string) => async (dispatch: ThunkDispatch<State, undefined, Action>) => {
  const response = await UserCRUD.deleteUserOfCompany(id);
  console.log(response);
  if (response.data.code === 200) {

  } else {

  }
}