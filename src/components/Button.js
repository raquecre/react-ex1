import { useState } from "react";

const Button = () => {
  const [likes, setLikes] = useState(0);
    
  const likeClick = () => {
        setLikes(like => like + 1);
        
    };  
    

    return (
        <div className="button">
            <button onClick={likeClick}> ({likes}) likes</button>
        </div>
    )
}

export default Button;

