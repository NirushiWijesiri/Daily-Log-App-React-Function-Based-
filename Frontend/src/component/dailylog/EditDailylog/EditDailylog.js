import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

function EditDailylog(props) {

    const [stateDailylog, setstateDailylog] = useState({})

    useEffect(() => {
        let id = props.match.params.id;
        getDailylogById(id);
    }, [])

    const getDailylogById = (id) => {
        axios.get(`http://localhost:8080/buildermate/dailylog/dailyLogs/${id}`).then( d => {
            let dailylog = d.data;
            setstateDailylog({
                id: dailylog.logId,
                description: dailylog.description
            });
        }).catch(err => alert(err));
    }

    const putDailylog = (e) => {
        axios.put(`http://localhost:8080/buildermate/dailylog/dailyLogs/${stateDailylog.id}`, stateDailylog)
        .then( d => {
            props.history.push("/");
        }).catch(err => alert(err));
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <form 
            onSubmit = { e => {
                e.preventDefault();
                putDailylog(e);
            }}
            >
                <div class="form-group">
                    <label>Log Description</label>
                    <input 
                    type="text" 
                    value={stateDailylog.description} 
                    onChange={(e) => {
                        let value = e.target.value;
                        setstateDailylog({description: value, id:stateDailylog.id});
                    }}
                    className="form-control" />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditDailylog);
