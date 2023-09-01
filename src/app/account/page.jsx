"use client";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Image from "next/image";
import TambahTeam from "./TambahTeam";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Account = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const checkLogin = () => {
    const isLogin = localStorage.getItem("user");
    if (!isLogin) {
      alert("Silahkan login terlebih dahulu!");
      router.push("/login");
    }
  };

  const getUsers = async () => {
    const data = (await axios.get("/api/v1/users")).data.data;
    setUsers(data);
  };

  const deleteUser = async (username, id) => {
    const isConfirm = confirm(`Apakah anda yakin akan menghapus @${username}?`);
    if (isConfirm) {
      await axios.delete(`/api/v1/users/${id}`);
      getUsers();
    }
  };

  useEffect(() => {
    checkLogin();
    getUsers();
  }, []);

  return (
    <div>
      <Container>
        <Header name={"Malik"} page={"Halaman Akun"} />
        <div className="bg-second p-5 shadow-lg rounded-lg">
          <h5 className="text-lg font-bold">Team anda</h5>
          <ul className="list-disc space-y-2 ml-5">
            {users.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between font-semibold">
                  <div>
                    <p>{item.nama}</p>
                    <p className="text-xs opacity-50">@{item.username}</p>
                  </div>
                  <button
                    onClick={() => deleteUser(item.username, item.id)}
                    className="row-span-2 w-max"
                  >
                    <Image
                      width={23}
                      height={23}
                      src="/trash.svg"
                      alt="trash-icon"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <TambahTeam method={getUsers} />
        </div>
      </Container>
    </div>
  );
};

export default Account;
