import React from 'react';
import { members } from '../../utils/constants';
import { Avatar, TwitterIcon, LinkdinIcon, GithubIcon } from '../../components';
import type { NextPage } from 'next';

const Member: NextPage = () => {
  return (
    <section className="bg-white dark:bg-slate-900 flex-1">
      <div className="container px-6 py-10 mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col sm:mr-12 sm:mb-0 mb-8">
            <Avatar img={members[0].img} />

            <h1 className="mt-4 text-2xl font-semibold text-slate-700 capitalize dark:text-white">
              {members[0].name}
            </h1>

            <p className="mt-2 text-slate-500 capitalize dark:text-slate-300">
              {members[0].title}
            </p>

            <div className="text-slate-700 dark:text-white mt-2">
              <p className="text-base">Socials</p>
              <div className="flex mt-2">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://github.com/`}
                  className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                >
                  <GithubIcon />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://linkedin.com/`}
                  className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                >
                  <LinkdinIcon />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://twitter.com/`}
                  className="hover:opacity-70 mr-2 text-slate-500 dark:text-slate-300"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
          <article className="flex-1 text-slate-900 dark:text-white p-2">
            <div>
              Irure mollit occaecat est consequat ad incididunt dolor nulla sunt
              Lorem.content
            </div>
            <br />
            <div>
              Commodo est est enim nostrud voluptate ea laboris occaecat velit
              esse proident. Ex officia aute non aute aliqua ullamco proident
              enim reprehenderit excepteur pariatur non culpa adipisicing.
              Proident anim labore dolor sint excepteur ullamco exercitation.
              Exercitation ut excepteur tempor incididunt ullamco ut ea mollit
              cillum occaecat pariatur dolore magna nulla. Magna nostrud
              incididunt exercitation officia. Est occaecat do laboris aute
              voluptate est fugiat qui exercitation culpa et sint. Dolor magna
              voluptate quis. Non aliquip commodo nisi occaecat id nulla
              proident nulla veniam ut. Voluptate deserunt magna amet sit amet
              irure officia officia commodo. Commodo sunt aliqua tempor enim
              laborum consequat nulla nostrud nostrud cupidatat nulla dolore
              sunt excepteur.
            </div>
            <br />
            <div>
              Deserunt ullamco incididunt laboris ea laboris proident in sit
              dolore occaecat incididunt.
            </div>
            <br />
            <div>
              Occaecat cillum ullamco voluptate mollit voluptate. Officia mollit
              non id officia ut amet laboris. Ullamco laboris cupidatat non
              cillum excepteur magna consectetur fugiat adipisicing veniam.
              Laboris nostrud eiusmod irure. Sit minim anim in deserunt irure.
              Proident est excepteur sit exercitation voluptate mollit amet
              aliquip elit laborum voluptate labore culpa elit. Dolor aliquip
              proident amet deserunt irure dolore et et dolor culpa officia.
              Aute exercitation cillum minim quis commodo. Ullamco ipsum amet
              tempor labore. Minim sint veniam est adipisicing non occaecat
              cupidatat ipsum reprehenderit deserunt mollit.
            </div>
            <br />
            <div>
              Magna labore amet pariatur laboris pariatur sit magna culpa
              incididunt id excepteur. Do magna qui labore veniam nostrud
              ullamco ullamco tempor do. Ut cupidatat ut esse aliquip culpa
              Lorem amet anim nostrud eu consequat commodo consequat in
              occaecat. Id in labore tempor nisi nisi laborum nostrud. Dolore
              ipsum irure sunt nulla. Tempor consectetur tempor consequat. Ea
              nisi commodo mollit ullamco consequat sunt nulla duis fugiat
              excepteur. Sint anim esse aliqua mollit consequat mollit ipsum in.
              Ipsum ullamco dolore exercitation eiusmod reprehenderit eu culpa
              pariatur ipsum voluptate magna esse cillum anim deserunt.
              Reprehenderit dolor est mollit ea aute irure ex esse.
            </div>
            <br />
            <div>Ex et nulla laborum incididunt ullamco voluptate.</div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Member;
