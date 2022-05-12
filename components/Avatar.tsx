import React from 'react';
import { Image } from '../components';
import { UserIcon } from '@heroicons/react/solid';
import { ImageProps } from 'next/image';
import cx from 'classnames';

const imgSizesMap = {
  sm: 8,
  md: 16,
  lg: 32
};

type Props = {
  img?: ImageProps['src'];
  size?: keyof typeof imgSizesMap;
};

const Avatar: React.FC<Props> = ({ img, size = 'md' }) => {
  return (
    <div>
      {img ? (
        <Image
          alt="..."
          src={img}
          width={imgSizesMap[size] * 4}
          height={imgSizesMap[size] * 4}
          className="overflow-hidden rounded-full"
        />
      ) : (
        <div
          className={cx(
            `flex items-center justify-center overflow-hidden rounded-full bg-monochromatic-100 object-cover dark:bg-monochromatic-700`,
            {
              'h-32 w-32': size === 'lg',
              'h-16 w-16': size === 'md',
              'h-8 w-8': size === 'sm'
            }
          )}
        >
          <UserIcon className="h-1/2 w-1/2 text-monochromatic-300 dark:text-monochromatic-900" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
