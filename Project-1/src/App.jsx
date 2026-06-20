import React from "react";
import Card from "./component/Card";

const jobOpenings = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    level: "Junior Level",
    type: "Full Time",
    location: "Bangalore, India",
    pay: 55
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    level: "Mid Level",
    type: "Full Time",
    location: "Hyderabad, India",
    pay: 48
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "SDE I",
    level: "Junior Level",
    type: "Full Time",
    location: "Mumbai, India",
    pay: 45
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQ2C7aWuSkI5ROuHwYY9jRrGPvM9zrmrvHTNnbBmrhnQkugbP0r_cSume&s=10",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    level: "Senior Level",
    type: "Full Time",
    location: "Bangalore, India",
    pay: 60
  },
  {
    brandLogo: "data:image/jpeg;base64,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",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    level: "Senior Level",
    type: "Full Time",
    location: "Hyderabad, India",
    pay: 58
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgIpwOvOEBLHGvkl3Nv-9ZlAYyxFDDu68yVdXREoQMq7MeCcQmMj1oSq3&s=10",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    level: "Senior Level",
    type: "Remote",
    location: "India",
    pay: 65
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYA1WenPdYSsIEjxdyJdKceHc4kkKbJzWIRI1cl0lkuWCByKQMiwWAprQ&s=10",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "MERN Stack Developer",
    level: "Mid Level",
    type: "Full Time",
    location: "Noida, India",
    pay: 42
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r5Pp8196JW12Uxw4kiUZbcUEFFmoaJgQgNesHKkUCmbF9BlWturF2c0&s=10",
    companyName: "Uber",
    datePosted: "1 day ago",
    post: "Software Engineer II",
    level: "Mid Level",
    type: "Full Time",
    location: "Bangalore, India",
    pay: 52
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyt2rElnsjT3I7CTG_ZgjgM6h5-da-T_D3xzcrmMk_Q&s",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "Node.js Developer",
    level: "Mid Level",
    type: "Hybrid",
    location: "Pune, India",
    pay: 46
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZzMQjKBwq6Vds17n7z3vCwFLz-5zJvPvXz5f7iVocg&s",
    companyName: "Oracle",
    datePosted: "2 days ago",
    post: "Junior Software Engineer",
    level: "Junior Level",
    type: "Full Time",
    location: "Mumbai, India",
    pay: 38
  }
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function(elm){
        return <div>
          <Card company={elm.companyName} logo={elm.brandLogo} 
       date={elm.datePosted} post={elm.post} type={elm.type}
       location={elm.location} pay={elm.pay} level={elm.level} />
      
        </div>
        })}

    </div>
  );
};

export default App;
