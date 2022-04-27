import NextImage, { ImageProps, ImageLoader } from 'next/image';

// opt-out of image optimization, no-op
const customLoader: ImageLoader = ({ src }) => {
  return src;
};

export default function Image(props: ImageProps) {
  return <NextImage unoptimized={true} {...props} loader={customLoader} />;
}
