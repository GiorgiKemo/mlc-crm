export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          role: string | null;
          phone: string | null;
          private_mode_enabled: boolean | null;
          created_at: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & {
          id: string;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
      };
      clients: {
        Row: {
          id: string;
          name: string;
          primary_email: string | null;
          primary_phone: string | null;
          address: string | null;
          metadata: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["clients"]["Row"]> & {
          id: string;
          name: string;
        };
        Update: Partial<Database["public"]["Tables"]["clients"]["Row"]>;
      };
      projects: {
        Row: {
          id: string;
          client_id: string;
          title: string;
          status: string | null;
          scheduled_for: string | null;
          assigned_profile_ids: string[] | null;
          estimate_id: string | null;
          metadata: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["projects"]["Row"]> & {
          id: string;
          client_id: string;
          title: string;
        };
        Update: Partial<Database["public"]["Tables"]["projects"]["Row"]>;
      };
      timeline_events: {
        Row: {
          id: string;
          project_id: string;
          event_type: string;
          title: string;
          description: string | null;
          source_ref: string | null;
          occurred_at: string;
          needs_review: boolean | null;
          metadata: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["timeline_events"]["Row"]> & {
          id: string;
          project_id: string;
          event_type: string;
          title: string;
          occurred_at: string;
        };
        Update: Partial<Database["public"]["Tables"]["timeline_events"]["Row"]>;
      };
      site_visit_assets: {
        Row: {
          id: string;
          project_id: string;
          asset_type: string;
          storage_path: string | null;
          transcript: string | null;
          exif_taken_at: string | null;
          gps: Json | null;
          ocr_text: string | null;
          metadata: Json | null;
        };
        Insert: Partial<Database["public"]["Tables"]["site_visit_assets"]["Row"]> & {
          id: string;
          project_id: string;
          asset_type: string;
        };
        Update: Partial<Database["public"]["Tables"]["site_visit_assets"]["Row"]>;
      };
      estimates: {
        Row: {
          id: string;
          project_id: string;
          total: number;
          gross_profit: number | null;
          margin_percent: number | null;
          snapshot: Json | null;
          created_at: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["estimates"]["Row"]> & {
          id: string;
          project_id: string;
          total: number;
        };
        Update: Partial<Database["public"]["Tables"]["estimates"]["Row"]>;
      };
      generated_documents: {
        Row: {
          id: string;
          estimate_id: string;
          document_type: string;
          storage_path: string | null;
          generated_at: string | null;
          metadata: Json | null;
        };
        Insert: Partial<
          Database["public"]["Tables"]["generated_documents"]["Row"]
        > & {
          id: string;
          estimate_id: string;
          document_type: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["generated_documents"]["Row"]
        >;
      };
    };
  };
};
