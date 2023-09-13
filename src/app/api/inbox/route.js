import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Inbox from "@/models/Inbox";

export const GET = async (request) => {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  try {
    await connect();

    const posts = await Inbox.find(email && { email });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Inbox(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Inbox has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
