import Header from '../components/Header';
import HeroBanners from '../components/HeroBanners';
import TopCategories from '../components/TopCategories';
import ExclusiveOffers from '../components/ExclusiveOffers';
import FlashDeal from '../components/FlashDeal';
import NykaaSale from '../components/NykaaSale';
import BuykaroDeals from '../components/BuykaroDeals';
import MyntraDeals from '../components/MyntraDeals';
import AmazonTopSelling from '../components/AmazonTopSelling';
import BankKaroOffers from '../components/BankKaroOffers';
import HowItWorks from '../components/HowItWorks';
import ReferralBanner from '../components/ReferralBanner';
import SiteStats from '../components/SiteStats';
import TopCoupons from '../components/TopCoupons';
import PopularSales from '../components/PopularSales';
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroBanners />
        <TopCategories />
        <ExclusiveOffers />
        <FlashDeal />
        <NykaaSale />
        <BuykaroDeals />
        <MyntraDeals />
        <AmazonTopSelling />
        <BankKaroOffers />
        <HowItWorks />
        <ReferralBanner />
        <SiteStats />
        <TopCoupons />
        <PopularSales />
        <Achievements />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}