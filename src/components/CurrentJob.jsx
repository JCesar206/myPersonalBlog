import React from "react";
import { texts } from "../i18n/texts.js";

export default function CurrentJob ({ language = "es" }) {
	const contact = texts[language].contact;

	return (
		<div className="flex items-center space-x-4 p-6 bg-gray-200/50 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-500 dark:bg-gray-900">
			<a href="https://www.asteroi.dev/" target="_blank" rel="noopener noreferrer">
			<img src="/asteroidev.svg" alt="Asteroi.dev" className="bg-purple-900 w-12 h-12 rounded-full object-cover animate-pulse" title={contact.visit}/>
			</a>
			<div className="justify-center items-center gap-2 space-y-2 space-x-2">
				<h2 className="text-xl font-bold text-gray-800 text-center dark:text-white">
					{contact.namePosition}
				</h2>
				<p className="text-gray-600 dark:text-gray-300 font-semibold text-center">{contact.iHaveWork}</p>
				<a href="https://www.asteroi.dev/" target="_blank" rel="noopener noreferrer">
				<p className="text-gray-700 dark:text-white font-bold text-center hover:underline">Asteroi.dev</p>
				</a>
			</div>
		</div>
	);
}