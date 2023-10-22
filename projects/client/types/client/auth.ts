export interface IMonishareClientAuth<LoginData = any> {
    /**
     * It is the user's responsibility to store the session so that it can be reused
     */
    login: (identifier: string, password: string) => Promise<LoginData>;
    logout: () => Promise<void>;
}
