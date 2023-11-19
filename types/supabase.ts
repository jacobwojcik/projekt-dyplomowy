export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog_post: {
        Row: {
          created_at: string | null
          id: number
          imageUrl: string | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          imageUrl?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          imageUrl?: string | null
          title?: string | null
        }
        Relationships: []
      }
      category: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      product: {
        Row: {
          category_id: number
          created_at: string
          description: string | null
          id: number
          imageurl: string | null
          name: string
          price: number
          quantity: number
          updated_at: string
        }
        Insert: {
          category_id: number
          created_at?: string
          description?: string | null
          id?: number
          imageurl?: string | null
          name: string
          price: number
          quantity: number
          updated_at?: string
        }
        Update: {
          category_id?: number
          created_at?: string
          description?: string | null
          id?: number
          imageurl?: string | null
          name?: string
          price?: number
          quantity?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          }
        ]
      }
      todo: {
        Row: {
          category: Database["public"]["Enums"]["category_todo"]
          created_at: string
          dueDate: string | null
          id: number
          isDone: boolean | null
          name: string | null
        }
        Insert: {
          category?: Database["public"]["Enums"]["category_todo"]
          created_at?: string
          dueDate?: string | null
          id?: number
          isDone?: boolean | null
          name?: string | null
        }
        Update: {
          category?: Database["public"]["Enums"]["category_todo"]
          created_at?: string
          dueDate?: string | null
          id?: number
          isDone?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_category_product_summary: {
        Args: {
          selected_limit: number
        }
        Returns: {
          category_name: string
          total_products: number
          total_price: number
        }[]
      }
    }
    Enums: {
      category_todo: "Prywatne" | "Praca" | "Zdrowie" | "Podróże"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
