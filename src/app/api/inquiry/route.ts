import { NextResponse } from "next/server";

type InquiryPayload = {
  organization: string;
  industry: string;
  companySize: string;
  challenges: string[];
  timeline: string;
  expectation: string;
  contactName: string;
  phone: string;
  email: string;
};

function generateLeadId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `WKS-${timestamp}-${random}`;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<InquiryPayload>;

  if (!payload.contactName || !payload.email || !payload.organization) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  const leadId = generateLeadId();

  // In production this is where the lead would be persisted to the CRM
  // and trigger notifications to Sales, Marketing, Email, and WhatsApp.
  console.log("New Wikasatrian inquiry", { leadId, ...payload });

  return NextResponse.json({ leadId });
}
