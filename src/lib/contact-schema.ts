export const INQUIRY_TYPES = [
  "General Inquiry",
  "OEM & Bulk Orders",
  "Manufacturing Partnership",
  "Business Collaboration",
  "Other",
] as const;

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "inquiryType" | "message", string>>;
  values?: Record<string, string>;
};

export const initialContactState: ContactState = { status: "idle" };