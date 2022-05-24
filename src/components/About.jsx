import React, { useContext, useEffect } from "react";

import { shape } from "../assets";
import { MyContext } from "../context";

const About = () => {
  const context = useContext(MyContext);

  return (
    <section id="about" className="flex flex-col md:flex-row">
      <section
        id="light"
        className="flex-1 h-auto min-h-screen bg-oreLight flex flex-col justify-center px-6 "
      >
        <div className="flex flex-col space-y-8 text-center md:text-left items-center md:items-start">
          <div>
            <img src={shape} />
          </div>
          <p>
            My left donut is missing, as is my right destroy the blinds. Cat
            snacks cough hairball on conveniently placed pants cough furball for
            scratch at fleas scratch strangers and dream about hunting birds.
          </p>
        </div>
      </section>
      <section
        id="dark"
        className="flex-1 h-auto min-h-screen bg-oreDark flex items-center px-6  space-y-10 "
      >
        <div className="flex flex-col space-y-8 text-oreLight text-center md:text-left">
          <p>
            Run outside as soon as door open. Eat all the power cords refuse to
            drink water except out of someone's glass purr so eat all the power
            cords but purr, and sit on human meow. Dream about hunting birds.
            Kitty kitty kitty poochy, yet intrigued by the shower.aaaaa
          </p>
          <p>
            Hiss and stare at nothing then run suddenly away. Stare out the
            window destroy couch, and meow meow loudly just to annoy owners for
            spit up on light gray carpet instead of adjacent linoleum but need
            to chase tail. Stare out the window nap all day claw drapes ask for
            petting and make a weird face.bbbbbb
          </p>
          <p>
            Knock dish off table rub face on owner need to chase tail, yet freak
            human out make funny noise mow mow mow mow mow mow success now
            attack human, attack feet. Present belly, scratch hand when stroked
            pounce on unsuspecting person yet chase mice. Hide head under
            blanket so no one can see. Slap owner's face until human fills food
            dish.ccccc
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
