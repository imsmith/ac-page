import React from 'react';
import { Avatar } from '../components';

type Props = {
  member: { name: string; title: string; description?: string; img: string };
};

const CardWithDescription: React.FC<Props> = ({ member }) => {
  return (
    <div className="group transform rounded-xl border bg-white px-12 py-8 shadow transition duration-200 hover:scale-105 dark:border-monochromatic-700 dark:bg-monochromatic-800">
      <div className="flex flex-col sm:flex-row">
        <Avatar img={member.img} size="lg" />

        <div className="mt-4 sm:mx-4 sm:mt-0">
          <h1 className="text-xl font-semibold capitalize text-monochromatic-700 dark:text-white md:text-2xl">
            {member.name}
          </h1>
          <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
            {member.title}
          </p>
        </div>
      </div>

      <p className="mt-4 capitalize text-monochromatic-500 dark:text-monochromatic-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt
        officia aliquam neque optio? Cumque facere numquam est.
      </p>

      <div className="mt-4 flex">
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

export default CardWithDescription;
