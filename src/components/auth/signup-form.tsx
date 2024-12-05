"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [nameField, setNameField] = useState("");

  const handleEnterButton = () => {
    router.replace("/home");
  };

  return (
    <>
      <Input
        placeholder="Digite o seu nome "
        value={nameField}
        onChange={(t) => setNameField(t)}
      />
      <Input
        placeholder="Digite seu email"
        value={emailField}
        onChange={(t) => setEmailField(t)}
      />
      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={(t) => setPasswordField(t)}
        password
      />

      <Button label="Criar Conta" onClick={handleEnterButton} size={1} />
    </>
  );
};
