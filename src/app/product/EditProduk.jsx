"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import axios from "axios";

const EditProduk = ({ product, method }) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useAnimate();
  const [nama, setNama] = useState(product.nama);
  const [stok, setStok] = useState(product.stok);
  const [harga, setHarga] = useState(product.harga);
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };

  const handleEdit = async () => {
    const data = { nama, stok, harga };
    console.log(data);
    await axios.patch(`/api/v1/product/${product.id}`, data, {
      headers: "application/json",
    });
    setModal(false);
    method();
    alert("Data produk telah diubah!");
  };

  useEffect(() => {
    if (modal) {
      setAnimation(animation.current, { scale: 1, opacity: 1 });
      console.log(animation.current);
    } else {
      setAnimation(animation.current, { opacity: 0, scale: 0 });
      console.log(animation.current);
    }
  }, [modal]);

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
        className="fixed opacity-0 z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
      >
        <form
          ref={formRef}
          onSubmit={handleEdit}
          className="bg-second text-left relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
        >
          <h5 className="font-bold text-xl">Edit Produk</h5>
          <LabelForm
            name={"Nama produk"}
            type={"text"}
            change={(e) => setNama(e.target.value)}
            value={nama}
            placeholder={"Nama produk anda..."}
          />
          <LabelForm
            name={"Stok produk"}
            type={"text"}
            change={(e) => setStok(e.target.value)}
            value={stok}
            placeholder={"Stok produk anda..."}
          />
          <LabelForm
            name={"Harga produk"}
            type={"number"}
            change={(e) => setHarga(e.target.value)}
            value={harga}
            placeholder={"Harga produk anda..."}
          />
          <Button type={"submit"}>Edit Produk</Button>
        </form>
      </div>
    </div>
  );
};

export default EditProduk;
