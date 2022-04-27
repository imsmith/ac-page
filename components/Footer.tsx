import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative block bg-slate-800">
      <div className="container mx-auto px-4 lg:py-24 py-12">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Questions?</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-400">
              Please reach out to Laura Hendrickson and/or Vin Vu with any
              questions. Or visit our{' '}
              <span>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    'https://f5.sharepoint.com/sites/OCTO-COMS/architecture/'
                  }
                  className="underline cursor-pointer hover:text-primary-400"
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
