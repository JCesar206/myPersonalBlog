import { useState } from "react";
import { texts } from "../i18n/texts";
import { FiDownload } from "react-icons/fi";

export default function DownloadCertificates({ compact = false, language = "es" }) {
  const t = texts[language];
  const [selected, setSelected] = useState("");

  // 🔑 Lista de certificados
  const certificates = [
    // { file: "", label: t.buttons.downloadCertificate },
    { file: "Introduction_to_Cybersecurity_certificate.pdf", label: t.buttons.introductionToCibersecurity },
    { file: "Cyber_Threat_Management_certificate.pdf", label: t.buttons.cyberThreatManagment },
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
              ? "dark:bg-gray-800 dark:text-white" 
              : "text-black shadow-lg hover:bg-gray-300"}`}
        >
          <option value="" className="font-black italic bg-gray-200">{t.buttons.chooseCertificate || "Selecciona un certificado"}</option>
          {certificates.map((cert, i) => (
            <option key={i} value={cert.file} className="bg-white text-black italic font-semibold">
              {cert.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleDownload}
          disabled={!selected}
          className={`flex gap-4 justify-center md:justify-start items-center font-bold px-4 py-2 rounded-lg transition-transform cursor-pointer
            ${compact 
              ? "text-black dark:bg-gray-800 dark:text-white" 
              : "border-1 border-black text-black font-semibold hover:bg-gray-300"}`}
        >
          <FiDownload size={18} />
          {t.buttons.download}
        </button>
      </div>
    </div>
  );
}