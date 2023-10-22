import { Id } from '../id';

type PostSharer = {
    userId: Id;
} & (
    | {
          fixed: true;
          amountFixed: number;
      }
    | {
          fixed: false;
          amountShare: number;
          amountFixed: number;
      }
);

export interface IMonisharePost {
    id: Id;
    createdAt: Date;
    /**
     * The id of the user who created this post.
     */
    createdBy: Id | null;
    /**
     * The amount of money that was put out in total
     */
    amount?: number | null;
    /**
     * The users that put out money and how much
     */
    expositors: PostSharer[];
    /**
     * The users that have to pay back money and how much
     */
    debitors: PostSharer[];
}
