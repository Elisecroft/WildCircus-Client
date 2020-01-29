import React from 'react'
import Gallery from './Gallery/Gallery';

const About = () => {
  return (
    <div>
      <h2>Welcome to Wild Circus</h2>
      <p className="catch-phrase">Lorem ipsum doloret ament</p>
      <Gallery className="max-width" />
      <h3>About Us</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quis enim redargueret? Ita multo sanguine profuso in 
        laetitia et in victoria est mortuus. Praeclarae mortes sunt
        imperatoriae; Quodsi vultum tibi, si incessum fingeres, quo
        gravior viderere, non esses tui similis; Haec quo modo 
        conveniant, non sane intellego. Cum audissem Antiochum,
        Brute, ut solebam, cum M. Duo Reges: constructio interrete.
        Conferam tecum, quam cuique verso rem subicias;</p>
    </div>
  )
};

export default About;