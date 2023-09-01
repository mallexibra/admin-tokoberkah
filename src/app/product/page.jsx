"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";
import TambahProduk from "./TambahProduk";
import TambahKategori from "./TambahKategori";
import LihatProduk from "./LihatProduk";
import EditProduk from "./EditProduk";
import EditKategori from "./EditKategori";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Product = () => {
  const router = useRouter();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);

  const checkLogin = () => {
    const isLogin = localStorage.getItem("user");
    if (!isLogin) {
      alert("Silahkan login terlebih dahulu!");
      router.push("/login");
    }
  };

  const getProduct = async () => {
    const data = (await axios.get("/api/v1/product")).data.data;
    setProduct(data);
  };

  const getCategory = async () => {
    const data = (await axios.get("/api/v1/category")).data.data;
    setCategory(data);
  };

  const deleteProduct = async (id) => {
    const konfirmasi = confirm(
      "Apakah anda yakin akan menghapus produk berikut?"
    );
    if (konfirmasi) {
      await axios.delete(`/api/v1/product/${id}`);
    }
    getProduct();
  };

  const deleteCategory = async (id) => {
    const konfirmasi = confirm(
      "Apakah anda yakin akan menghapus kategori berikut?"
    );
    if (konfirmasi) {
      await axios.delete(`/api/v1/category/${id}`);
    }
    getCategory();
  };

  useEffect(() => {
    checkLogin();
    getProduct();
    getCategory();
  }, []);
  return (
    <main>
      <Container>
        <Header name={"Malik"} page={"Halaman Produk"} />
        <div className="w-1/3">
          <TambahProduk />
        </div>
        <div class="relative overflow-x-auto my-3 shadow-md rounded-lg">
          <table class="w-full text-sm text-center text-second">
            <thead class="text-xs uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nama Produk
                </th>
                <th scope="col" class="px-6 py-3">
                  Kategori
                </th>
                <th scope="col" class="px-6 py-3">
                  Stok
                </th>
                <th scope="col" class="px-6 py-3">
                  Harga
                </th>
                <th scope="col" class="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-primary">
              {product.map((item) => (
                <tr key={item.id} class="border-b border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 border-r border-primary/25 font-medium whitespace-nowrap"
                  >
                    {item.nama}
                  </th>
                  <td class="px-6 py-4 border-r border-primary/25">
                    {item.kategori.nama}
                  </td>
                  <td class="px-6 py-4 border-r border-primary/25">
                    {item.stok}
                  </td>
                  <td class="px-6 py-4 border-r border-primary/25 whitespace-nowrap">
                    Rp. {item.harga}
                  </td>
                  <td class="px-6 py-4 w-max flex items-center gap-2">
                    <LihatProduk product={item} />
                    <EditProduk />
                    <Image
                      onClick={() => deleteProduct(item.id)}
                      className="cursor-pointer"
                      width={23}
                      height={23}
                      src="/trash.svg"
                      alt="trash-icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-max">
          <TambahKategori />
        </div>
        <div class="relative overflow-x-auto my-3 shadow-md rounded-lg">
          <table class="w-full text-sm text-center text-second">
            <thead class="text-xs uppercase bg-primary">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Nama Kategori
                </th>
                <th scope="col" class="px-6 py-3">
                  Jumlah
                </th>
                <th scope="col" class="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-primary">
              {category.map((item) => (
                <tr class="border-b border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 border-r border-primary/25 font-medium whitespace-nowrap"
                  >
                    {item.nama}
                  </th>
                  <td class="px-6 py-4 border-r border-primary/25">
                    {item.product.length}
                  </td>
                  <td class="px-6 py-4 w-max flex items-center gap-2">
                    <EditKategori method={getCategory} category={item} />
                    <Image
                      onClick={() => deleteCategory(item.id)}
                      className="cursor-pointer"
                      width={23}
                      height={23}
                      src="/trash.svg"
                      alt="trash-icon"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default Product;
