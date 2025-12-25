import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

	return (
		<form onSubmit={handleSubmit} className="mt-8 rounded-3xl p-8 bg-gradient-to-br text-white shadow-xl space-y-5 font-sans">
			<h3 className="text-2xl font-bold">Envíame un mensaje</h3>

			<input type="text" name="name" placeholder="Tu nombre" value={form.name} onChange={handleChange} required className="w-full rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white/60 border-1 border-white"/>

			<input type="email" name="email" placeholder="Tu correo" value={form.email} onChange={handleChange} required className="w-full rounded-xl px-4 py-3 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white/60 border-1 border-white"/>

			<textarea name="message" placeholder="Tu mensaje" rows="4" value={form.message} onChange={handleChange} required
  className="w-full rounded-xl px-4 py-3 bg-white text-white font-semibold placeholder-zinc-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"/>

			<button type="submit" disabled={status === "sending"} className="w-full rounded-xl bg-white text-purple-600 font-bold py-3 hover:bg-purple-700 hover:text-white cursor-pointer transition disabled:opacity-60">
				{status === "sending" ? "Enviado..." : status === "sent" ? "Mensaje enviado ✔" : "Enviar mensaje"}
			</button>
		</form>
	);
}

export default ContactForm;