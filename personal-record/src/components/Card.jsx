import { useState } from "react";
import classNames from "classnames";

const Card = ({ info }) => {
  const { id, email, name, username, idx } = info;
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
      <div className="card_plane card_plane--front">{name}</div>
      <div className="card_plane card_plane--back">{username}</div>
    </div>
  );
};

export default Card;