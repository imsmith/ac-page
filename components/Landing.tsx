import React from 'react';
import ky from 'ky';
import { useQuery } from 'react-query';
import {
  HeroHeader,
  IntroSection,
  ProjectListSection,
  MemberHighlight,
} from './';

const Landing: React.FC = () => {
  useQuery('todo', async () => {
    return await ky.get('https://jsonplaceholder.typicode.com/todos/1').json();
  });

  return (
    <>
      <HeroHeader />
      <IntroSection />
      <ProjectListSection />
      <MemberHighlight />
    </>
  );
};

export default Landing;
