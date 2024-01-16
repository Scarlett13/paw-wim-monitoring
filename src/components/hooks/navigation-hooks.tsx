import { useState } from "react";

const UseClickNavigation = () => {
const [isClicked, setIsClicked] = useState(false);

const handleClick = () => {
    setIsClicked(!isClicked);
};

return {isClicked, handleClick}
};

export default UseClickNavigation;