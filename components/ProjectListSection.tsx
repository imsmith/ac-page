import React from 'react';
import Image from './Image';
import { DocumentDuplicateIcon } from '@heroicons/react/solid';

const documents = [
  {
    title: 'Carefully crafted components',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/Allitems.aspx?id=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers/PoV-Universal_Telemetry_Endpoint_for_F5.docx.pdf&parent=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers'
  },
  {
    title: 'Universal Telemetry Endpoint for F5',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/Allitems.aspx?id=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers/PoV-Universal_Telemetry_Endpoint_for_F5.docx.pdf&parent=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers'
  },
  {
    title: 'The Case for ARM',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FThe%20Case%20For%20ARM%20%2D%20F5%20Architecture%20Council%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  },
  {
    title: 'System Software Strategy',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FF5%20System%20Software%20Ecosystem%20Position%20%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  },
  {
    title: 'Unifying F5 Service Mesh',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FUnifying%20F5%20Service%20Mesh%20Architecture%20Council%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  },
  {
    title: 'Implement Open Telemetry',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FImplement%20Open%20Telemetry%20Framework%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  },
  {
    title: 'Open Source Contribution',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FPosition%20for%20Open%20Source%20Contribution%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  },
  {
    title: 'Unified Control and Management Plane',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FUnified%20Control%20%26%20Mgmt%20Plane%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers'
  }
];

const ProjectListSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
            <div className="w-full overflow-hidden rounded-lg align-middle shadow-lg">
              <Image
                alt="..."
                src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                layout="responsive"
                width={987}
                height={1481}
              />
            </div>
          </div>
          <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
            <div className="pt-12 md:pr-12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-monochromatic-200 p-3 text-center text-monochromatic-500 shadow-lg">
                <DocumentDuplicateIcon />
              </div>
              <h3 className="text-3xl font-semibold dark:text-white">
                Products of Interest
              </h3>
              <ul className="mt-6 list-none">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center py-2">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={doc.link}
                    >
                      <h4 className="cursor-pointer text-monochromatic-500 underline hover:text-primary-400">
                        {doc.title}
                      </h4>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListSection;
