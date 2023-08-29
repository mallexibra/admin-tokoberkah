"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const EditKategori = () => {
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
        ref={animation}
      >
        <form
          ref={formRef}
          className="bg-second text-left relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
        >
          <h5 className="font-bold text-xl">Edit Kategori</h5>
          <LabelForm
            name={"Nama kategori"}
            type={"text"}
            value={"Mackbook air"}
            placeholder={"Nama kategori anda..."}
          />
          <Button type={"submit"}>Edit Kategori</Button>
        </form>
      </div>
    </div>
  );
};

export default EditKategori;
