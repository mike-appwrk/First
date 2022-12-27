import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src="./images/hero.jpg" alt="Intro" />
      </div>
      <div className="textbox textbox--hero">
        <h2>Hero</h2>
        <h4>Dream . Build . Grow</h4>
        <Button text="Learn More"></Button>
      </div>
    </div>
  )
}

export default Hero;
