import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface LikeProprs {
  onClick: () => void;
}

function Like({ onClick }: LikeProprs) {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
}

export default Like;
