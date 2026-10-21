import React from 'react';

export default function AboutUs() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <p className="eyebrow">OUR STORY</p>
        <h1>Growing happier spaces, one plant at a time.</h1>
        <p>
          Paradise Nursery helps people bring the calm and beauty of nature into
          everyday life. We believe a little greenery can make a home feel warmer,
          a workspace feel fresher, and every day feel more connected to nature.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <span className="about-icon" aria-hidden="true">🌱</span>
          <h2>Our mission</h2>
          <p>Make plant parenthood joyful and accessible with thoughtfully selected indoor plants and helpful care guidance.</p>
        </article>
        <article className="about-card">
          <span className="about-icon" aria-hidden="true">💚</span>
          <h2>What we value</h2>
          <p>Healthy plants, honest information, responsible choices, and friendly service for beginners and experienced growers alike.</p>
        </article>
        <article className="about-card">
          <span className="about-icon" aria-hidden="true">☀️</span>
          <h2>Our promise</h2>
          <p>Help you find the right plant for your space, light, and lifestyle—so your green companions can thrive.</p>
        </article>
      </section>
      <p className="about-note">Paradise Nursery — bring nature home.</p>
    </main>
  );
}