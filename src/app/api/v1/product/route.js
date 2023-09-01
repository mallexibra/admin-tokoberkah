import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const data = await prisma.product.findMany({
      select: {
        id: true,
        nama: true,
        stok: true,
        harga: true,
        kategori: true,
      },
    });
    return NextResponse.json({ message: "GET Product", data });
  } catch (error) {
    console.log(error.message);
  }
};

export const POST = async (req) => {
  try {
    const data = await req.json();
    await prisma.product.create({ data });
    return NextResponse.json(
      { message: "Add product success!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
