import Card from "../components/Card";
import BackToTop from "./BackToTop";

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
	{
	title: {
		es: "PockétApi App",
		en: "PocketApi App",
	},
	image: "./pocketApi01.jpg",
	description: {
		es: "PocketApi App Esta app permite buscar a tu pokémon favorito por nombre o número de identificador mostrando sus caracteristicas y hábilidades. Un pequeño viaje a la nostalgia.",
		en: "PocketApi App This app lets you search for your favorite Pokémon by name or ID number, displaying its characteristics and abilities. A little trip down memory lane."
	},
		link: "https://jcesar206.github.io/pokeApiReact/",
	},
	];
	

	return (
		<section id="projects" className="space-y-10">
				<h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 dark:text-indigo-700">
					{title}
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((p) => (
					<Card key={p.title.es} {...p} language={language} />
				))}
				</div>
				<BackToTop/>
		</section>
	);
}