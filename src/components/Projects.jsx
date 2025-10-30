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
				es: "Aplicación administradora de contraseñas, el usuario puede colocar el sitio, usuario y contraseña y la app guarda localmente su información de forma segura.",
				en: "Password manager application, the user can enter the site, username and password and the app saves their information locally and securely.",
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
			es: "Comercio electrónico que permite sumar articulos al carrito, suma la cantidad total y descuenta los articulos del stock o los devuelve segun sea el caso. Simula una compra completa.",
			en: "E-commerce that allows you to add items to your cart, add up the total amount, and deduct items from stock or return them as appropriate. Simulates a complete purchase.",
		},
		link: "https://jcesar206.github.io/ecommerce-react/",
	},
	{
		title: {
			es: "Nota Loka",
			en: "Crazy Note",
		},
		image: "./crazyNote01.jpg",
		description: {
			es: "Nota Loca con Base de Datos. Este proyecto te permite tener una cuenta personal y poder crear notas, guardarlas, editarlas, eliminarlas de la base de datos.",
			en: "Crazy Notes with Database. This project allows you to have a personal account and create notes, save them, edit them, and delete them from the database.",
		},
		link: "https://jcesar206.github.io/notesFront/"
	},
	{
		title: {
			es: "Finanzas Personales",
			en: "Personal Finance",
		},
		image: "./personalFinance01.jpg",
		description: {
			es: "Finanzas personales Aplicacion de finanzas personales hecha con Vue + Tailwind permite gestionar de forma simple los gastos e ingresos a una cuenta.",
			en: "Personal Finance.A personal finance app built with Vue + Tailwind that allows you to easily manage expenses and income in an account.",
		},
		link: "https://jcesar206.github.io/personalFinanceVue/",
	},
	{
		title: {
			es: "Mini Red Social",
			en: "Mini Social Media",
		},
		image: "./miniSocialMedia01.jpg",
		description: {
			es: "Con esta app puedes subir imagenes locales, comentarios y colocarles emojis simples al igual que editar y eliminar el comentario. Disfruta esta mini red social.",
			en: "With this app, you can upload local images and comments, add simple emojis, and edit and delete comments. Enjoy this mini social network.",
		},
		link: "https://jcesar206.github.io/miniSocialMediaTS/",
	},
	];

	return (
		<section id="about" className="pt-20 pb-12 px-4">
  			<div className="max-w-5xl mx-auto bg-blue-100 dark:bg-gray-800/20 rounded-xl p-8 shadow-2xl shadow-blue-700">
				<h2 className="text-2xl font-bold mb-6 text-blue-500 hover:text-blue-500 dark:text-white text-center">{title} 📱</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
				{projects.map(p => (
					<Card key={p.title.es} {...p} language={language} />
				))}
				</div>
			</div>
		</section>
	);
}