import Card from "./Card.jsx"
import "./Card.css"
export default function MainCard() {
  return (
    <>
      <div className="containerres">
        <div className="maincontainer">
        <section className="hero">
          <h1>
            Keep scrolling to <br /> reveal the cards
          </h1>
        </section>
        <section className="cardses">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="../../../back.png"
              frontAlt="Card Image"
              backText="Your card details appear here"
            />
          ))}
        </section>
        <section className="footer">
        <h1>
            Keep scrolling to <br /> reveal the cards
          </h1>
        </section>
        </div>
      </div>
    </>
  );
}
