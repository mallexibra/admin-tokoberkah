import Button from "@/components/Button";
import CardHistory from "@/components/CardHistory";
import CardInfo from "@/components/CardInfo";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div>
      <Navbar home={true} />
      <Container>
        <Header name={"Malik"} page={"Halaman Dashboard"} />
        <main>
          <div className="bg-primary text-second grid grid-cols-2 p-5 rounded-lg">
            <h3 className="font-bold text-lg col-span-2">Total Saldo Anda</h3>
            <p className="font-bold text-2xl my-3 col-span-2">Rp. 1.000.000</p>
            <p className="text-xs flex items-center gap-2">
              <Image
                width={18}
                height={18}
                src="/arrowdown.svg"
                alt="Arrow-icon"
              />{" "}
              Rp. 200.000
            </p>
            <p className="text-xs flex items-center gap-2">
              <Image
                width={18}
                height={18}
                src="/arrowup.svg"
                alt="Arrow-icon"
              />{" "}
              Rp. 200.000
            </p>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2 justify-between">
            <CardInfo title={"Penjualan Hari Ini"} subtitle={23} />
            <CardInfo title={"Omset Hari Ini"} subtitle={"Rp. 200.000"} />
            <Button type={"submit"} color="bg-green">
              Tambah Pemasukan
            </Button>
            <Button type={"submit"} color="bg-red">
              Tambah Pengeluaran
            </Button>
          </div>
          <CardHistory title={"Riwayat Pemasukan"} />
          <CardHistory title={"Riwayat Pengeluaran"} />
        </main>
      </Container>
    </div>
  );
};

export default Dashboard;
