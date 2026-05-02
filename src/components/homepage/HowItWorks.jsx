import React from 'react';
import { FaMagnifyingGlass, FaBookOpen, FaUserCheck } from 'react-icons/fa6';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Find Your Book',
      description: 'Search through our vast collection of books across various categories to find your next favorite read.',
      icon: <FaMagnifyingGlass className="text-3xl" />,
    },
    {
      id: 2,
      title: 'Borrow Digitally',
      description: 'Easily borrow books with a single click. Keep track of your borrowed books in your personal profile.',
      icon: <FaBookOpen className="text-3xl" />,
    },
    {
      id: 3,
      title: 'Enjoy Reading',
      description: 'Dive into the stories, learn new skills, and enjoy the seamless reading experience with Book Buddy.',
      icon: <FaUserCheck className="text-3xl" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-base-100 animate__animated animate__fadeInUp">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12 text-lg">
          Your journey to discovering great books is just three simple steps
          away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(step => (
            <div
              key={step.id}
              className="p-8 rounded-3xl bg-base-200/50 hover:bg-base-200 border  hover:border-primary/30 border-base-300 transition-all duration-300  group"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-base-content/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
