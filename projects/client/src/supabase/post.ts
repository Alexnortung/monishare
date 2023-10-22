import { IMonishareClientPost } from 'types/client/post';
import { SupabaseClientMonishare } from './types/supabase-client';
import { IMonisharePost } from '../../types/entities/post';

type Dependencies = {
    supabase: SupabaseClientMonishare;
};

export class MonishareSupabaseClientPost implements IMonishareClientPost {
    private supabase: SupabaseClientMonishare;

    constructor(dependencies: Dependencies) {
        this.supabase = dependencies.supabase;
    }

    public async findByUser() {
        const response = await this.supabase.from('posts').select(`
            id,
            created_at,
            message,
            amount,
            created_by,
            posts_debitors (
                user_id,
                amount,
                fixed
            ),
            posts_expositors (
                user_id,
                amount,
                fixed
            )`);

        if (response.error) {
            throw response.error;
        }

        const formatted = response.data.map((post) => {
            const totalDebitorsShare = post.posts_debitors.reduce(
                (acc, debitor) => (debitor.fixed ? acc : acc + debitor.amount),
                0
            );
            const totalDebitorsFixed = post.posts_debitors.reduce(
                (acc, debitor) => (debitor.fixed ? acc + debitor.amount : acc),
                0
            );
            const debitorsShareAmount = (post.amount ?? 0) - totalDebitorsFixed;

            const totalExpositorsShare = post.posts_expositors.reduce(
                (acc, expostor) =>
                    expostor.fixed ? acc : acc + expostor.amount,
                0
            );
            const totalExpositorsFixed = post.posts_expositors.reduce(
                (acc, expostor) =>
                    expostor.fixed ? acc + expostor.amount : acc,
                0
            );
            const expositorShareAmount =
                (post.amount ?? 0) - totalExpositorsFixed;

            return {
                id: post.id,
                amount: post.amount,
                createdAt: new Date(post.created_at),
                debitors: post.posts_debitors.map((debitor) =>
                    debitor.fixed
                        ? {
                              userId: debitor.user_id,
                              fixed: true,
                              amountFixed: debitor.amount,
                          }
                        : {
                              userId: debitor.user_id,
                              fixed: false,
                              amountShare: debitor.amount,
                              amountFixed:
                                  debitorsShareAmount *
                                  (debitor.amount / totalDebitorsShare),
                          }
                ),
                expositors: post.posts_expositors.map((expositor) =>
                    expositor.fixed
                        ? {
                              userId: expositor.user_id,
                              fixed: true,
                              amountFixed: expositor.amount,
                          }
                        : {
                              userId: expositor.user_id,
                              fixed: false,
                              amountShare: expositor.amount,
                              amountFixed:
                                  expositorShareAmount *
                                  (expositor.amount / totalExpositorsShare),
                          }
                ),
                createdBy: post.created_by,
            } satisfies IMonisharePost;
        });

        return {
            data: formatted,
        };
    }

    public async create(post: Parameters<IMonishareClientPost['create']>[0]) {
        const response = await this.supabase
            .from('posts')
            .insert(post)
            .select('id');

        if (response.error) {
            throw response.error;
        }

        return {
            data: response.data[0].id,
        };
    }
}
