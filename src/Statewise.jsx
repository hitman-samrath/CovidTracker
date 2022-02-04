import React, { useEffect, useState } from 'react';


const Statewise = () => {

    const [val, setval] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const data = await res.json();
        setval(data.statewise);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className="cont mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>
                
                <div className="table-responsive table-shadow">
                    <table className="table table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                val.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.state}</td>
                                            <td>{item.confirmed}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>
                                            <td>{item.active}</td>
                                            <td>{item.lastupdatedtime}</td>
                                        </tr>
                                    )
                                }
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise;