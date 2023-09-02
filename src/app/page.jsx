"use client";
import CardHistory from "@/components/CardHistory";
import CardInfo from "@/components/CardInfo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import TambahPemasukan from "./TambahPemasukan";
import TambahPengeluaran from "./TambahPengeluaran";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Dashboard = () => {
  const router = useRouter();
  const [money, setMoney] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [pemasukan, setPemasukan] = useState(0);
  const [pengeluaran, setPengeluaran] = useState(0);
  const [penjualan, setPenjualan] = useState(0);
  const [omset, setOmset] = useState(0);

  const getMoney = async () => {
    const data = (await axios.get("/api/v1/money")).data.data;
    setMoney(data);
  };

  const checkLogin = () => {
    const isLogin = localStorage.getItem("user");
    if (!isLogin) {
      alert("Silahkan login terlebih dahulu!");
      router.push("/login");
    }
  };

  const formatRupiah = (angka) => {
    if (angka.toString().length > 3) {
      let reverse = angka.toString().split("").reverse().join("");
      let ribuan = reverse.match(/\d{1,3}/g);
      let hasil = ribuan.join(".").split("").reverse().join("");
      return hasil;
    }
    return angka;
  };

  const totalSaldo = async () => {
    let pemasukan = 0;
    let pengeluaran = 0;
    money.map((item) => {
      if (item.jenis == "pemasukan") {
        pemasukan += item.jumlah;
      } else if (item.jenis == "pengeluaran") {
        pengeluaran += item.jumlah;
      }
    });

    let total = formatRupiah(pemasukan - pengeluaran);
    setSaldo(total);
  };

  const trafik = () => {
    let dataPemasukan = 0;
    let dataPengeluaran = 0;
    let dataPenjualan = 0;
    let dataOmset = 0;
    money.map((item) => {
      if (item.jenis == "pemasukan") {
        dataPemasukan = item.jumlah;
        dataPenjualan += 1;
        dataOmset += item.jumlah;
      } else if (item.jenis == "pengeluaran") {
        dataPengeluaran = item.jumlah;
      }
    });
    setPemasukan(dataPemasukan);
    setPengeluaran(dataPengeluaran);
    setPenjualan(dataPenjualan);
    setOmset(formatRupiah(dataOmset));
  };

  useEffect(() => {
    checkLogin();
    getMoney();
    totalSaldo();
    trafik();
  }, []);
  return (
    <div>
      <Navbar home={true} />
      <Container>
        <Header name={"Malik"} page={"Halaman Dashboard"} />
        <main>
          <div className="bg-primary text-second grid grid-cols-2 p-5 rounded-lg">
            <h3 className="font-bold text-lg col-span-2">Total Saldo Anda</h3>
            <p className="font-bold text-2xl my-3 col-span-2">Rp. {saldo}</p>
            <p className="text-xs flex items-center gap-2">
              <Image
                width={18}
                height={18}
                src="/arrowdown.svg"
                alt="Arrow-icon"
              />{" "}
              Rp. {pemasukan}
            </p>
            <p className="text-xs flex items-center gap-2">
              <Image
                width={18}
                height={18}
                src="/arrowup.svg"
                alt="Arrow-icon"
              />{" "}
              Rp. {pengeluaran}
            </p>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2 justify-between">
            <CardInfo title={"Penjualan Hari Ini"} subtitle={penjualan} />
            <CardInfo title={"Omset Hari Ini"} subtitle={`Rp. ${omset}`} />
            <TambahPemasukan />
            <TambahPengeluaran />
          </div>
          <CardHistory
            data={money}
            filter={"pemasukan"}
            title={"Riwayat Pemasukan"}
          />
          <CardHistory
            data={money}
            filter={"pengeluaran"}
            title={"Riwayat Pengeluaran"}
          />
        </main>
      </Container>
    </div>
  );
};

export default Dashboard;
