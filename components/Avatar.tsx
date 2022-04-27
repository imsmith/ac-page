import React from 'react';
import { Image } from '../components';
import { UserIcon } from '@heroicons/react/solid';
import { ImageProps } from 'next/image';

type Props = { img?: ImageProps['src'] };

const Avatar: React.FC<Props> = ({ img }) => {
  return (
    <div>
      {img ? (
        <Image
          alt="..."
          src={img}
          width={128}
          height={128}
          className="overflow-hidden rounded-full"
        />
      ) : (
        <div className="object-cover w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
          <UserIcon className="text-slate-300 dark:text-slate-900 h-12 w-12" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
