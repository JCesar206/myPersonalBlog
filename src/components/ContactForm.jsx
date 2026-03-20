import { useState, useEffect, useRef } from "react";
import { supabase } from "../lib/supabase";
import { texts } from "../i18n/texts.js";

/*
const API_URL = "https://xhabbjvhizbodbwuehcq.supabase.co/rest/v1/comments";
const headers = {
  apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  "Content-Type": "application/json",
};
*/

export default function ContactForm({ language = "es" }) {
  const contact = texts[language].contact;
  const buttons = texts[language].buttons;
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(true);
  const nameRef = useRef(null);

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error al obtener comentarios:", error.message);
        return;
      }

      setComments(data);
      setLoading(false);
    };
    fetchComments();
  }, []);

  // Handlers
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { data, error } = await supabase
      .from("comments")
      .insert([{
        name: form.name,
        email: form.email,
        message: form.message
      }])
      .select();

    if (error) {
      console.error("Error al insertar comentario:", error.message);
      setStatus("error");
      return;
    }

    if (data) {
      // Actualiza la lista inmediatamente
      setComments((prev) => [data[0], ...prev]);
    }

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    nameRef.current?.focus();

    setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <section className="relative mt-4 space-y-10">

      {/* FORM */}
      <form onSubmit={handleSubmit} className="rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 space-y-5">
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white text-center">{contact.legend}</h3>

        <input ref={nameRef} type="text" name="name" placeholder={contact.yourName}
          value={form.name} onChange={handleChange} required
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"/>

        <input type="email" name="email" placeholder={contact.yourEmail}
          value={form.email} onChange={handleChange}
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500"/>

        <textarea name="message" placeholder={contact.writeYourComment} rows="4"
          value={form.message} onChange={handleChange} required
          className="w-full rounded-xl border border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-indigo-500"/>

        {/* Clear */}
        <button type="button"
          onClick={() => {setForm({ name: "", email: "", message: "" });
            nameRef.current?.focus();
          }}
          className="w-full rounded-xl border-indigo-400 bg-indigo-400 text-white font-bold py-3 hover:bg-indigo-700 transition cursor-pointer"
        >{buttons.clearFields}
        </button>

        {/* Submit */}
        <button type="submit" disabled={status === "sending"}
          className="w-full rounded-xl bg-indigo-500 text-white font-bold py-3 hover:bg-indigo-700 transition disabled:opacity-60 cursor-pointer">
          {status === "sending"
            ? contact.sending
            : status === "sent"
            ? contact.sentComment
            : status === "error"
            ? contact.error
            : buttons.sendComment}
        </button>
      </form>

      {/* COMMENTS */}
      {!loading && comments.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-indigo-600 dark:text-indigo-700">{contact.title}</h4>

          <div className="max-h-45 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-indigo-500">
            {comments.map((c, i) => (
              <div key={i} className="rounded-2xl bg-gray-100 dark:bg-gray-800 p-4">
                <p className="font-semibold text-indigo-600 dark:text-indigo-400">{c.name}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold italic">{c.message}</p>
              </div>
          ))}
        </div>
      </div>
      )}
    </section>
  );
}