import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req, params) => {
  try {
    const id = Number(params.params.id);
    const data = await prisma.users.findUnique({
      where: { id },
    });
    return NextResponse.json(
      { message: "Get Users by Id", data },
      { status: 200 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const PATCH = async (req, params) => {
  try {
    const id = Number(params.params.id);
    const data = req.body;
    await prisma.users.update({
      where: id,
      data,
    });
    return NextResponse.json(
      { message: "Update users by Id" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const DELETE = async (req, params) => {
  try {
    const id = Number(params.params.id);
    await prisma.users.delete({
      where: { id },
    });
    return NextResponse.json(
      { message: "Delete Users by Id" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error.message);
  }
};
