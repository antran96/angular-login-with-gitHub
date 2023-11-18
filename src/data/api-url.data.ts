import { environment } from "src/environments/environment";

export class ApiUrl {
    constructor() {}
    
    private static readonly url: string = environment.apiUrl
    private static readonly oAuthUrl: string = environment.oAuth
    static readonly oauth: string = [ApiUrl.oAuthUrl, 'login/oauth/authorize'].join('/')
    static readonly login: string = [ApiUrl.oAuthUrl, 'login/oauth/access_token'].join('/')
    static readonly listRepo: string = [ApiUrl.url, 'user/repos'].join('/')
    static readonly listLanguages: string = [ApiUrl.url, 'languages'].join('/')
}