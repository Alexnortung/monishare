import { IMonishareClientAuth } from 'types/client/auth';
import { IMonishareClient } from '../../types/client/client';
import { MonishareSupabaseClientAuth } from './auth';
import { SupabaseClientMonishare } from './types/supabase-client';

export class MonishareSupabaseClient implements IMonishareClient {
    public readonly auth: IMonishareClientAuth;

    constructor(supabase: SupabaseClientMonishare) {
        const container = {
            supabase,
        };

        this.auth = new MonishareSupabaseClientAuth(container);
    }
}
