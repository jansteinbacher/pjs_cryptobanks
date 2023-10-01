import React from 'react';

const Compartment = ({ title, imageSrc, description, linkedinLink }) => {
  return (
    <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="border rounded-lg p-4 hover:shadow-lg transition duration-300">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <img src={imageSrc} alt={title} className="w-full h-auto mb-2" />
      <p className="text-gray-700">{description}</p>
    </a>
  );
};

const GridWithCompartments = () => {
  const compartmentsData = [
    {
      title: "Experte 1",
      imageSrc: "image1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedinLink: "https://www.linkedin.com/link1",
    },
    {
      title: "Experte 2",
      imageSrc: "image2.jpg",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedinLink: "https://www.linkedin.com/link2",
    },
    {
      title: "Experte 3",
      imageSrc: "image3.jpg",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      linkedinLink: "https://www.linkedin.com/link3",
    },
    {
      title: "Experte 4",
      imageSrc: "image4.jpg",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      linkedinLink: "https://www.linkedin.com/link4",
    },
    {
      title: "Experte 5",
      imageSrc: "image5.jpg",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      linkedinLink: "https://www.linkedin.com/link5",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
        Interviews
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {compartmentsData.map((data, index) => (
          <Compartment
            key={index}
            title={data.title}
            imageSrc={data.imageSrc}
            description={data.description}
            linkedinLink={data.linkedinLink}
          />
        ))}
      </div>



      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        Aufbau & Konzeption
      </h2>

      <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        Fragen
      </h2>

      <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
        Auswertung
      </h2>

      <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>



    </div>
  );
};

export default GridWithCompartments;
