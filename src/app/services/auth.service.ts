export class AuthService {
    private iaAuthenticated = false;

    logIn() {
        this.iaAuthenticated = true;
    }
    logOut() {
        this.iaAuthenticated = false;
        window.localStorage.clear();
        window.sessionStorage.clear();
    }

    isLoginIn(): boolean {
        return  this.iaAuthenticated;
    }
}
