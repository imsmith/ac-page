import React from 'react';
import { Avatar } from '../components';

type Props = { member: { name: string; title: string; img: string } };

const CardWithDescription: React.FC<Props> = ({ member }) => {
  return (
    <div className="px-12 bg-white dark:bg-slate-800  py-8 transition hover:scale-105 duration-200 transform border rounded-xl group dark:border-slate-700">
      <div className="flex flex-col sm:flex-row">
        <Avatar img={member.img} />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold text-slate-700 capitalize md:text-2xl dark:text-white">
            {member.name}
          </h1>
          <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
            {member.title}
          </p>
        </div>
      </div>

      <p className="mt-4 text-slate-500 capitalize dark:text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt
        officia aliquam neque optio? Cumque facere numquam est.
      </p>

      <div className="flex mt-4">
        <a
          href={`/members/${member.name.split(' ').join('-')}`}
          className="text-primary-600 dark:text-primary-400 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default CardWithDescription;
