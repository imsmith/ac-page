import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative block bg-monochromatic-400 dark:bg-monochromatic-800">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full px-4 lg:w-6/12">
            <h2 className="text-xl font-semibold text-monochromatic-700 dark:text-white md:text-4xl">
              Questions?
            </h2>
            <p className="mt-4 mb-4 text-sm leading-relaxed text-monochromatic-700 dark:text-monochromatic-400 md:text-lg">
              Please reach out to Laura Hendrickson and/or Vin Vu with any
              questions. Or visit our{' '}
              <span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    'https://f5.sharepoint.com/sites/OCTO-COMS/architecture/'
                  }
                  className="cursor-pointer underline hover:text-primary-400"
                >
                  SharePoint
                </a>
              </span>{' '}
              page for more info.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
