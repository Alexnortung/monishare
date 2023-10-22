import { IMonishareClientAuth } from './auth';
import { IMonishareClientPost } from './post';

export interface IMonishareClient<LoginData = any> {
    readonly auth: IMonishareClientAuth<LoginData>;
    readonly post: IMonishareClientPost;
}
