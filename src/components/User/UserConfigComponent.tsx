"use client";
import React, { useState } from "react";
import Image from "next/image";
import edit from "@/assets/icons8-crear-nuevo-100.png";
import Modal from "../Common/modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { isEmpty, validEmail, validPassword } from "@/lib/validations";
import axios from "axios";
import tick from "@/assets/icons8-marca-de-verificación-24.png";
import DeleteUser from "./DeleteUser";

type UserInfo = {
  id: number;
  username: string;
  email: string;
  pictureUrl: string;
};

function UserConfigComponent({ userInfo }: { userInfo: UserInfo }) {
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [askPicture, setAskPictre] = useState(false);

  const [file, setFile] = useState<File>();

  const [url, setUrl] = useState(userInfo.pictureUrl);
  const [uploading, setUploading] = useState(false);

  async function editUser() {
    try {
      setLoading(true);

      if (isEmpty(username) || isEmpty(email) || isEmpty(url))
        throw new Error("Complete todos los campos.");

      if (!validEmail(email)) throw new Error("Ingrese un correo válido.");

      const data = {
        username: username.trim(),
        email: email.trim(),
        url: url.trim(),
      };

      const response = await axios.patch("/api/users/" + userInfo.id, data);
      toast.success("Información actualizada");
      setLoading(false);
      if (response.status === 200) router.push("/");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        setLoading(false);
      } else {
        setLoading(false);
        toast.error(e.message);
      }
    }
  }

  async function editPassword() {
    try {
      setLoadingPassword(true);

      if (isEmpty(password) || isEmpty(confirmPassword))
        throw new Error("Complete todos los campos.");

      if (!validPassword(password))
        throw new Error(
          "Su contraseña debe contener:\n- 8 caracteres\n- 1 mayúscula\n- 1 Minúscula\n- 1 número"
        );

      if (password.trim() !== confirmPassword.trim())
        throw new Error("Las contraseñas no coinciden.");

      const data = {
        password: password.trim(),
      };

      const response = await axios.put("/api/users/" + userInfo.id, data);
      toast.success("Información actualizada");
      setLoadingPassword(false);
      if (response.status === 200) router.push("/");
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        toast.error(e.response.data.message);
        setLoadingPassword(false);
      } else {
        setLoadingPassword(false);
        toast.error(e.message);
      }
    }
  }

  const router = useRouter();

  const uploadFile = async () => {
    try {
      if (!file) {
        toast.error("No ha subido ningún archivo.");
        return;
      }

      setUploading(true);
      const data = new FormData();
      data.set("file", file);
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const signedUrl = await uploadRequest.json();
      setUrl(signedUrl);
      setUploading(false);
    } catch (e) {
      console.log(e);
      setUploading(false);
      toast.error("Error al subir el archivo, intente de nuevo.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target?.files?.[0]);
  };

  return (
    <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center text-white">
      <div className="bg-zinc-800 p-5 rounded-xl shadow-xl flex flex-col gap-3">
        <h1 className="font-bold text-2xl text-center">
          Editar información de usuario
        </h1>
        <div className="flex flex-row gap-1">
          <div className="flex flex-col gap-1 border-r-2 pr-5 mr-5">
            <h1 className="text-xl font-bold">Información de usuario</h1>
            <div className="flex items-center justify-center">
              <div
                onClick={() => setAskPictre(true)}
                className="bg-red-500 rounded-full w-14 h-14 relative"
                style={{
                  backgroundImage: `url(${url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute w-14 h-14 bg-black rounded-full flex items-center justify-center opacity-0 hover:opacity-60 hover:cursor-pointer">
                  <Image src={edit} alt="Editar" className="w-1/2" />
                </div>
              </div>
            </div>
            <label>Nombre de usuario</label>
            <input
              className="p-2 rounded-xl text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nombre de usuario"
            />
            <label>Correo</label>
            <input
              className="p-2 rounded-xl text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo"
            />
            <button
              onClick={editUser}
              disabled={loading}
              className={`bg-green-600 px-3 py-1 rounded-xl text-white mt-3 ${
                loading
                  ? "opacity-60"
                  : "hover:bg-green-700 active:bg-green-800"
              }`}
            >
              {loading ? "Editando..." : "Editar"}
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">Cambiar contraseña</h1>
            <label>Contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              className="p-2 rounded-xl text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <label>Confirmar contraseña</label>
            <input
              type={showPassword ? "text" : "password"}
              className="p-2 rounded-xl text-black"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmar Contraseña"
            />
            <div className="flex flex-row gap-1 items-center mt-1">
              <label className="text-sm">Mostrar contraseña</label>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className={`w-5 h-5 rounded-full hover:cursor-pointer ${
                  !showPassword
                    ? "bg-zinc-200 hover:bg-zinc-400"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {showPassword && <Image src={tick} alt="Mostrar contraseña" />}
              </div>
            </div>
            <button
              onClick={editPassword}
              disabled={loadingPassword}
              className={`bg-green-600 px-3 py-1 rounded-xl text-white mt-3 ${
                loadingPassword
                  ? "opacity-60"
                  : "hover:bg-green-700 active:bg-green-800"
              }`}
            >
              {loadingPassword ? "Editando..." : "Editar contraseña"}
            </button>
          </div>
        </div>
        <p className="text-sm text-center">
          Es posible que sea necesario cerrar sesión para ver los cambios.
        </p>
        <div className="w-full flex items-center justify-center">
          <DeleteUser userId={userInfo.id + ""} />
        </div>

        <button
          onClick={() => {
            router.push("/");
          }}
          className="underline"
        >
          Regresar
        </button>
      </div>
      {askPicture && (
        <Modal setOpen={setAskPictre}>
          <div className="flex flex-col gap-2 items-center">
            <div
              className="bg-red-500 h-52 w-52"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <input type="file" onChange={handleChange} />
            <button
              type="button"
              disabled={uploading}
              onClick={uploadFile}
              className={`bg-green-600 py-1 px-3 rounded-xl text-white w-full ${
                uploading
                  ? "opacity-60"
                  : "hover:bg-green-700 active:bg-green-800"
              }`}
            >
              {uploading ? "Subiendo..." : "Subir"}
            </button>
            <p className="text-center text-sm">
              ¡Recuerde presionar "Subir" para cargar su foto!
            </p>
            <div className="w-full flex justify-end">
              <button
                onClick={() => setAskPictre(false)}
                className="bg-zinc-300 px-2 py-1 rounded-xl"
              >
                Cerrar
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default UserConfigComponent;
