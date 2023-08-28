"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import LabelForm from "@/components/LabelForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const logIn = () => {
    return router.push("/");
  };
  return (
    <Container>
      <div className="p-3 grid place-items-center min-h-screen">
        <form className="w-full" action="" method="post">
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
            <Button onClick={logIn} type={"submit"}>
              Masuk
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
