import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";
import TambahTeam from "./TambahTeam";

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
                  <Image
                    width={23}
                    height={23}
                    src="/trash.svg"
                    alt="trash-icon"
                  />
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
                  <Image
                    width={23}
                    height={23}
                    src="/trash.svg"
                    alt="trash-icon"
                  />
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
                  <Image
                    width={23}
                    height={23}
                    src="/trash.svg"
                    alt="trash-icon"
                  />
                </button>
              </div>
            </li>
          </ul>
          <TambahTeam />
        </div>
      </Container>
    </div>
  );
};

export default Account;
