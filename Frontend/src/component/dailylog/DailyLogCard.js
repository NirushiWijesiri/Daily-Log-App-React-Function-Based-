import React from 'react';
import { Link } from 'react-router-dom';

function DailyLogCard(props) {
    return (
        <div>
            {props.stateDailylog.map(d => (
                <div key={d.id} className="card" style={{ marginBottom: "10px"}}>
                    <div className="card-body">
                        <h5 className="card-title">{d.logId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{d.date} {d.time}</h6>
                        <p className="card-text">{d.description}</p>
                        <Link to = {`edit/${d.logId}`}>
                            <button style={{marginRight: "10px"}} type="button" className="btn btn-info">Edit</button>
                        </Link>
                        <button style={{marginRight: "10px"}} type="button" className="btn btn-danger">Delete</button>
                        <button style={{marginRight: "10px"}} type="button" className="btn btn-secondary">View</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DailyLogCard
