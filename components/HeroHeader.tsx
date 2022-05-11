import React from 'react';

const HeroHeader: React.FC = () => {
  return (
    <section className="relative flex min-h-[75vh] content-center items-center justify-center pt-16 pb-32">
      <div
        className="absolute top-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')"
        }}
      />
      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
            <div className="pr-12">
              <h1 className="text-5xl font-semibold text-white">
                Architecture Council
              </h1>
              <p className="mt-4 text-lg text-monochromatic-200">
                A community of architects within F5 working with the Office of
                the CTO to accelerate F5&apos;s transformation to a unified
                architectural future
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
