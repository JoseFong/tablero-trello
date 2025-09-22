"use client";
import { isEmpty, validEmail, validPassword } from "@/lib/validations";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import tick from "@/assets/icons8-marca-de-verificación-24.png";
import Modal from "@/components/Common/modal";
import edit from "@/assets/icons8-crear-nuevo-100.png";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [askPicture, setAskPicture] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);

  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState(
    "https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
  );
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  async function register() {
    try {
      setLoading(true);
      if (
        isEmpty(username) ||
        isEmpty(email) ||
        isEmpty(password) ||
        isEmpty(confirmPassword)
      )
        throw new Error("Complete todos los campos");

      if (!validEmail(email.trim()))
        throw new Error("Ingrese un correo válido.");

      if (!validPassword(password.trim()))
        throw new Error(
          "Su contraseña debe de contener:\n-8 Caracteres\n-1 Mayúscula\n-1 Minúscula\n-1 Número"
        );

      if (password.trim() !== confirmPassword.trim())
        throw new Error("Sus contraseñas no coinciden");

      const data = {
        username: username.trim(),
        password: password.trim(),
        email: email.trim(),
        pictureUrl: url.trim(),
      };
      const response = await axios.post("/api/register", data);

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
    <div className="text-white bg-zinc-900 h-screen w-screen flex items-center justify-center text-md">
      <div className="bg-zinc-800 rounded-xl shadow-xl flex flex-col p-8 gap-5">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="text-3xl text-center mb-1">Crea tu cuenta</h1>
          <div className="relative">
            <div
              onClick={() => setAskPicture(true)}
              onMouseEnter={() => setShowEditButton(true)}
              onMouseLeave={() => setShowEditButton(false)}
              className="rounded-full bg-red-500 w-24 h-24 mb-3 flex items-center justify-center hover:opacity-60 hover:cursor-pointer"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            {showEditButton && (
              <Image
                src={edit}
                alt="Agregar foto de perfil"
                className="w-1/2 absolute top-0 translate-y-1/2 translate-x-1/2 pointer-events-none"
              />
            )}
          </div>

          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type="text"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-2 w-5/6 text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-4 rounded-xl shadow-xl mb-1 w-5/6 text-black"
          />
          <div className="w-5/6 flex flex-row gap-1 items-center justify-start">
            <label className="text-sm">Mostrar contraseña</label>
            <button
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`w-5 h-5  rounded-full transition-colors ${
                showPassword ? "bg-green-600" : "bg-zinc-500"
              }`}
            >
              <Image
                className={`transition-opacity ${
                  showPassword ? "opacity-100" : "opacity-0"
                }`}
                src={tick}
                alt="Ocultar Contraseña"
              />
            </button>
          </div>
          <button
            className={`bg-green-600 w-5/6 py-2 rounded-xl shadow-xl mt-3 mb-1 transition-colors ${
              loading ? "opacity-50" : "hover:bg-green-700 active:bg-green-800"
            } `}
            disabled={loading}
            onClick={register}
          >
            Registrarse
          </button>
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="text-sm underline hover:text-green-500 transition-all"
          >
            Regresar a Inicio de sesión
          </button>
        </div>
      </div>
      {askPicture && (
        <Modal setOpen={setAskPicture}>
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
                onClick={() => setAskPicture(false)}
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

export default Register;
