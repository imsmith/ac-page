import React from 'react';
import { Avatar } from '../components';

type Props = { member: { name: string; title: string; img: string } };

const Card: React.FC<Props> = ({ member }) => {
  return (
    <div className="bg-white dark:bg-slate-800 flex flex-col items-center p-8 duration-200 transform border rounded-xl group transition-all hover:scale-105 dark:border-slate-700">
      <Avatar img={member.img} />

      <h1 className="mt-4 text-2xl font-semibold text-slate-700 capitalize dark:text-white">
        {member.name}
      </h1>

      <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
        {member.title}
      </p>

      <div className="flex mt-3 -mx-2">
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

export default Card;
