import React from 'react';
import Image from './Image';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  DocumentSearchIcon
} from '@heroicons/react/solid';
import { TableIcon } from '@heroicons/react/outline';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-monochromatic-200 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap" />

        <div className="flex flex-wrap items-center">
          <div className="mr-auto ml-auto w-full px-4 md:w-5/12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center text-monochromatic-500 shadow-lg">
              <UserGroupIcon />
            </div>
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              Architecture Council Charter
            </h3>
            <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-monochromatic-600">
              The purpose of the F5 Architecture Council is to be an
              outcome-based group of key leaders, convening on topics that
              impact our technology, business, and product decisions.
            </p>
          </div>

          <div className="mr-auto ml-auto w-full px-4 md:w-4/12">
            <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-monochromatic-700 shadow-lg">
              <div className="w-full overflow-hidden rounded-t-lg align-middle">
                <Image
                  alt="..."
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  layout="responsive"
                  width={1051}
                  height={701}
                />
              </div>
              <blockquote className="relative mb-4 p-8">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 -top-[94px] block h-[95px] w-full"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="fill-current text-monochromatic-700"
                  ></polygon>
                </svg>
                <p className="text-md mt-2 font-light text-white">
                  The core DNA of this council is commitment on agreements and
                  recommending solutions that address technology and business
                  unification, that will accelerate F5’s mission.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
