import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    '/images/latte.jpg',
    '/images/logo.jpeg',
    '/images/latte.jpg',
    '/images/logo.jpeg',
    '/images/latte.jpg',
  ];

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Sheba&apos;s Gallery</h1>
      <p className="mb-6">A beautiful collection of our cherished moments.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              layout="responsive" // This allows the image to scale responsively
              width={500} // A placeholder width for aspect ratio
              height={300} // A placeholder height for aspect ratio
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
