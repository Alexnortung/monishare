import { IMonisharePost } from '../entities/post';
import { IMonishareResponse } from '../response';

export interface IMonishareClientPost {
    // findOne: (id: string) => Promise<IMonishareResponse<IMonisharePost>>;
    /**
     * @alpha
     */
    // findByGroup: (
    //     groupId: string
    // ) => Promise<IMonishareResponse<IMonisharePost[]>>;
    /**
     * @alpha
     */
    findByUser: () => Promise<IMonishareResponse<IMonisharePost[]>>;
}
