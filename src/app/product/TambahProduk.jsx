"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import axios from "axios";

const TambahProduk = ({ method, category }) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useAnimate();
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };

  const handleAddProduct = async (e) => {
    const nama = e.target[0].value;
    const stok = Number(e.target[1].value);
    const harga = Number(e.target[2].value);
    const categoryy = Number(e.target[3].value);
    console.log({ nama, stok, harga, categoryy });
    const data = {
      nama,
      stok,
      harga,
      kategori: { connect: { id: categoryy } },
    };
    await axios.post("/api/v1/product", data, { headers: "application/json" });
    setModal(false);
    method();
    alert("Data product berhasil ditambahkan!");
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
      <Button onClick={handleModal} color="bg-primary">
        Tambah Produk
      </Button>
      <div
        className="fixed opacity-0 z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
      >
        <form
          ref={formRef}
          onSubmit={handleAddProduct}
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
            type={"number"}
            placeholder={"Stok produk anda..."}
          />
          <LabelForm
            name={"Harga produk"}
            type={"number"}
            placeholder={"Harga produk anda..."}
          />
          <label
            aria-label="LabelForm"
            className="flex flex-col gap-1"
            htmlFor={"category"}
          >
            <span className="font-medium">{"category"}</span>
            <select
              name="category"
              id="category"
              className="w-full border border-black rounded-md p-2 text-xs outline-none"
            >
              <option>Silahkan Pilih Kategori</option>
              {category.map((item) => (
                <option value={item.id}>{item.nama}</option>
              ))}
            </select>
          </label>
          <Button type={"submit"}>Tambah Produk</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahProduk;
