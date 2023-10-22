import { IMonishareClientAuth } from './auth';

export interface IMonishareClient<LoginData = any> {
    auth: IMonishareClientAuth<LoginData>;
}
