import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
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
};
