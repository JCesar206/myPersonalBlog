import { useState } from "react";
import { texts } from "../i18n/texts";
import { FiDownload } from "react-icons/fi";

export default function DownloadCertificates({ compact = false, language = "es" }) {
  const t = texts[language];
  const [selected, setSelected] = useState("");

  // 🔑 Lista de certificados
  const certificates = [
    { file: "certificate.pdf", label: t.buttons.downloadCertificate },
    { file: "certificado_Fullstack.pdf", label: "Fullstack Certificate" },
    { file: "certificado_React.pdf", label: "React Certificate" },
    { file: "certificado_Node.pdf", label: "Node.js Certificate" },
    { file: "certificado_Tailwind.pdf", label: "Tailwind Certificate" },
    { file: "certificado_Ingles.pdf", label: "English Certificate" },
  ];

  const handleDownload = () => {
    if (!selected) return;
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}${selected}`;
    link.download = selected;
    link.click();
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center justify-center gap-2">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={`rounded-lg border px-3 py-2 text-sm font-semibold cursor-pointer
            ${compact 
              ? "text-indigo-600 border-indigo-400 dark:bg-gray-800 dark:text-white" 
              : "bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg"}`}
        >
          <option value="" className="font-black italic bg-violet-300">{t.buttons.chooseCertificate || "Selecciona un certificado"}</option>
          {certificates.map((cert, i) => (
            <option key={i} value={cert.file}
            className="bg-violet-200 text-violet-600 hover:bg-violet-300 dark:bg-white dark:text-violet-600 italic font-semibold"
            >
              {cert.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleDownload}
          disabled={!selected}
          className={`flex gap-4 justify-center md:justify-start items-center font-bold px-4 py-2 rounded-lg hover:scale-105 transition-transform cursor-pointer
            ${compact 
              ? "text-indigo-600 border-indigo-400 dark:bg-gray-800 dark:text-white" 
              : "bg-gradient-to-r from-indigo-400 via-violet-500 to-blue-400 text-white shadow-lg"}`}
        >
          <FiDownload size={18} />
          {t.buttons.download}
        </button>
      </div>
    </div>
  );
}