import React from 'react';

const LandingPage = () => (
  <>
    <section id='hero'>
      <div id='hero-text'>
        <h1>We have <br />the works</h1>
        <h3>Its all fun and games until you catch too much air</h3>
        <button>demo 8 fsr</button>
      </div>
    </section>
    <section id='story'>
      <h2>SPECIALIZED MTB</h2>
      <p>We are riders—that fact has guided our every decision since 1974. When quality tires weren't around, we strove to make the best. When people wanted to ride cruisers in the dirt, we made the first production mountain bike. When roadies wanted to go faster, we doubled-down on carbon and built our own wind tunnel. And when we saw kids struggling to focus in school, we started the Specialized Foundation to help them through cycling.</p>
      <button>our story</button>
    </section>
    <section id='categories'>
      <h3>explore our bikes</h3>
      <ul>
        <li><a href='#hi'><div id='trail-bike-link'></div><span>Trail</span></a></li>
        <li><a href='#hey'><div id='downhill-bike-link'></div><span>Downhill</span></a></li>
        <li><a href='#wut'><div id='sworks-bike-link'></div><span>S-works</span></a></li>
      </ul>
    </section>
    <section id='large-image'>
      <div>
        <h2>Finn</h2>
        <h2>Iles</h2>
      </div>
      <div>
        <span>Duis aute irure dolor in reprehenderit <br />in voluptate velit esse cillum dolore eu</span><br />
        <span><b> fugiat nulla pariatur.</b></span>
      </div>
    </section>
    <section id='video'>
      <h2>The all new stuntjumper</h2>
      <div>
        <iframe width="80%" height="90%" src="https://www.youtube.com/embed/yiNyUvYb7AM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
    <section id='instagram'>instagram</section>
  </>
);

export default LandingPage;
