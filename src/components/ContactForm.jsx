import { useState, useEffect, useRef } from "react";
import { FiSend, FiRotateCcw, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { supabase } from "../lib/supabase";
import { texts } from "../i18n/texts.js";

export default function ContactForm({ language = "es" }) {
  const contact = texts[language].contact;
  const buttons = texts[language].buttons;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [loading, setLoading] = useState(true);
  const nameRef = useRef(null);

  // Obtener comentarios públicos de forma segura (sin exponer correos electrónicos)
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { data, error } = await supabase
          .from("comments")
          .select("id, name, message, created_at")
          .order("created_at", { ascending: false })
          .limit(20);

        if (error) throw error;
        if (data) setComments(data);
      } catch (error) {
        console.error("Error al obtener comentarios:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setForm({ name: "", email: "", message: "" });
    setStatus("idle");
    nameRef.current?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setStatus("sending");

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([
          {
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          },
        ])
        .select("id, name, message, created_at");

      if (error) throw error;

      if (data && data.length > 0) {
        setComments((prev) => [data[0], ...prev]);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      nameRef.current?.focus();

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error al insertar comentario:", error.message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div className="space-y-8 pt-4">
      
      {/* FORMULARIO DE CONTACTO */}
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-5"
      >
        <h3 className="text-lg md:text-xl text-center font-bold text-slate-900 dark:text-white">
          {contact.legend}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="sr-only">
              {contact.yourName}
            </label>
            <input
              id="name"
              ref={nameRef}
              type="text"
              name="name"
              placeholder={contact.yourName}
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              {contact.yourEmail}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={contact.yourEmail}
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="sr-only">
            {contact.writeYourComment}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={contact.writeYourComment}
            rows="3"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-3 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>

        {/* Botones con jerarquía visual clara */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <button
            type="button"
            onClick={handleClear}
            className="sm:w-1/3 flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent text-slate-700 dark:text-slate-300 text-sm font-semibold py-3 px-4 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <FiRotateCcw size={16} />
            {buttons.clearFields}
          </button>

          <button
            type="submit"
            disabled={status === "sending"}
            className={`sm:w-2/3 flex items-center justify-center gap-2 rounded-xl text-white text-sm font-semibold py-3 px-6 shadow-sm transition-all cursor-pointer disabled:opacity-60 ${
              status === "sent"
                ? "bg-emerald-600 hover:bg-emerald-700"
                : status === "error"
                ? "bg-rose-600 hover:bg-rose-700"
                : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-500/20"
            }`}
          >
            {status === "sending" ? (
              <span>{contact.sending}</span>
            ) : status === "sent" ? (
              <>
                <FiCheckCircle size={18} />
                <span>{contact.sentComment}</span>
              </>
            ) : status === "error" ? (
              <>
                <FiAlertCircle size={18} />
                <span>{contact.error}</span>
              </>
            ) : (
              <>
                <FiSend size={16} />
                <span>{buttons.sendComment}</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* MURO DE COMENTARIOS / FEEDBACK */}
      {!loading && comments.length > 0 && (
        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {contact.title} ({comments.length})
          </h4>

          <div className="max-h-60 overflow-y-auto space-y-3 pr-2">
            {comments.map((c, i) => (
              <div
                key={c.id || i}
                className="rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 p-4 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                    {c.name}
                  </p>
                  {c.created_at && (
                    <span className="text-[11px] text-slate-400">
                      {new Date(c.created_at).toLocaleDateString(
                        language === "es" ? "es-MX" : "en-US",
                        { month: "short", day: "numeric", year: "numeric" }
                      )}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {c.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}