import React from 'react';

const HeroHeader: React.FC = () => {
  return (
    <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')",
        }}
      />
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">
                Architecture Council
              </h1>
              <p className="mt-4 text-lg text-slate-200">
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
