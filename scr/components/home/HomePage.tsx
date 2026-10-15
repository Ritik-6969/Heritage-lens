import React from 'react';
import { Hero } from './Hero';
import { DiscoverCategories } from './DiscoverCategories';
import { FeaturedDestinations } from './FeaturedDestinations';
import { SmartTravelBento } from './SmartTravelBento';
import { ScamShieldTeaser } from './ScamShieldTeaser';
import { HeritageQuestTeaser } from './HeritageQuestTeaser';
import { CultureTeaser } from './CultureTeaser';
import { ResponsibleTeaser } from './ResponsibleTeaser';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      <DiscoverCategories />
      <FeaturedDestinations />
      <SmartTravelBento />
      <ScamShieldTeaser />
      <HeritageQuestTeaser />
      <CultureTeaser />
      <ResponsibleTeaser />
    </div>
  );
};
