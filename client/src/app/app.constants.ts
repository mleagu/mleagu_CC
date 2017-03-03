import { OpaqueToken } from "@angular/core";

export let APP_CONSTANTS = new OpaqueToken("app.constants");

export interface IAppConstants {
    apiEndpoint: string;
}

export const AppConstants: IAppConstants = {
    apiEndpoint: "http://localhost:8000/api/"
};