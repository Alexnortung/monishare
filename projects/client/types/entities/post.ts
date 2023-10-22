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
    id: string;
    createdAt: Date;
    /**
     * The id of the user who created this post.
     */
    createdBy: Id;
    /**
     * The amount of money that was put out in total
     */
    amount: number;
    /**
     * The users that put out money and how much
     */
    expositors: PostSharer[];
    /**
     * The users that have to pay back money and how much
     */
    debitors: PostSharer[];
}
