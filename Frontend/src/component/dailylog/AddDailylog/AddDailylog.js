import React from 'react';
import axios from 'axios';

function AddDailylog() {

    const submit = e => {
        let description = e.target[0].value;
        let data = { description };
        console.log(data);
        postDailyLog(data);
    }

    const postDailyLog = (data) => {
        axios.post("http://localhost:8080/buildermate/dailylog/dailyLogs", data).then((d) => {
            console.log(d);
        }).catch(err => alert(err));
    }

    return (
        <div className="card" style={{width: "18rem"}}>
            <form 
            onSubmit = { e => {
                e.preventDefault();
                submit(e);
            }}
            >
                <div class="form-group">
                    <label>Log Description</label>
                    <input type="text" class="form-control" />
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default AddDailylog
