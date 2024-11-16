import React, { useState } from "react";
import "./App.css";

function App() {
  const [modalImage, setModalImage] = useState(null);
  const [modalPackage, setModalPackage] = useState(null);

  const openPackageModal = (pkg) => {
    setModalPackage(pkg);
  };

  const closePackageModal = () => {
    setModalPackage(null);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const Weddingimages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
  ];
  const babyimages = [
    "/images/baby1.jpg",
    "/images/baby2.jpg",
    "/images/baby3.jpg",
    "/images/baby4.jpg",
    "/images/baby5.jpg",
    "/images/baby6.jpg",
  ];

  const Weddingpackages = [
    { 
      name: "Basic Package", 
      description: "Perfect for small events", 
      price: "Rs.40000", 
      details: "This package includes a 2-hour shoot, 30 edited images, and a basic album." 
    },
    { 
      name: "Standard Package", 
      description: "Includes portrait and event photography", 
      price: "Rs.55000", 
      details: "This package includes a full day shoot, 100 edited images, an album, and a digital gallery." 
    },
    { 
      name: "Premium Package", 
      description: "Full day shoot with unlimited edits", 
      price: "Rs.700000", 
      details: "This premium package includes an entire day shoot, 200 edited images, an album, digital gallery, and unlimited edits." 
    },
  ];
  const babypackages = [
    { 
      name: "Basic Package", 
      description: "Baby Shoot", 
      price: "Rs.15000", 
      details: "This package includes a 2-hour shoot, 30 edited images, and a basic album." 
    },
    { 
      name: "Standard Package", 
      description: "Family Shoot", 
      price: "Rs.25000", 
      details: "This package includes a Family Shoot, 100 edited images, an album, and a digital gallery." 
    },
  ];

  return (
    <div className="App">
      <header className="hero">
        <h1 className="hero-title">Capture Life's Moments</h1>
        <p className="hero-subtitle">Photography by Kiran</p>
      </header>

      <section className="gallery">
        <h1 className="ection-title portfolio-title">My Portfolio</h1>
        <h1 className="section-title weddings-title">Weddings</h1>
        <div className="gallery-grid">
          {Weddingimages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wedding Photo ${index + 1}`}
              onClick={() => setModalImage(src)} // changed here
            />
          ))}
        </div>
      </section>
      <section className="gallery">
        <h1 className="section-title weddings-title">New Born & Family Frames</h1>
        <div className="gallery-grid">
          {babyimages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wedding Photo ${index + 1}`}
              onClick={() => setModalImage(src)} // changed here
            />
          ))}
        </div>
      </section>

      <section className="Weddingpackages">
        <h2 className="section-title weddings-title">Wedding Packages</h2>
        <div className="package-cards">
          {Weddingpackages.map((pkg, index) => (
            <div 
              className="package-card" 
              key={index} 
              onClick={() => openPackageModal(pkg)} // use openPackageModal here
            >
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="Weddingpackages">
        <h2 className="section-title weddings-title">Baby Packages</h2>
        <div className="package-cards">
          {babypackages.map((pkg, index) => (
            <div 
              className="package-card" 
              key={index} 
              onClick={() => openPackageModal(pkg)} // use openPackageModal here
            >
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-description">{pkg.description}</p>
              <p className="package-price">{pkg.price}</p>
            </div>
          ))}
        </div>
      </section>

<section className="about">
  <h2 className="section-title">About Me</h2>
  <p className="about-text">
    Hi, I'm [Kiran], a passionate photographer who loves to capture the
    beauty of life through the lens. Whether it's nature, portraits, or
    events, I strive to bring emotions to life in every frame.
  </p>
</section>

<section className="contact">
  <h2 className="section-title">Book me!</h2>
  <p>Interested in working together? Let's create something amazing.</p>
  
  <div className="social-buttons">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <button className="social-button">
        <i className="fab fa-instagram"></i> Instagram
      </button>
    </a>
    
    <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
      <button className="social-button">
        <i className="fab fa-whatsapp"></i> WhatsApp
      </button>
    </a>
  </div>
</section>

      {/* Modal for Package Details */}
      {modalPackage && (
        <div className={`package-modal ${modalPackage ? "show" : ""}`} onClick={closePackageModal}>
          <div className="package-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closePackageModal}>
              &times;
            </button>
            <h3 className="modal-package-name">{modalPackage.name}</h3>
            <p className="modal-package-description">{modalPackage.description}</p>
            <p className="modal-package-details">{modalPackage.details}</p>
            <p className="modal-package-price">{modalPackage.price}</p>
          </div>
        </div>
      )}

      {/* Modal for Image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <img src={modalImage} alt="Modal View" />
        </div>
      )}
    </div>
  );
}

export default App;
