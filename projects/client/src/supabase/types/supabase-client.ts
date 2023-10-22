import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from './db';

export type SupabaseClientMonishare = SupabaseClient<Database>;
