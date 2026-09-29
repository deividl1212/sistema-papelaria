"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [lembrar, setLembrar] = useState(true);
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

  const campoWrap: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 10, border: "1px solid #E4E1D8",
    borderRadius: 14, padding: "12px 14px", background: "#F9F8F5",
  };
  const campoInput: React.CSSProperties = {
    border: "none", outline: "none", background: "transparent", fontSize: 14.5,
    color: "#23231F", width: "100%", fontFamily: "inherit",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F7F5F2", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 28, padding: "40px 40px 32px", width: 420, maxWidth: "100%", boxShadow: "0 20px 60px rgba(0,0,0,.08)", border: "1px solid #EEECE6" }}>
       <img src="/logo-login.png" alt="Papelaria Moura" style={{ width: "100%", maxWidth: 190, display: "block", margin: "0 auto 22px" }} />

        <h1 style={{ fontSize: 26, fontWeight: 800, color: "#1C1C1A", margin: "0 0 8px" }}>Bem-vindo!</h1>
        <div style={{ width: 46, height: 4, background: "#2F6B4F", borderRadius: 4, marginBottom: 14 }} />
        <div style={{ fontSize: 13.5, color: "#8C897E", marginBottom: 26 }}>Entre com seus dados para acessar o sistema.</div>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: 16 }}>
            <div style={{ fontSize: 12.5, color: "#4B4A45", marginBottom: 6, fontWeight: 700 }}>Usuário</div>
            <div style={campoWrap}>
              <User size={17} color="#8C897E" />
              <input
                style={campoInput}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
                autoComplete="username"
              />
            </div>
          </label>

          <label style={{ display: "block", marginBottom: 14 }}>
            <div style={{ fontSize: 12.5, color: "#4B4A45", marginBottom: 6, fontWeight: 700 }}>Senha</div>
            <div style={campoWrap}>
              <Lock size={17} color="#8C897E" />
              <input
                type={mostrarSenha ? "text" : "password"}
                style={campoInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                autoComplete="current-password"
              />
              <button type="button" onClick={() => setMostrarSenha((v) => !v)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 0 }}>
                {mostrarSenha ? <EyeOff size={17} color="#8C897E" /> : <Eye size={17} color="#8C897E" />}
              </button>
            </div>
          </label>

          {erro && <div style={{ color: "#B3261E", fontSize: 13, marginBottom: 10 }}>{erro}</div>}

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, cursor: "pointer", userSelect: "none" }}>
            <input type="checkbox" checked={lembrar} onChange={(e) => setLembrar(e.target.checked)} style={{ width: 16, height: 16, accentColor: "#2F6B4F" }} />
            <span style={{ fontSize: 13, color: "#4B4A45" }}>Lembrar de mim</span>
          </label>

          <button
            type="submit"
            disabled={carregando}
            style={{
              width: "100%", background: "#2F6B4F", color: "#fff", border: "none", borderRadius: 999,
              padding: "13px 0", fontSize: 15, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            {carregando ? "Entrando..." : "Entrar"} {!carregando && <ArrowRight size={18} />}
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "22px 0 4px" }}>
          <div style={{ flex: 1, height: 1, background: "#EEECE6" }} />
          <a href="#" style={{ fontSize: 12.5, color: "#2F6B4F", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}>Esqueceu sua senha?</a>
          <div style={{ flex: 1, height: 1, background: "#EEECE6" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 20, fontSize: 11, color: "#9A968C" }}>
          <ShieldCheck size={13} />
          © 2026 Papelaria Moura • Desenvolvido por Deivid Lima
        </div>
      </div>
    </div>
  );
}