import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const data = await prisma.kategori.findMany({
    select: {
      id: true,
      nama: true,
      product: true,
    },
  });
  return NextResponse.json({ message: "GET Category", data });
};
