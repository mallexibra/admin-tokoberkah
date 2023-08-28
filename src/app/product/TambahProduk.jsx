"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import { useRef, useState } from "react";

const TambahProduk = () => {
  const [modal, setModal] = useState(false);
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };
  return (
    <div>
      <Button onClick={handleModal} color="bg-primary">
        Tambah Produk
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
          <h5 className="font-bold text-xl">Tambah Produk</h5>
          <LabelForm
            name={"Nama produk"}
            type={"text"}
            placeholder={"Nama produk anda..."}
          />
          <LabelForm
            name={"Stok produk"}
            type={"text"}
            placeholder={"Stok produk anda..."}
          />
          <LabelForm
            name={"Harga produk"}
            type={"number"}
            placeholder={"Harga produk anda..."}
          />
          <Button type={"submit"}>Tambah Produk</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahProduk;
