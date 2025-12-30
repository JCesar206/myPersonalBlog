import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";

const API_URL = "https://xhabbjvhizbodbwuehcq.supabase.co/rest/v1/comments";

const headers = {
  apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
};

const texts = {
  es: {
    title: "Deja un comentario",
    name: "Tu nombre",
    email: "Tu correo (opcional)",
    message: "Escribe tu comentario",
    sending: "Enviando...",
    sent: "Comentario enviado ✔",
    submit: "Enviar comentario",
    comments: "Comentarios",
    error: "Ocurrió un error. Intenta de nuevo.",
    clear: "Limpiar campos",
  },
  en: {
    title: "Leave a comment",
    name: "Your name",
    email: "Your email (optional)",
    message: "Write your comment",
    sending: "Sending...",
    sent: "Comment sent ✔",
    submit: "Send comment",
    comments: "Comments",
    error: "Something went wrong. Try again.",
    clear: "Clear fields",
  },
};

export default function ContactForm({ language = "es" }) {
  const t = texts[language];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [loading, setLoading] = useState(true);
  const nameRef = useRef(null);

  //Fetch comments
useEffect(() => {
  const fetchComments = async () => {
    const res = await fetch(
      `${API_URL}?select=*&order=created_at.desc`,
      { headers }
    );

    const data = await res.json();
    setComments(data);
  };

  fetchComments();
}, []);

  //Handlers
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { error } = await supabase
      .from("comments")
      .insert([form])

      if (error) {
        console.error(error);
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      nameRef.current?.focus();

      setTimeout(() => {
        setStatus("idle");
      }, 2000);
  };

  return (
    <section className="relative mt-4 space-y-10">
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 space-y-5"
      >
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white text-center">
          {t.title}
        </h3>

        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder={t.name}
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="email"
          name="email"
          placeholder={t.email}
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
        />

        <textarea
          name="message"
          placeholder={t.message}
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="button"
          onClick={() => {
            setForm({ name: "", email: "", message: "" });
            nameRef.current?.focus();
          }}
          className="w-full rounded-xl border-indigo-400 bg-indigo-400 text-white font-bold py-3 hover:bg-indigo-700 transition cursor-pointer"
        >
          {t.clear}
        </button>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-indigo-600 text-white font-bold py-3 hover:bg-indigo-700 transition disabled:opacity-60 cursor-pointer"
        >
          {status === "sending"
            ? t.sending
            : status === "sent"
            ? t.sent
            : status === "error"
            ? t.error
            : t.submit}
        </button>
      </form>

      {/* COMMENTS */}
      {!loading && comments.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
            {t.comments}
          </h4>

          {comments.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-4"
            >
              <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                {c.name}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {c.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}