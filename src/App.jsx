import React from 'react';
import { ButtonSection, FAQ, Navbar, OfferBar, Reviews, TrustedSection, Footer, Policies, Updates, SimilarItems, ProductsView, HeroSection } from './components';
import './App.scss';


const App = () => {
  return (
    <>
      <div className='app-container'>

        <div className='container-1'>
          <OfferBar />
        </div>

        <div className='container-2'>
          <Navbar />
        </div>

        <div>
          <HeroSection />
          <Reviews />
          <Policies />
          <ProductsView />
          <TrustedSection />
        </div>


        <div className='app-btn-section'>
          <ButtonSection />
        </div>


        <div>
          <Updates />
          <FAQ />
          <SimilarItems />
          <Footer />
        </div>


      </div>
    </>
  )
}

export default App;