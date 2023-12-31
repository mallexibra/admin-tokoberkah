"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAnimate } from "framer-motion";

const LihatProduk = () => {
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
        width={25}
        height={25}
        src="/view.svg"
        alt="view-icon"
        className="cursor-pointer"
      />

      <div
        className="z-20 opacity-0 fixed grid place-items-center top-0 right-0 bottom-0 left-0 bg-primary/50"
        onClick={handleModal}
        ref={animation}
      >
        <div ref={formRef} className="bg-second w-3/4 text-left rounded-md p-4">
          <h3 className="text-lg font-bold">Detail Produk</h3>
          <h5 className="font-semibold">Nama Produk</h5>
          <p>Lorem ipsum dolor sit amet.</p>
          <h5 className="font-semibold">Deskripsi Produk</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            officiis sunt cum delectus neque quia, iusto culpa voluptatum iure
            quaerat.
          </p>
          <h5 className="font-semibold">Kategori Produk</h5>
          <p>Laptop</p>
          <h5 className="font-semibold">Stok Produk</h5>
          <p>12</p>
          <h5 className="font-semibold">Harga Produk</h5>
          <p>Rp. 120.000</p>
        </div>
      </div>
    </div>
  );
};

export default LihatProduk;
