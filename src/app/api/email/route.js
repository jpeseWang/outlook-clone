import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Email from "@/models/Email";

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  try {
    await connect();

    const posts = await Email.find(email && { email });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Email(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Email has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
