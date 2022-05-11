import React from 'react';
import { Avatar } from '../components';

type Props = { member: { name: string; title: string; img: string } };

const Card: React.FC<Props> = ({ member }) => {
  return (
    <div className="group flex transform flex-col items-center rounded-xl border bg-white p-8 transition-all duration-200 hover:scale-105 dark:border-monochromatic-700 dark:bg-monochromatic-800">
      <Avatar img={member.img} />

      <h1 className="mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white">
        {member.name}
      </h1>

      <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
        {member.title}
      </p>

      <div className="-mx-2 mt-3 flex">
        <a
          href={`/members/${member.name.split(' ').join('-')}`}
          className="text-primary-600 hover:underline dark:text-primary-400"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
