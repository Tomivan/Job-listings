import React from 'react';
import '../App.css';

const JobBoard = (props) => (

        <div className="card">
            <div className="image">
                <img src={props.job.logo} alt={props.job.company}/>
                <p>{props.job.company}</p>
            </div>
            <div className="role">
                <h3>
                    {props.job.company}
                    {props.job.new && (
                <span>New</span> 
                    )}
                    {props.job.featured && (
                <span>Featured</span>
                    )}
                </h3>
                <h5>{props.job.position}</h5>
            </div> 
            <div className="details">
                <p>{props.job.postedAt}</p>
                <p>{props.job.contract}</p>
                <p>{props.job.location}</p>
            </div>
            {/* <hr/> */}
            <p>{props.job.languages && props.job.tools}</p>
        </div>
);
export default JobBoard