import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const data = await prisma.keuangan.findMany();
    NextResponse.json(
      { message: "Get data money, Sucess!", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    await prisma.keuangan.create({ data });
    return NextResponse.json(
      { message: "Post data money, success!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
