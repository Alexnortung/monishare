import { IMonishareClientAuth } from '../../types/client/auth';
import { SupabaseClientMonishare } from './types/supabase-client';

type Dependencies = {
    supabase: SupabaseClientMonishare;
};

export class MonishareSupabaseClientAuth implements IMonishareClientAuth {
    private supabase: SupabaseClientMonishare;

    constructor(dependencies: Dependencies) {
        this.supabase = dependencies.supabase;
    }

    public async login(email: string, password: string) {
        const response = await this.supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (response.error) {
            throw response.error;
        }
        return response.data.session;
    }

    public async logout() {
        await this.supabase.auth.signOut();
    }
}
