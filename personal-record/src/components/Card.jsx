import { useState } from "react";
import classNames from "classnames";

const Card = ({ info }) => {
  const { id, title, body, idx } = info;
  const [isFlipped, setIsFlipped] = useState(false);

  const cardClass = classNames({
    card: true,
    "is-flipped": isFlipped,
  });

  return (
    <div
      idx={idx}
      className={cardClass}
      key={id}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card_plane card_plane--front">{title}</div>
      <div className="card_plane card_plane--back">{body}</div>
    </div>
  );
};

export default Card;
