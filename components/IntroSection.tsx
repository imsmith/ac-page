import React from 'react';
import Image from './Image';
import {
  UserGroupIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  DocumentSearchIcon,
} from '@heroicons/react/solid';
import { TableIcon } from '@heroicons/react/outline';

const IntroSection: React.FC = () => {
  return (
    <section className="pb-20 bg-slate-200 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-3/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <AcademicCapIcon />
                </div>
                <h6 className="text-xl font-semibold">Experience</h6>
                <p className="mt-2 mb-4 text-slate-500">
                  It&apos;s all about the experience. Both external and internal
                  view of the customer experience
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 bg-blue-400 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                  <TableIcon />
                </div>
                <h6 className="text-xl font-semibold">Telemetry</h6>
                <p className="mt-2 mb-4 text-slate-500">
                  It&apos;s all about what the data we need (products, services,
                  etc.), the methods in which we acquire that data, and the
                  capabilities we deploy
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-3/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                  <DocumentSearchIcon />
                </div>
                <h6 className="text-xl font-semibold">Observability</h6>
                <p className="mt-2 mb-4 text-slate-500">
                  It&apos;s all about what you do with the data once you have
                  it, and the capabilities of the company to make that data or
                  service consumable
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-violet-400">
                  <ShieldCheckIcon />
                </div>
                <h6 className="text-xl font-semibold">Security</h6>
                <p className="mt-2 mb-4 text-slate-500">
                  We are growing into a security company with many touch points,
                  risk management challenges, and products. We need to build to
                  that end!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <UserGroupIcon />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Architecture Council Charter
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
              The purpose of the F5 Architecture Council is to be an
              outcome-based group of key leaders, convening on topics that
              impact our technology, business, and product decisions.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
              <div className="w-full align-middle rounded-t-lg overflow-hidden">
                <Image
                  alt="..."
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                  layout="responsive"
                  width={1051}
                  height={701}
                />
              </div>
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-[95px] -top-[94px]"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-slate-700 fill-current"
                  ></polygon>
                </svg>
                <p className="text-md font-light mt-2 text-white">
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
