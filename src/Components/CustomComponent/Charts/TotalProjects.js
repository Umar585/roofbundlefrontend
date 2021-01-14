import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function TotalProjects(props) {
    const series = [{
        name: 'Crew A',
        data: [13, 10, 5, 10, 15, 13, 11, 10, 15, 13, 12, 11]
    }, {
        name: 'Crew B',
        data: [8, 10, 15, 12, 15, 18, 16, 15, 14, 15, 14, 14]
    }];

    const options = {
        chart: {
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2020-01-01",
                "2020-02-01",
                "2020-03-01",
                "2020-04-01",
                "2020-05-01",
                "2020-06-01",
                "2020-07-01",
                "2020-08-01",
                "2020-09-01",
                "2020-10-01",
                "2020-11-01",
                "2020-12-01"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        },
    };
    return (
        <div>
            <div className="card mt-3">
                <div className="card-body">
                    <div className="clearfix">
                        <div className="float-left">
                            <h5 className="card-subtitle mb-2">{props.title}</h5>
                        </div>
                        <div className="float-right">
                            <form>
                                <select id="inputState" className="form-control text-muted" defaultValue={'DEFAULT'} style={{ border: '0px' }}>
                                    <option value="DEFAULT">Last 12 Months</option>
                                    <option value="6">Last 6 Months</option>
                                    <option value="3">Last 3 Months</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    {/*Area Chart*/}
                    <ReactApexChart options={options} series={series} type="area" height={350} />
                </div>
            </div>
        </div>
    )
}
