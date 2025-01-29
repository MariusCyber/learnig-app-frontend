interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ image, title, description, buttonText }: CardProps) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
