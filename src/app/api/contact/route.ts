import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Yahan hum aage chalkar database mein save karenge ya email bhejenge
    console.log("Contact Form Data:", body);

    return NextResponse.json({ message: "Message received successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}