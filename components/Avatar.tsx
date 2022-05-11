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
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-monochromatic-100 object-cover dark:bg-monochromatic-700">
          <UserIcon className="h-12 w-12 text-monochromatic-300 dark:text-monochromatic-900" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
