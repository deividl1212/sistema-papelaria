"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });
    setCarregando(false);
    if (res?.error) {
      setErro("Usuário ou senha inválidos");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#16211C", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
      <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: 10, padding: "40px 36px", width: 340, boxShadow: "0 20px 60px rgba(0,0,0,.35)" }}>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#23231F", marginBottom: 2 }}>Papelaria Moura</div>
        <div style={{ fontSize: 13, color: "#6B6B62", marginBottom: 24 }}>Entre com seu usuário e senha</div>

        <label style={{ display: "block", marginBottom: 12 }}>
          <div style={{ fontSize: 12.5, color: "#6B6B62", marginBottom: 5, fontWeight: 600 }}>Usuário</div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "100%", padding: "9px 11px", border: "1px solid #DCD7CB", borderRadius: 10, fontSize: 14 }} />
        </label>

        <label style={{ display: "block", marginBottom: 12 }}>
          <div style={{ fontSize: 12.5, color: "#6B6B62", marginBottom: 5, fontWeight: 600 }}>Senha</div>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "9px 11px", border: "1px solid #DCD7CB", borderRadius: 10, fontSize: 14 }} />
        </label>

        {erro && <div style={{ color: "#B3261E", fontSize: 13, marginBottom: 10 }}>{erro}</div>}

        <button type="submit" disabled={carregando} style={{ width: "100%", marginTop: 8, background: "#2F6B4F", color: "#fff", border: "1px solid #24543E", borderRadius: 10, padding: "10px 0", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {carregando ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <div style={{ fontSize: 11.5, color: "#9FB0A5", marginTop: 18 }}>Desenvolvido por Deivid Lima ©</div>
    </div>
  );
}