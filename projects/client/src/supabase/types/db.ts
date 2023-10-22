export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];
export interface Database {
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                    extensions?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            group_members: {
                Row: {
                    group_id: number;
                    is_owner: boolean;
                    user_id: string;
                };
                Insert: {
                    group_id: number;
                    is_owner?: boolean;
                    user_id: string;
                };
                Update: {
                    group_id?: number;
                    is_owner?: boolean;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'group_members_group_id_fkey';
                        columns: ['group_id'];
                        referencedRelation: 'groups';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'group_members_user_id_fkey';
                        columns: ['user_id'];
                        referencedRelation: 'profiles';
                        referencedColumns: ['id'];
                    }
                ];
            };
            groups: {
                Row: {
                    created_at: string | null;
                    id: number;
                };
                Insert: {
                    created_at?: string | null;
                    id?: number;
                };
                Update: {
                    created_at?: string | null;
                    id?: number;
                };
                Relationships: [];
            };
            posts: {
                Row: {
                    amount: number | null;
                    created_at: string;
                    created_by: string | null;
                    id: number;
                    message: string | null;
                };
                Insert: {
                    amount?: number | null;
                    created_at?: string;
                    created_by?: string | null;
                    id?: number;
                    message?: string | null;
                };
                Update: {
                    amount?: number | null;
                    created_at?: string;
                    created_by?: string | null;
                    id?: number;
                    message?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'posts_created_by_fkey';
                        columns: ['created_by'];
                        referencedRelation: 'profiles';
                        referencedColumns: ['id'];
                    }
                ];
            };
            posts_debitors: {
                Row: {
                    amount: number;
                    fixed: boolean;
                    post_id: number;
                    user_id: string;
                };
                Insert: {
                    amount?: number;
                    fixed: boolean;
                    post_id: number;
                    user_id: string;
                };
                Update: {
                    amount?: number;
                    fixed?: boolean;
                    post_id?: number;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'posts_debitors_post_id_fkey';
                        columns: ['post_id'];
                        referencedRelation: 'posts';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'posts_debitors_user_id_fkey';
                        columns: ['user_id'];
                        referencedRelation: 'profiles';
                        referencedColumns: ['id'];
                    }
                ];
            };
            posts_expositors: {
                Row: {
                    amount: number;
                    fixed: boolean;
                    post_id: number;
                    user_id: string;
                };
                Insert: {
                    amount?: number;
                    fixed?: boolean;
                    post_id: number;
                    user_id: string;
                };
                Update: {
                    amount?: number;
                    fixed?: boolean;
                    post_id?: number;
                    user_id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'posts_expositors_post_id_fkey';
                        columns: ['post_id'];
                        referencedRelation: 'posts';
                        referencedColumns: ['id'];
                    },
                    {
                        foreignKeyName: 'posts_expositors_user_id_fkey';
                        columns: ['user_id'];
                        referencedRelation: 'profiles';
                        referencedColumns: ['id'];
                    }
                ];
            };
            profiles: {
                Row: {
                    created_at: string | null;
                    id: string;
                };
                Insert: {
                    created_at?: string | null;
                    id: string;
                };
                Update: {
                    created_at?: string | null;
                    id?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: 'profiles_id_fkey';
                        columns: ['id'];
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    storage: {
        Tables: {
            buckets: {
                Row: {
                    allowed_mime_types: string[] | null;
                    avif_autodetection: boolean | null;
                    created_at: string | null;
                    file_size_limit: number | null;
                    id: string;
                    name: string;
                    owner: string | null;
                    public: boolean | null;
                    updated_at: string | null;
                };
                Insert: {
                    allowed_mime_types?: string[] | null;
                    avif_autodetection?: boolean | null;
                    created_at?: string | null;
                    file_size_limit?: number | null;
                    id: string;
                    name: string;
                    owner?: string | null;
                    public?: boolean | null;
                    updated_at?: string | null;
                };
                Update: {
                    allowed_mime_types?: string[] | null;
                    avif_autodetection?: boolean | null;
                    created_at?: string | null;
                    file_size_limit?: number | null;
                    id?: string;
                    name?: string;
                    owner?: string | null;
                    public?: boolean | null;
                    updated_at?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'buckets_owner_fkey';
                        columns: ['owner'];
                        referencedRelation: 'users';
                        referencedColumns: ['id'];
                    }
                ];
            };
            migrations: {
                Row: {
                    executed_at: string | null;
                    hash: string;
                    id: number;
                    name: string;
                };
                Insert: {
                    executed_at?: string | null;
                    hash: string;
                    id: number;
                    name: string;
                };
                Update: {
                    executed_at?: string | null;
                    hash?: string;
                    id?: number;
                    name?: string;
                };
                Relationships: [];
            };
            objects: {
                Row: {
                    bucket_id: string | null;
                    created_at: string | null;
                    id: string;
                    last_accessed_at: string | null;
                    metadata: Json | null;
                    name: string | null;
                    owner: string | null;
                    path_tokens: string[] | null;
                    updated_at: string | null;
                    version: string | null;
                };
                Insert: {
                    bucket_id?: string | null;
                    created_at?: string | null;
                    id?: string;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    name?: string | null;
                    owner?: string | null;
                    path_tokens?: string[] | null;
                    updated_at?: string | null;
                    version?: string | null;
                };
                Update: {
                    bucket_id?: string | null;
                    created_at?: string | null;
                    id?: string;
                    last_accessed_at?: string | null;
                    metadata?: Json | null;
                    name?: string | null;
                    owner?: string | null;
                    path_tokens?: string[] | null;
                    updated_at?: string | null;
                    version?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: 'objects_bucketId_fkey';
                        columns: ['bucket_id'];
                        referencedRelation: 'buckets';
                        referencedColumns: ['id'];
                    }
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            can_insert_object: {
                Args: {
                    bucketid: string;
                    name: string;
                    owner: string;
                    metadata: Json;
                };
                Returns: undefined;
            };
            extension: {
                Args: {
                    name: string;
                };
                Returns: string;
            };
            filename: {
                Args: {
                    name: string;
                };
                Returns: string;
            };
            foldername: {
                Args: {
                    name: string;
                };
                Returns: unknown;
            };
            get_size_by_bucket: {
                Args: Record<PropertyKey, never>;
                Returns: {
                    size: number;
                    bucket_id: string;
                }[];
            };
            search: {
                Args: {
                    prefix: string;
                    bucketname: string;
                    limits?: number;
                    levels?: number;
                    offsets?: number;
                    search?: string;
                    sortcolumn?: string;
                    sortorder?: string;
                };
                Returns: {
                    name: string;
                    id: string;
                    updated_at: string;
                    created_at: string;
                    last_accessed_at: string;
                    metadata: Json;
                }[];
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
