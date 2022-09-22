export interface userOfCompany {
    totalRecordsForUserOfCompany: number;
    totalPagesForUserOfCompany: number;
    userofCompanyEntities: Array<userOfCompanyData>;
    singleUserOfCompany: Array<userOfCompanyData>;
  }

export interface userOfCompanyData {
    id: string;
    status: string;
    firstName: string;
    lastName: string;
    lastActive: string;
}

export interface addUserOfCompanyData {
    email: string;
    firstName: string;
    lastName: string;
}