import {
  Billing,
  Business,
  CallToAction, 
  CardDeal,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full oveflow-hidden">
      <div
        id="navbarComponent"
        className={`${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div id="heroComponent" className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        id="heroComponent"
        className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CallToAction/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
