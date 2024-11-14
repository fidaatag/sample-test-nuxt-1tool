export interface Auth_User {
    id: number;
    api_token: string;
    tenant_identifier: string;
    // for error
    message?: string;
    errors: {
        email: [string];
    };
    accessToken?: string;
}