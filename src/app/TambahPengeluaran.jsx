"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const TambahPengeluaran = () => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useAnimate();
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
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
      <Button onClick={handleModal} color="bg-red">
        Tambah Pengeluaran
      </Button>
      <div
        className="fixed opacity-0 z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
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
