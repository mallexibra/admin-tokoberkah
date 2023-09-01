"use client";
import Button from "@/components/Button";
import LabelForm from "@/components/LabelForm";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import axios from "axios";

const TambahTeam = ({ method }) => {
  const [modal, setModal] = useState(false);
  const [animation, setAnimation] = useAnimate();
  const formRef = useRef(null);

  const handleModal = (e) => {
    if (!formRef.current.contains(e.target)) {
      setModal(!modal);
    }
  };

  const addTeam = async (e) => {
    const nama = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const konfirmasiPassword = e.target[3].value;
    if (!password == konfirmasiPassword) {
      alert("Password dan Konfirmasi Password harus sama!");
      return;
    }
    await axios.post(
      "/api/v1/users",
      { nama, username, password },
      {
        headers: "application/json",
      }
    );
    alert("Team telah ditambahkan!");
    setModal(false);
    method();
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
        className="fixed opacity-0 z-20 grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
      >
        <form
          ref={formRef}
          className="bg-second relative space-y-3 p-5 rounded-md"
          action=""
          method="post"
          onSubmit={addTeam}
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
