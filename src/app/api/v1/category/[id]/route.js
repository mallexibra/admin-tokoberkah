import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, params) => {
  const id = Number(params.params.id);

  const data = await prisma.kategori.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(
    { message: "Get category by Id", data },
    { status: 200 }
  );
};

export const PATCH = async (req, params) => {
  const id = Number(params.params.id);
  const data = await req.json();

  await prisma.kategori.update({
    where: {
      id,
    },
    data,
  });

  return NextResponse.json(
    { message: `Update API on id ${id}` },
    { status: 200 }
  );
};

export const DELETE = async (req, params) => {
  const id = Number(params.params.id);

  await prisma.kategori.delete({
    where: { id },
  });

  return NextResponse.json(
    { message: "Delete category by Id" },
    { status: 200 }
  );
};
