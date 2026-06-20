import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
  return (
    <div>
          <div className="card">
        <div className="top">
          <img
            src={props.logo} alt=""
          />
          <button>
            save <Bookmark size={12} />
          </button>
        </div>
        <div>
          <div className="center">
            <h3>
              {props.company} <span>{props.date}</span>
            </h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h4>{props.type}</h4>
              <h4>{props.level}</h4>
            </div>
          </div>

          <div className="botum">
            <div>
              <h3>${props.pay}/hr</h3>
              <p>{props.location}</p>
            </div>

            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
