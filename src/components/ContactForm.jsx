import { useState, useEffect } from "react";

const STORAGE_KEY = "portfolio-comments";

const texts = {
  es: {
    title: "Deja un comentario",
    name: "Tu nombre",
    email: "Tu correo (opcional)",
    message: "Escribe tu comentario",
    sending: "Guardando...",
    sent: "Comentario guardadado ✔",
    submit: "Enviar comentairo",
    comments: "Comentarios",
  },
  en: {
    title: "Leave a coment",
    name: "Your name",
    email: "Your email (optional)",
    message: "Write your comment",
    sending: "Saving...",
    sent: "Comment saved ✔",
    submit: "Send comment",
    comments: "Comments",
  },
};

export default function ContactForm({ language = "es" }) {
  const t = texts[language];

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [comments, setComments] = useState([]);

  // Cargar comentarios guardados
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setComments(saved);
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const newComment = {
      ...form,
      date: new Date().toISOString(),
    };

    const updatedComments = [newComment, ...comments];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments));
    setComments(updatedComments);

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 2500);
    }, 800);
  };

  return (
    <section className="relative mt-4 space-y-10">
      {/*Form*/}
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white dark:bg-gray-900 shadow-xl p-6 space-y-5">
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white text-center">
            {t.title}
          </h3>

          <input
            type="text"
            name="name"
            placeholder={t.name}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border-1 border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder={t.email}
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border-1 border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder={t.message}
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full rounded-xl border-1 border-indigo-400 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-xl bg-indigo-600 text-white font-bold py-3 hover:bg-indigo-700 transition disabled:opacity-60 cursor-pointer"
          >
            {status === "sending" ? t.sending : status === "sent" ? t.sent : t.submit}
          </button>
        </form>

        {/*Comments List*/}
        {comments.length > 0 && (
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