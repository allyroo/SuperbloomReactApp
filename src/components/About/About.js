import React from "react";
import "./About.css";

// function About() {
//   return (

//     <div id="intentional__container" className="containers">
//       <h3 id="intentional__title">Improves Immune Function</h3>
//       <p id="intentional__description">
//         Those who journal boast improved immune system functioning (it
//         strengthens immune cells!) as well as lessened symptoms of asthma and
//         rheumatoid arthritis.
//       </p>
//     </div>
//   );
// }

const About = () => {
  return (
    <div class="habits">
      <div id="habits__benefits">
        <div id="benefits__title">The Power of Habits</div>

        <div id="consistency__container" className="containers">
          <h3 id="consistency__title">Start Small</h3>
          <p id="consistency__description">
            A habit doesn’t have to be astronomical in size to be considered
            successful. Consistency is more important than how much you do
            something or the size of the task at hand. For example, you could
            start with a mini habit of making your bed in the morning versus
            making sure your entire house is spotless every day of the week.
          </p>
        </div>

        <div id="developer__container" className="containers">
          <h3 id="developer__title">Consistency is Key</h3>
          <p id="developer__description">
            Habits are a series of events where you have to recognize the cue,
            create a good response (habit), and receive the same reward or
            outcome. In order to replace a bad habit with a good one, you have
            to change the response.
          </p>
        </div>

        <div id="developer__img__container" className="image__container">
          <div id="developer__img" className="images"></div>
        </div>

        {/* <div id="intentional__container" className="containers">
          <h3 id="intentional__title">Be intentional</h3>
          <p id="intentional__description">
            An important part of creating good habits is choosing what habits to
            build. Your resources are limited, so you need to be careful in
            selecting what habits to put your energy towards. Choose only the
            ones that can make the most difference in your life. For example,
            choosing a class time that fits with your schedule rather than a
            class for which you have to move around your entire calendar.
          </p>
        </div> */}

        <div id="intentional__img__container" className="image__container">
          <div id="intentional__img" className="images"></div>
        </div>

        <div id="celebration__container" className="containers">
          <h3 id="celebration__title">Celebrate Every Victory</h3>
          <p id="celebration__description">
            Having a system in place that can give you a sense of accomplishment
            is important to keep you motivated in the long run. By celebrating
            tiny wins, you’ll start to create those feel-good responses well
            before the actual habit is formed. For example, if you’re starting a
            healthier lifestyle, say something positive to yourself after every
            thing you do that’s centered on healthy choices. Way to go! Took 2
            minutes in the morning to meditate? You’re amazing! Don’t forget
            about the small stuff – it adds up.
          </p>
        </div>

        <div id="celebration__img__container" className="image__container">
          <div id="celebration__img" className="images"></div>
        </div>

        <div id="accountability__container" className="containers">
          <h3 id="accountability__title">Partner Up</h3>
          <p id="accountability__description">
            One of the greatest things to do to form good habits is finding a
            friend to hold you accountable. Accountability can go a long way and
            allow you to create stronger habits when you feel supported. For
            example, snag a workout buddy to catch a Zephyr class with you every
            Friday.
          </p>
        </div>

        <div id="accountability__img__container" className="image__container">
          <div id="accountability__img" className="images"></div>
        </div>

        <div id="credit">
          <h1>credit</h1>
          <a
            href="https://zephyrcyclingstudio.com/2019/01/18/the-importance-of-habits/"
            target="blank"
          >
            Article Link
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
