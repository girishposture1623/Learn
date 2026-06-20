import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
    // console.log(props)
  return (
    <div className="h-full shrink-0 overflow-hidden relative rounded-4xl w-50">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
     <RightCardContent id={props.id} color={props.color} tag={props.tag}/>
     
    </div>
  );
};

export default RightCard;
