
document.addEventListener('DOMContentLoaded', () => {


    $("#GaugeMeter_101")
        .attr("data-used",36);
    $("#GaugeMeter_102").attr("data-used",36);

    $("#GaugeMeter_110").attr("data-used",36);
    $("#GaugeMeter_111").attr("data-used",36);
    $("#GaugeMeter_112").attr("data-used",36);
    $("#GaugeMeter_113").attr("data-used",36);


    $("#GaugeMeter_120").attr("data-used",36);
    $("#GaugeMeter_120").attr("data-used",36);


    $("#GaugeMeter_131").attr("data-used",36);
    $("#GaugeMeter_132").attr("data-used",36);
    $("#GaugeMeter_133").attr("data-used",36);
    $("#GaugeMeter_134").attr("data-used",36);

    // $("#GaugeMeter_101").gaugeMeter({
    //     theme: 'green',
    //     color:'springgreen'
    // });
    // $(".GaugeMeter10").gaugeMeter({
    //     theme: 'green',
    //     color:'springgreen'
    // });



    const ctx = document.getElementById('monthlyChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1','2','3','4', '5','6','7','8','9', '10', '11', '12', '13', '14'],
            datasets: [{
                label: '전체',
                data: [1000,2000,3000,4000,1000,2000,3000,4000,1000,2000,3000,4000,1000,2000],
                borderWidth: 1,
                borderColor:'transparent',
                backgroundColor: 'rgba(236,236,236,0.5)'
            },
                {
                    label: '진척도',
                    data: [1000,2000,3000,4000,1000,2000,3000,4000,1000,2000,3000,4000,1000,2000],
                    borderWidth: 1,
                    borderColor:'rgba(106,242,136,0.8)',
                    backgroundColor: 'rgba(106,242,136,0.8)'
                }]
        },
        options: {
            indexAxis: 'x',
            responsive: true,
            elements: {
                bar: {
                    borderWidth: 5
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    min: 0,
                    max: 4000,
                    ticks: {
                        stepSize: 1000,
                        color: '#ececec'
                    },
                    grid: {
                        color: '#5c5c5c'
                    }
                },
                y: {
                    ticks: {
                        color: '#ececec'
                    },
                    grid: {
                        color: '#5c5c5c'
                    }
                }
            }
        }
    });

    const ctx2 = document.getElementById('timelyChart');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['0','3','6','9','12','15','18','21','24'],
            datasets: [
            // {
            //     label: '전체',
            //     data: [20,40,60,80,20,40,60,20,20,20],
            //     borderWidth: 3,
            //     borderColor:'#ececec81',
            //     backgroundColor: 'rgba(236,236,236,0.5)'
            // },
            {
                label: '진척도',
                data: [40,60,80,20,40,60,20,20,20,40],
                borderWidth: 3,
                pointBorderColor:'#fff',
                pointBorderWidth:1,
                borderColor:'rgba(106,242,136,0.8)',
                backgroundColor: 'rgba(106,242,136,0.8)'
            }]
        },
        options: {
            scales: {
                x: {
                    min: 0,
                    max: 24,
                    ticks: {
                        stepSize: 3,
                        color: '#ececec'
                    },
                    grid: {
                        color: '#5c5c5c'
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    ticks: {
                        stepSize: 20,
                        color: '#ececec'
                    },
                    grid: {
                        color: '#5c5c5c'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            elements: {
                line: {
                    tension: 0.4 // 곡선 여부 (0=직선)
                }
            }
        }
    });

    const ctx3 = document.getElementById('perChart');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['99','04','03','02','01'],
            datasets: [
                {
                label: '전체',
                data: [100,100,100,100,100],
                borderWidth: 1,
                borderColor:'transparent',
                fill:true,
                backgroundColor: [
                    'rgba(236,236,236,0.5)'
                ],   },
                {
                    label: '진척도',
                    data: [60,80,60, 40, 40],
                    borderWidth: 1,
                    borderColor:'rgba(106,242,136,0.8)',
                    fill:true,
                    backgroundColor: [
                        // 'rgba(106,242,136,0.8)'
                        'aqua'
                    ],   },
                {
                    label: '진척도',
                    data: [60,80,60, 40, 40],
                    borderWidth: 1,
                    borderColor:'transparent',
                    fill:true,
                    backgroundColor: [
                        'red'
                    ],   }
            ]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            // Elements options apply to all of the options unless overridden in a dataset
            // In this case, we are setting the border of each horizontal bar to be 2px wide
            elements: {
                bar: {
                    borderWidth: 5,
                }
            },
            plugins: {
                title: {
                    display: false,
                    text: '전체 작업 시간',
                    color:'#ececec'

                },
                legend: {
                    position: 'right',
                    display:false,
                    labels: {
                        color:'#ececec'
                    },
                    data: {
                        color:'white',
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Horizontal Bar Chart'
                    }
                }
            },

            scales: {
                x: {
                    beginAtZero: true,
                    max:100,
                    stepSize:20,
                    ticks: {
                        color:'#ececec',

                    },
                    grid: {
                        color: '#5c5c5c',
                    },
                },
                y: {
                    // beginAtZero: true,
                    // max:10,
                    // stepSize:1,
                    ticks: {
                        color:'#ececec'
                    },
                    grid: {
                        color: '#5c5c5c',
                    },
                }
            }

        }
    });
});

