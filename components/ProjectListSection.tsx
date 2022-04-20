import React from 'react';
import Image from './Image';
import { DocumentDuplicateIcon } from '@heroicons/react/solid';

const documents = [
  {
    title: 'Carefully crafted components',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/Allitems.aspx?id=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers/PoV-Universal_Telemetry_Endpoint_for_F5.docx.pdf&parent=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers',
  },
  {
    title: 'Universal Telemetry Endpoint for F5',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/Allitems.aspx?id=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers/PoV-Universal_Telemetry_Endpoint_for_F5.docx.pdf&parent=/sites/OCTO-COMS-HUB/Shared%20Documents/General/Architecture%20Council%20Position%20Papers',
  },
  {
    title: 'The Case for ARM',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FThe%20Case%20For%20ARM%20%2D%20F5%20Architecture%20Council%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
  {
    title: 'System Software Strategy',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FF5%20System%20Software%20Ecosystem%20Position%20%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
  {
    title: 'Unifying F5 Service Mesh',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FUnifying%20F5%20Service%20Mesh%20Architecture%20Council%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
  {
    title: 'Implement Open Telemetry',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FImplement%20Open%20Telemetry%20Framework%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
  {
    title: 'Open Source Contribution',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FPosition%20for%20Open%20Source%20Contribution%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
  {
    title: 'Unified Control and Management Plane',
    link: 'https://f5.sharepoint.com/sites/OCTO-COMS/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers%2FUnified%20Control%20%26%20Mgmt%20Plane%20Position%2Epdf&parent=%2Fsites%2FOCTO%2DCOMS%2FShared%20Documents%2FGeneral%2FArchitecture%20Council%20Position%20Papers',
  },
];

const ProjectListSection: React.FC = () => {
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <div className="w-full align-middle rounded-lg overflow-hidden shadow-lg">
              <Image
                alt="..."
                src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                layout="responsive"
                width={987}
                height={1481}
              />
            </div>
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-slate-200">
                <DocumentDuplicateIcon />
              </div>
              <h3 className="text-3xl font-semibold">
                Currently Signed Documents
              </h3>
              <ul className="list-none mt-6">
                {documents.map((doc, index) => (
                  <li key={index} className="py-2 flex items-center">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={doc.link}
                    >
                      <h4 className="text-slate-500 underline cursor-pointer hover:text-blue-400">
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
