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

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };

  const handleAddItem = async (e) => {
    console.log(e);
    const nama = e.target[0].value;
    const jumlah = Number(e.target[1].value);
    const jenis = "pemasukan";
    await axios.post(
      "/api/v1/money",
      { nama, jumlah, jenis },
      { headers: "application/json" }
    );
    e.target[0].value = "";
    e.target[1].value = "";
    setModal();
    alert("Data pemasukan berhasil ditambahkan!");
    method();
  };

  useEffect(() => {
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
          <LabelForm
            name={"Nama pemasukan"}
            type={"text"}
            placeholder={"Nama pemasukan anda..."}
          />
          <LabelForm
            name={"Jumlah pemasukan"}
            type={"number"}
            placeholder={"Nama pemasukan anda..."}
          />
          <Button type={"submit"}>Tambah Pemasukan</Button>
        </form>
      </div>
    </div>
  );
};

export default TambahPemasukan;
