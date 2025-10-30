export default function Card({ title, description, image, link, language }) {
  const buttonText = {
    es: "Ir al proyecto",
    en: "Go to project",
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow w-full max-w-xs flex flex-col h-full transform transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title[language]}
        className="w-full h-40 object-contain"
      />
      <div className="flex flex-col justify-between flex-grow p-4 shadow-2xl hover:shadow-blue-900">
        <div>
          <h3 className="text-xl font-bold text-indigo-900 dark:text-white text-center">{title[language]}</h3>
          <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-white">{description[language]}</p>
        </div>
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-blue-400 font-bold text-white rounded hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-900"
          >
            {buttonText[language]}
          </a>
        </div>
      </div>
    </div>
  );
}