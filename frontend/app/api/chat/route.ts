import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/getSession";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const session = await getSession();

    // Save user message only if logged in
    if (session) {
      await prisma.message.create({
        data: {
          content: message,
          role: "USER",
          userId: session.user.id,
        },
      });
    }

    /*
      AI response will go here.
      For now we fake it.
    */

    const aiResponse = "This is an AI response";

    // Save AI response only if logged in
    if (session) {
      await prisma.message.create({
        data: {
          content: aiResponse,
          role: "AI",
          userId: session.user.id,
        },
      });
    }

    return NextResponse.json({
      message: aiResponse,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
