import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";

const Product = () => {
  return (
    <main>
      <Container>
        <Header name={"Malik"} page={"Halaman Produk"} />
        <div className="w-1/3">
          <Button type={"submit"}>Tambah Produk</Button>
        </div>
        <div class="relative overflow-x-auto my-3 shadow-md rounded-lg">
          <table class="w-full text-sm text-center text-second">
            <thead class="text-xs uppercase bg-black">
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
              <tr class="border-b border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 border-r border-primary/25 font-medium whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4 border-r border-primary/25">Laptop</td>
                <td class="px-6 py-4 border-r border-primary/25">17</td>
                <td class="px-6 py-4 border-r border-primary/25 whitespace-nowrap">
                  Rp. 210.000
                </td>
                <td class="px-6 py-4 w-max flex items-center gap-2">
                  <Image width={25} src="/view.svg" alt="view-icon" />
                  <Image src="/edit.svg" alt="edit-icon" />
                  <Image src="/trash.svg" alt="trash-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-max">
          <Button type={"submit"}>Tambah Kategori Produk</Button>
        </div>
        <div class="relative overflow-x-auto my-3 shadow-md rounded-lg">
          <table class="w-full text-sm text-center text-second">
            <thead class="text-xs uppercase bg-black">
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
              <tr class="border-b border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 border-r border-primary/25 font-medium whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4 border-r border-primary/25">17</td>
                <td class="px-6 py-4 w-max flex items-center gap-2">
                  <Image width={25} src="/view.svg" alt="view-icon" />
                  <Image src="/edit.svg" alt="edit-icon" />
                  <Image src="/trash.svg" alt="trash-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </main>
  );
};

export default Product;
