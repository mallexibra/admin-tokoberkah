"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import LabelForm from "@/components/LabelForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    const data = await (await axios.get("/api/v1/users")).data;
    setUser(data);
  };

  const logIn = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    user.data.length > 0
      ? user.data.map((item) => {
          if (item.username == username) {
            if (item.password == password) {
              localStorage.setItem("user", "active");
              alert("Login anda berhasil!");
              return router.push("/");
            }
          }
          alert("Username/Password anda salah!");
          return router.push("/login");
        })
      : alert("Data tidak tersedia");
  };

  useEffect(() => {
    getUsers();
    const isLogin = localStorage.getItem("user");
    if (isLogin) {
      alert("Anda sudah login!");
      router.push("/");
    }
  }, []);
  return (
    <div className="p-3 grid place-items-center h-screen">
      <Container>
        <form className="w-full" action="" onSubmit={logIn} method="post">
          <h1 className="text-xl font-bold">Selamat Datang!</h1>
          <p>Silahkan masuk dengan akun anda...</p>
          <div className="mt-4 space-y-2">
            <LabelForm
              name={"Username"}
              type={"text"}
              placeholder={"Silahkan masukkan username anda..."}
            />
            <LabelForm
              name={"Password"}
              type={"password"}
              placeholder={"Silahkan masukkan password anda..."}
            />
            <Button type={"submit"}>Masuk</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;
