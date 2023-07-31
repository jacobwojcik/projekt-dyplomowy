export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      category: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          name: string;
          updated_at: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          name?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      countries: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      product: {
        Row: {
          category_id: number;
          created_at: string;
          description: string | null;
          id: number;
          imageurl: string | null;
          name: string;
          price: number;
          quantity: number;
          updated_at: string;
        };
        Insert: {
          category_id: number;
          created_at?: string;
          description?: string | null;
          id?: number;
          imageurl?: string | null;
          name: string;
          price: number;
          quantity: number;
          updated_at?: string;
        };
        Update: {
          category_id?: number;
          created_at?: string;
          description?: string | null;
          id?: number;
          imageurl?: string | null;
          name?: string;
          price?: number;
          quantity?: number;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'product_category_id_fkey';
            columns: ['category_id'];
            referencedRelation: 'category';
            referencedColumns: ['id'];
          },
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
}
