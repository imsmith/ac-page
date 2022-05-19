import React from 'react';
import { Avatar } from '../components';
import MdxMemberPage from '../types';
import { members } from '../utils/constants';

type Props = { member: any };

const Card: React.FC<Props> = ({ member }) => {
  const avatarData = members.find((m) => m.name === member.frontmatter.name);

  return (
    <div className="group flex transform flex-col items-center rounded-xl border bg-white p-8 transition-all duration-200 hover:scale-105 dark:border-monochromatic-700 dark:bg-monochromatic-800">
      <Avatar img={avatarData?.img} size="md" />

      <h1 className="mt-4 text-2xl font-semibold capitalize text-monochromatic-700 dark:text-white">
        {member.frontmatter.name}
      </h1>

      <p className="mt-2 capitalize text-monochromatic-500 dark:text-monochromatic-300">
        {member.frontmatter.title}
      </p>

      <div className="-mx-2 mt-3 flex">
        <a
          href={`/member/${member.slug}`}
          className="text-primary-600 hover:underline dark:text-primary-400"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Card;
