export default function Section({id, className="", children}) {
	return (
		<section
		id={id}
		className={`bg-white rounded-3xl p-10 text-white shadow-xl ${className}`}
		>
			{children}
		</section>
	);
}
{/* 
	 bg-gradient-to-br from-indigo-500 to-violet-600 dark:from-indigo-600 dark:to-violet-700
	*/}