import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';

export const ChartSection = ({ }) => {
    const barChart = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
            {
            label: 'Series A',
            backgroundColor: 'rgb(11, 98, 164)',
            data: [65, 59, 80, 81, 56, 55, 40,42]
            },
            {
            label: 'Series B',
            backgroundColor: 'rgb(122, 146, 163)',
            data: [90, 45, 95, 36, 34, 42, 80,25]
            }
        ],
        resize: true,
        redraw: true
    };

    const lineChart = {
        labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
        datasets: [
            {
            label: 'Series A',
            backgroundColor: 'rgba(11, 98, 164, 0.1)',
            borderColor: 'rgb(11, 98, 164)',
            data: [65, 59, 80, 81, 56, 55, 40,42]
            },
            {
            label: 'Series B',
            backgroundColor: 'rgb(122, 146, 163, 0.1)',
            borderColor: 'rgb(122, 146, 163)',
            data: [90, 45, 95, 36, 34, 42, 80,25]
            }
        ],
        resize: true,
        redraw: true,
    };

    const areaChart = {
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75, b: 65 },
            { y: '2008', a: 50, b: 40 },
            { y: '2009', a: 75, b: 65 },
            { y: '2010', a: 50, b: 40 },
            { y: '2011', a: 75, b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        lineColors: ['#1e88e5', '#ff3321'],
        lineWidth: '3px',
        resize: true,
        redraw: true
    };

    const donutChart = {
        labels: [
            'Download Sales',
            'In-Store Sales',
            'Mail-Order Sales',
            "Uploaded Sales",
            "Video Sales"
        ],
        datasets: [
            {
                data: [50,25,5,10,10],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    'rgb(11, 98, 164)',
                    '#FFCE56',
                    'rgb(122, 146, 163)'
                    ]
            }
        ],
        resize: true,
        redraw: true
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <main role="main" className="col-xl-10 col-lg-9 col-md-8 ml-sm-auto px-md-4">
                    <section className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 border">
                                {/* <div id="bar-chart">
                                </div> */}
                                <Bar
                                height={100}
                                data={barChart}
                                />
                            </div>
                            <div className="col-md-6">
                                {/* <div id="line-chart">
                                </div> */}
                                <Line data={lineChart} />
                            </div>
                            <div className="col-md-6">
                                {/* <div id="area-chart">
                                </div> */}
                                <Doughnut data={donutChart}/>
                            </div>
                            <div className="col-md-4">
                                {/* <div id="donut-chart">
                                </div> */}
                            </div>
                            <div className="col-md-4">
                                <div id="pie-chart">
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}