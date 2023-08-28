"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useRef, useState } from "react";

const TambahPengeluaran = () => {
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };
  return (
    <div>
      <Button onClick={handleModal} color="bg-red">
        Tambah Pengeluaran
      </Button>
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
          <h5 className="font-bold text-xl">Tambah Pengeluaran</h5>
          <LabelForm
            name={"Nama pengeluaran"}
            type={"text"}
            placeholder={"Nama pengeluaran anda..."}
          />
          <LabelForm
            name={"Jumlah pengeluaran"}
            type={"text"}
            placeholder={"Nama pengeluaran anda..."}
          />
          <Button type={"submit"}>Tambah Pengeluaran</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahPengeluaran;
