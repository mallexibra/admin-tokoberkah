import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const data = await prisma.kategori.findMany({
      select: {
        id: true,
        nama: true,
        product: true,
      },
    });
    return NextResponse.json({ message: "GET Category", data });
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    await prisma.kategori.create({ data });
    return NextResponse.json({ message: "Add category item success!" });
  } catch (error) {
    console.log(error.message);
  }
};
