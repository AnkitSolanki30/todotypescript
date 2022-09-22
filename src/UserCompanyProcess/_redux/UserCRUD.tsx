import instance from "../../APICalls";
import { addUserOfCompanyData } from "../UserInterface/UserInterface"

const USER_OF_COMPANY_API_URL = "/api/user"
const ACTIVATE = "/active"
const DEACTIVATE = "/deactive"
const RESEND = "/resend"

/*** ADD NEW USER OF COMPANY ***/

export function addUserOfCompany (data: addUserOfCompanyData) {
    return instance.post(window.$BASE_URL + USER_OF_COMPANY_API_URL, data)
}

/*** GET ALL USER OF COMPANY ***/

export function fetchUserOfCompany (url: string) {
    return instance.get(window.$BASE_URL + USER_OF_COMPANY_API_URL + url)
}

/*** GET SINGLE USER OF COMPANY BY ID ***/

export function fetchSingleUserOfCompany (id: string) {
    return instance.get(`${window.$BASE_URL}${USER_OF_COMPANY_API_URL}/${id}`)
}

/*** UPDATE USER OF COMPANY BY ID ***/

export function updateUserOfCompany (id: string, data: addUserOfCompanyData) {
    return instance.put(`${window.$BASE_URL}${USER_OF_COMPANY_API_URL}/${id}`, data)
}

/*** SEND INVITATION TO USER OF COMPANY BT ID ***/

export function resendInviationForUserOfCompany (id: string) {
    return instance.get(`${window.$BASE_URL}${RESEND}/${id}`)
}

/*** USER OF COMPANY ACTIVATED BY ID ***/

export function activeUserOfCompany (id: string) {
    return instance.put(`${window.$BASE_URL}${ACTIVATE}/${id}`)
}

/*** USER OF COMPANY DEACTIVATED BY ID ***/

export function deactiveUserOfCompany (id: string) {
    return instance.put(`${window.$BASE_URL}${DEACTIVATE}/${id}`)
}

/***  DELETE USER OF COMPANY BY ID ***/

export function deleteUserOfCompany (id: string) {
    return instance.delete(`${window.$BASE_URL}${USER_OF_COMPANY_API_URL}/${id}`)
}