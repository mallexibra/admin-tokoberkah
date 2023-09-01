import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, params) => {
  try {
    const data = await prisma.users.findMany();
    return NextResponse.json(
      {
        message: "Get all users",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req) => {
  try {
    const body = await req.json();
    await prisma.users.create({ data: { ...body, image: "", imageUrl: "" } });
    return NextResponse.json({ message: "Add new team!" });
  } catch (error) {
    console.log(error.message);
  }
};
