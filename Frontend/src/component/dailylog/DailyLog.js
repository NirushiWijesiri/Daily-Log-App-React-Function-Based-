import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DailyLogCard from './DailyLogCard';
import { Link } from 'react-router-dom';

function DailyLog() {
    const [stateDailylog, setDailyogState] = useState([])

    useEffect(() => {
        getDailylog();
    }, [])

    const getDailylog = () => {
         axios.get("http://localhost:8080/buildermate/dailylog/dailyLogs")
         .then(data => {
             let dailylog = data.data;
             setDailyogState( dailylog.map(d => {
                 return{
                     logId: d.logId,
                     description: d.description
                 }
             }))
         }).catch(err => alert(err));
    }

    const editDailylog = () => {
        console.log("Edit is working!");
    }

    return (
        <div className="container">
            <Link to="/add">
                <button style={{marginBottom: "10px"}} type="button" className="btn btn-outline-secondary btn-block"> + </button>
            </Link>
            <DailyLogCard stateDailylog={stateDailylog} editDailylog={editDailylog} />
        </div>
    )
}

export default DailyLog
