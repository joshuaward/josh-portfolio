
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/content")
      .then(res => res.json())
      .then(setData);
  }, []);

  const login = async () => {
    const res = await fetch("/.netlify/functions/login", {
      method: "POST",
      body: JSON.stringify({ password })
    });
    if (res.ok) setIsAdmin(true);
  };

  const save = async () => {
    await fetch("/.netlify/functions/content", {
      method: "PUT",
      body: JSON.stringify(data)
    });
  };

  if (!data) return <div style={{padding:20}}>Loading...</div>;

  return (
    <div style={{padding:20}}>
      <h1>{data.name}</h1>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme ({theme})
      </button>

      <h2>{data.title}</h2>

      <h3>AWS Certifications</h3>
      <ul>
        {data.certifications.map((c,i)=>(
          <li key={i} style={{fontWeight: c.includes("AI") ? "bold" : "normal"}}>
            {c}
          </li>
        ))}
      </ul>

      {!isAdmin && (
        <div>
          <input
            placeholder="Admin password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
          <button onClick={login}>Login</button>
        </div>
      )}

      {isAdmin && (
        <div>
          <h3>Admin Editor</h3>
          <input
            value={data.name}
            onChange={e=>setData({...data, name:e.target.value})}
          />
          <textarea
            value={data.title}
            onChange={e=>setData({...data, title:e.target.value})}
          />
          <button onClick={save}>Save</button>
        </div>
      )}
    </div>
  );
}
