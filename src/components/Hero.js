import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img src="./images/hero.jpg" alt="Intro" />
      </div>
      <div className="textbox textbox--hero">
        <h2>Waves Main Stash Test</h2>
        <h4>Space Time and Cloud of uncertainity</h4>
        <Button text="Join Now"></Button>
      </div>
    </div>
  )
}

export default Hero;
