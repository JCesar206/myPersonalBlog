{/*el usuario puede colocar el sitio, usuario y contraseña. the user can enter the site, username and password and.*/}
{/*que permite sumar articulos al carrito, suma la cantidad total y descuenta los articulos del stock o los devuelve segun sea el caso.  that allows you to add items to your cart, add up the total amount, and deduct items from stock or return them as appropriate. */}

import Card from "../components/Card";

export default function Projects({ language }) {
	const title = language === "es" ? "Proyectos" : "Projects";
	const projects = [
		{
			title: {
				es: "Administrador de Password",
				en: "Password Manager",
			},
			image: "./passwordManager01.jpg",
			description: {
				es: "Aplicación administradora de contraseñas. La app guarda localmente su nombre de usuario y contraseña de forma segura.",
				en: "Password manager app. The app securely stores your username and password locally.",
		},
		link: "https://jcesar206.github.io/passwordManager/",
	},
	{
		title: {
			es: "Ecommerce Loco",
			en: "Crazy Ecommerce",
		},
		image: "./ecommerceSimple01.jpg",
		description: {
			es: "Comercio electrónico. Simula una compra completa de productos que se encontraban en un carrito de compras.",
			en: "E-commerce. Simulates a complete purchase of products that were in a shopping cart.",
		},
		link: "https://jcesar206.github.io/ecommerce-react/",
	},
	{
		title: {
			es: "Nota Loka",
			en: "Crazy Note",
		},
		image: "./localNotes01.jpg",
		description: {
			es: "Nota Loca Local. La aplicación permite guardar notas en almacenamiento local.",
			en: "Note Loca Local. The application allows you to save notes in localStorage.",
		},
		link: "https://jcesar206.github.io/localNotes/"
	},
	{
		title: {
			es: "Finanzas Personales",
			en: "Personal Finance",
		},
		image: "./personalExpenses01.jpg",
		description: {
			es: "Finanzas personales. Permite gestionar de forma simple los gastos e ingresos a una cuenta.",
			en: "Personal finance. It allows you to easily manage expenses and income to an account.",
		},
		link: "https://jcesar206.github.io/personalExpenses-React/",
	},
	{
		title: {
			es: "Mini Red Social",
			en: "Mini Social Media",
		},
		image: "./miniSocialMedia01.jpg",
		description: {
			es: "Mini red social que permite agregar imagenes, emojis y comentarios de forma divertida.",
			en: "A mini social network that allows you to add images, emojis, and comments in a fun way.",
		},
		link: "https://jcesar206.github.io/miniSocialMediaTS/",
	},
	];
	

	return (
		<section id="about">
  			<div className="bg-gradient-to-br from-indigo-500 to-violet-500 dark:from-indigo-600 dark:to-violet-700 max-w-5xl mx-auto rounded-xl p-5">
				<h2 className="text-2xl font-bold mb-6 text-white dark:text-white text-center">{title}</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
				{projects.map(p => (
					<Card key={p.title.es} {...p} language={language} />
				))}
				</div>
			</div>
		</section>
	);
}