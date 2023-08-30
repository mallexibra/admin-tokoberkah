import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, params) => {
  const id = Number(params.params.id);

  const data = await prisma.product.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      nama: true,
      stok: true,
      harga: true,
      kategori: true,
    },
  });

  return NextResponse.json(
    { message: "Get product by Id", data },
    { status: 200 }
  );
};

export const PATCH = async (req, params) => {
  const id = Number(params.params.id);
  const data = await req.json();

  await prisma.product.update({
    where: {
      id,
    },
    data,
  });

  return NextResponse.json(
    { message: `Update product where id ${id}` },
    { status: 200 }
  );
};

export const DELETE = async (req, params) => {
  const id = Number(params.params.id);

  await prisma.product.delete({
    where: { id },
  });

  return NextResponse.json(
    { message: "Delete product by Id" },
    { status: 200 }
  );
};
