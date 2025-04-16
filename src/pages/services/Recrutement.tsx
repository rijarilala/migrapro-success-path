
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecrutementHero from '@/components/services/recrutement/RecrutementHero';
import RecrutementSubscription from '@/components/services/recrutement/RecrutementSubscription';

const Recrutement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <RecrutementHero />
        <RecrutementSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Recrutement;
