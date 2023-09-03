"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import axios from "axios";

const TambahPemasukan = ({ method }) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useAnimate();
  const formRef = useRef(null);
  const [product, setProduct] = useState([]);
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [idProduct, setIdProduct] = useState(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };

  const handleAddItem = async (e) => {
    const jenis = "pemasukan";
    await axios.post(
      "/api/v1/money",
      { nama, jumlah: Number(jumlah), jenis },
      { headers: "application/json" }
    );
    if (disabled) {
      let jumlah = 0;
      product.map((item) => {
        if (item.id == idProduct) {
          jumlah = item.stok - 1;
        }
      });
      await axios.patch(`/api/v1/product/${idProduct}`, { stok: jumlah });
    }
    e.target[0].value = "";
    e.target[1].value = "";
    setModal();
    alert("Data pemasukan berhasil ditambahkan!");
    method();
  };

  const getProduct = async () => {
    const data = (await axios.get("/api/v1/product")).data.data;
    setProduct(data);
  };

  const handleOption = async (e) => {
    const opsi = e.target.value;
    console.log(product);
    if (opsi != "opsi") {
      product.map((item) => {
        if (item.id == opsi) {
          setNama(item.nama);
          setJumlah(item.harga);
        }
      });
      setDisabled(true);
      setIdProduct(opsi);
    } else {
      setNama("");
      setJumlah("");
      setDisabled(false);
      setIdProduct(null);
    }
    console.log(e.target.value);
  };

  useEffect(() => {
    getProduct();
    if (modal) {
      setAnimation(animation.current, { scale: 1, opacity: 1 });
    } else {
      setAnimation(animation.current, { opacity: 0, scale: 0 });
    }
  }, [modal]);

  return (
    <div>
      <Button onClick={handleModal} color="bg-green">
        Tambah Pemasukan
      </Button>
      <div
        className="fixed opacity-0 z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
      >
        <form
          ref={formRef}
          onSubmit={handleAddItem}
          className="bg-second relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
        >
          <h5 className="font-bold text-xl">Tambah Pemasukan</h5>
          <label
            aria-label="LabelForm"
            className="flex flex-col gap-1"
            htmlFor="option"
          >
            <span className="font-medium">Pilih Produk</span>
            <select
              onChange={(e) => handleOption(e)}
              className="w-full border border-black rounded-md p-2 text-xs outline-none"
              name="option"
              id="option"
            >
              <option value={"opsi"} selected>
                Masukan sendiri
              </option>
              {product.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nama}
                </option>
              ))}
            </select>
          </label>
          <LabelForm
            name={"Nama pemasukan"}
            type={"text"}
            value={nama}
            change={(e) => setNama(e.target.value)}
            disabled={disabled}
            placeholder={"Nama pemasukan anda..."}
          />
          <LabelForm
            name={"Jumlah pemasukan"}
            type={"number"}
            value={jumlah}
            change={(e) => setJumlah(e.target.value)}
            placeholder={"Nama pemasukan anda..."}
          />
          <Button type={"submit"}>Tambah Pemasukan</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahPemasukan;
