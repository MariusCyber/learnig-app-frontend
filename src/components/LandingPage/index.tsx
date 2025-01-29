  import Card from "../Card";

type Course = {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const LandingPage = () => {
  const courses: Course[] = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Introducere în TypeScript",
      description: "Învață TypeScript pentru aplicații scalabile.",
      buttonText: "Vezi detalii",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "React Avansat",
      description: "Perfecționează-ți abilitățile de React.",
      buttonText: "Începe acum",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Design Responsiv",
      description: "Creează site-uri care arată bine pe orice dispozitiv.",
      buttonText: "Detalii curs",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-3xl font-bold">Platforma Ta de eLearning</h1>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Cursuri Populare</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              image={course.image}
              title={course.title}
              description={course.description}
              buttonText={course.buttonText}
            />
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        © 2025 Platforma Ta de eLearning
      </footer>
    </div>
  );
};

export default LandingPage;
