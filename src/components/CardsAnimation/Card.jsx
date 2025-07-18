

const Card = ({ id, frontSrc, frontAlt, backText }) => {
  return (
    <div className="card" id={id}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontSrc} alt={frontAlt} width={500} height={500} />
          </div>
          <div className="flip-card-back">
            {backText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
