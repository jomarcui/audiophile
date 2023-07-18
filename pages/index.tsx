import type { NextPage } from 'next';
import { HeroLayout } from '../components/Layout';
import Products from '../components/Products';
import ipad from '../public/store-card-13-ipad-nav-202210.png';
import iphone from '../public/store-card-13-iphone-nav-202209.png';
import mac from '../public/store-card-14-16-mac-nav-202301.png';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const products = [
    {
      description: 'Lovable. Drawable. Magical.',
      imageSrc: ipad,
      title: 'iPad',
    },
    { description: 'Wonderfull.', imageSrc: iphone, title: 'iPhone' },
    {
      description: 'Impressively big. Impossibly thin.',
      imageSrc: mac,
      title: 'Mac',
    },
  ];

  return (
    <HeroLayout>
      <Products products={products} />
      <Testimonials />
      <Footer />
    </HeroLayout>
  );
};

export default Home;
