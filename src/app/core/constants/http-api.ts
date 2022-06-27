import {environment} from "../../../environments/environment";

const baseUrl = environment.endpoint
export const HttpApi = {
    test: `${baseUrl}/test`,
    register: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    logout: `${baseUrl}/logout`,
    menus: `${baseUrl}/menus`,
    permissions: `${baseUrl}/permissions`,
    roles: `${baseUrl}/roles`
};
