import React from 'react';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import FeaturedRooms from '../components/FeaturedRooms';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Elysium Tours" subTitle="Туры от 500$">
          <Link to="/rooms" className="btn-primary">
            Туры
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
