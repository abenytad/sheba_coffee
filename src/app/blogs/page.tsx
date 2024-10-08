import Image from 'next/image';

const cardData = [
  {
    title: 'Card Title 1',
    description: 'This is a description for card 1, showcasing some interesting details.',
    imgSrc: '/images/latte.jpg',
  },
  {
    title: 'Card Title 2',
    description: 'This is a description for card 2, showcasing some interesting details.',
    imgSrc: '/images/latte.jpg',
  },
  {
    title: 'Card Title 3',
    description: 'This is a description for card 3, showcasing some interesting details.',
    imgSrc: '/images/latte.jpg',
  },
  {
    title: 'Card Title 4',
    description: 'This is a description for card 4, showcasing some interesting details.',
    imgSrc: '/images/logo.jpeg',
  },
  {
    title: 'Card Title 5',
    description: 'This is a description for card 5, showcasing some interesting details.',
    imgSrc: '/images/latte.jpg',
  },
  {
    title: 'Card Title 6',
    description: 'This is a description for card 6, showcasing some interesting details.',
    imgSrc: '/images/latte.jpg',
  },
];

export default function BlogsPage() {
  return (
    <div>
      {/* Header Section with Reduced Height */}
      <div
        className="h-[83vh] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('/images/blog.webp')" }}
      >
        <div className="text-center p-6 bg-black bg-opacity-50 rounded-md">
          <h1 className="text-4xl font-bold uppercase text-primary">The Sheba Blog</h1>
          <h2 className="text-3xl font-semibold text-white mt-4">Sheba Coffee and Community</h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white w-[85%] mx-auto py-12 space-y-8">
        {cardData.map((card, index) => (
          <div key={index}>
            <div
              className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="md:w-1/2">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left p-4">
                <h3 className="text-2xl font-bold text-primary mb-4">{card.title}</h3>
                <p className="text-gray-700 text-lg">{card.description}</p>
              </div>
            </div>
            {/* Alternating Line */}
            {index < cardData.length - 1 && (
              <div className="border-b-2 border-secondary my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
