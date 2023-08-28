"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useRef, useState } from "react";

const TambahTeam = () => {
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };
  return (
    <div>
      <button
        onClick={handleModal}
        className="flex items-center gap-3 mt-7"
        type="submit"
      >
        <span className="w-8 h-8 font-bold text-second grid place-items-center bg-slate-800 rounded-full">
          <Image width={23} height={23} src="/plus.svg" alt="plus-icon" />
        </span>
        <p>Tambahkan team baru</p>
      </button>
      <div
        className={`fixed ${
          !modal && "hidden"
        } z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50`}
        onClick={handleModal}
      >
        <form
          ref={formRef}
          className="bg-second relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
        >
          <h5 className="font-bold text-xl">Tambah Team</h5>
          <LabelForm
            name={"Nama Lengkap"}
            type={"text"}
            placeholder={"Nama lengkap anda..."}
          />
          <LabelForm
            name={"Username"}
            type={"text"}
            placeholder={"Username anda..."}
          />
          <LabelForm
            name={"Password"}
            type={"password"}
            placeholder={"Password anda..."}
          />
          <LabelForm
            name={"Konfirmasi Password"}
            type={"password"}
            placeholder={"Konfirmasi password anda..."}
          />
          <Button type={"submit"}>Tambah Team</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahTeam;
