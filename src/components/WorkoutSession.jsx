import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        A top workout session includes warm-up, strength training, cardio, core exercises, flexibility, intensity, consistency, hydration, and recovery.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Our signature fitness bootcamps combine high-intensity workouts, expert coaching, and group motivation to help you achieve maximum results in minimum time.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Power HIIT Challenge - 30 Days to Total Body Transformation</h4>
            <p>
              Intensive interval training focused on full-body conditioning, combining cardio bursts 
              with strength exercises for maximum calorie burn and muscle building in just 45 minutes per session.
            </p>
          </div>
          <div>
            <h4>Core & Strength Foundations - Build Your Base</h4>
            <p>
              Master essential strength movements with proper form while developing a rock-solid core. 
              Perfect for beginners and those looking to refine their technique for long-term fitness success.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Warrior Camp - Move Better, Live Better</h4>
            <p>
              Enhance everyday movement patterns through dynamic exercises that improve mobility,
              stability and strength. Ideal for all fitness levels looking for practical fitness results.
            </p>
          </div>
          <div>
            <h4>Shred & Sculpt Bootcamp - Define Your Physique</h4>
            <p>
              High-energy circuit training combining resistance work and metabolic conditioning
              designed to burn fat and define muscles for a lean, toned appearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;