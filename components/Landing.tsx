import React from 'react';
import ky from 'ky';
import { useQuery } from 'react-query';
import HeroHeader from './HeroHeader';
import IntroSection from './IntroSection';
import ProjectListSection from './ProjectListSection';
import TeamSection from './TeamSection';

const Landing: React.FC = () => {
  useQuery('todo', async () => {
    return await ky.get('https://jsonplaceholder.typicode.com/todos/1').json();
  });

  return (
    <>
      <HeroHeader />
      <IntroSection />
      <ProjectListSection />
      <TeamSection />

      <section className="pb-20 relative block bg-slate-800">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Questions?</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400">
                Please reach out to Laura Hendrickson and/or Vin Vu with any
                questions. Or visit our{' '}
                <span>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={
                      'https://f5.sharepoint.com/sites/OCTO-COMS/architecture/'
                    }
                    className="underline cursor-pointer hover:text-blue-400"
                  >
                    SharePoint
                  </a>
                </span>{' '}
                page for more info.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
