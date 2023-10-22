import { IMonishareClientAuth } from 'types/client/auth';
import { IMonishareClient } from '../../types/client/client';
import { MonishareSupabaseClientAuth } from './auth';
import { SupabaseClientMonishare } from './types/supabase-client';
import { IMonishareClientPost } from 'types/client/post';
import { MonishareSupabaseClientPost } from './post';

export class MonishareSupabaseClient implements IMonishareClient {
    public readonly auth: IMonishareClientAuth;
    public readonly post: IMonishareClientPost;

    constructor(supabase: SupabaseClientMonishare) {
        const container = {
            supabase,
        };

        this.auth = new MonishareSupabaseClientAuth(container);
        this.post = new MonishareSupabaseClientPost(container);
    }
}
