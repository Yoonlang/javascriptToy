import { useState } from "react";
import classNames from "classnames";
import { Post } from "./Records";

interface CardProps {
  info: Post;
}

const Card: React.FC<CardProps> = ({ info }) => {
  const { id, title, body } = info;
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const cardClass = classNames({
    card: true,
    "is-flipped": isFlipped,
  });

  return (
    <div
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
