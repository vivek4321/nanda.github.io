Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'My Skills with Highcharts'
    },
    subtitle: {
        text: 'Please click on bars for more skills'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
        name: 'Skill',
        colorByPoint: true,
        data: [{
            name: 'Front End Development',
            y: 90.00,
            drilldown: 'Front End Development'
        }, {
            name: 'Back End Development',
            y: 70.03,
            drilldown: 'Back End Development'
        }, {
            name: 'Data Visualisation',
            y: 75,
            drilldown: 'Data Visualisation'
        }, {
            name: 'Other Tools',
            y: 90,
            drilldown: 'Other Tools'
        }, {
            name: 'Database',
            y: 70,
            drilldown: 'Database'
        }, {
            name: 'I am Learning',
            y: 5,
            drilldown: 'I am Learning'
        }]
    }],
    drilldown: {
        series: [{
            name: 'Front End Development',
            id: 'Front End Development',
            data: [
                [
                    'HTML',
                    95
                ],
                [
                    'CSS',
                    90
                ],
                [
                    'JS',
                    90
                ],
                [
                    'Jquery',
                    90
                ],
                [
                    'Angular',
                    90
                ],
                [
                    'React/Redux',
                    80
                ],
                [
                    'bootstrap/ Material UI',
                    90
                ],
                [
                    'Jasmine',
                    80
                ],
                [
                    'Scss',
                    80
                ],
                [
                    'Node JS',
                    90
                ]
            ]
        }, {
            name: 'Back End Development',
            id: 'Back End Development',
            data: [
                [
                    'Java',
                    75
                ],
                [
                    'PHP',
                    50
                ],
                [
                    'NodeJS-MEAN Stack',
                    90
                ],
                [
                    'Spring',
                    65
                ],
                [
                    'Hibernate',
                    70
                ],
                [
                    'Maven',
                    80
                ],
                [
                    'Express',
                    80
                ]
            ]
        }, {
            name: 'Data Visualisation',
            id: 'Data Visualisation',
            data: [
                [
                    'D3',
                    65
                ],
                [
                    'High Charts',
                    80
                ],
                [
                    'Tableau',
                    60
                ],
                [
                    'PowerBI',
                    40
                ]
            ]
        }, {
            name: 'Other Tools',
            id: 'Other Tools',
            data: [
                [
                    'Xampp',
                    85
                ],
                [
                    'Maven',
                    80
                ],
                [
                    'Workbench',
                    100
                ],
                [
                    'PostMan',
                    100
                ],
                [
                    'Eclipse/NetBeans/Visual Studio',
                    100
                ],
                [
                    'agile',
                    100
                ]
            ]
        }, {
            name: 'Database',
            id: 'Database',
            data: [
                [
                    'MySQL',
                    80
                ],
                [
                    'Oracle',
                    70
                ],
                [
                    'Mongo',
                    75
                ]
            ]
        },{
            name: 'I am Learning',
            id: 'I am Learning',
            data: [
                [
                    'Chef',
                    10
                ],
                [
                    'Puppet',
                    10
                ],
                [
                    'Ansible',
                    10
                ],
                [
                    'Jenkins',
                    20
                ]
            ]
        }]
    }
});
