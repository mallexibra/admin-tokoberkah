"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useRef, useState } from "react";

const EditProduk = () => {
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };
  return (
    <div>
      <Image
        onClick={handleModal}
        width={23}
        height={23}
        src="/edit.svg"
        alt="edit-icon"
        className="cursor-pointer"
      />
      <div
        className={`fixed ${
          !modal && "hidden"
        } z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50`}
        onClick={handleModal}
      >
        <form
          ref={formRef}
          className="bg-second text-left relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
        >
          <h5 className="font-bold text-xl">Edit Produk</h5>
          <LabelForm
            name={"Nama produk"}
            type={"text"}
            value={"Mackbook air"}
            placeholder={"Nama produk anda..."}
          />
          <LabelForm
            name={"Stok produk"}
            type={"text"}
            value={17}
            placeholder={"Stok produk anda..."}
          />
          <LabelForm
            name={"Harga produk"}
            type={"number"}
            value={120000}
            placeholder={"Harga produk anda..."}
          />
          <Button type={"submit"}>Edit Produk</Button>
        </form>
      </div>
    </div>
  );
};

export default EditProduk;
