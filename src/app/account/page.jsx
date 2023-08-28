import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";

const Account = () => {
  return (
    <div>
      <Container>
        <Header name={"Malik"} page={"Halaman Akun"} />
        <div className="bg-second p-5 shadow-lg rounded-lg">
          <h5 className="text-lg font-bold">Team anda</h5>
          <ul className="list-disc space-y-2 ml-5">
            <li>
              <div className="flex justify-between font-semibold">
                <div>
                  <p>Maulana Malik Ibrahim</p>
                  <p className="text-xs opacity-50">@mallexibra</p>
                </div>
                <button className="row-span-2 w-max">
                  <Image src="/trash.svg" alt="trash-icon" />
                </button>
              </div>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <div>
                  <p>Maulana Malik Ibrahim</p>
                  <p className="text-xs opacity-50">@mallexibra</p>
                </div>
                <button className="row-span-2 w-max">
                  <Image src="/trash.svg" alt="trash-icon" />
                </button>
              </div>
            </li>
            <li>
              <div className="flex justify-between font-semibold">
                <div>
                  <p>Maulana Malik Ibrahim</p>
                  <p className="text-xs opacity-50">@mallexibra</p>
                </div>
                <button className="row-span-2 w-max">
                  <Image src="/trash.svg" alt="trash-icon" />
                </button>
              </div>
            </li>
          </ul>
          <button className="flex items-center gap-3 mt-7" type="submit">
            <span className="w-8 h-8 font-bold text-second grid place-items-center bg-slate-800 rounded-full">
              <Image src="/plus.svg" alt="plus-icon" />
            </span>
            <p>Tambahkan team baru</p>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Account;
