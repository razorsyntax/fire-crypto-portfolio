export let AreaChartOptions = {
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    legend: {
        enabled: false,
        backgroundColor: '#3ee129'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        area: {
            color: '#3ee129',
            fillColor: '#181818',
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    pane: {
        background: [{
            backgroundColor: '#342c2d',
            shape: 'square'
        }],
        size: [0]
    },
    chart: {
        spacing: [0, 0, 0, 0],
        plotBackgroundColor: '#342c2d',
        plotBorderColor: '#342c2d',
        plotBorderWidth: 0,
        backgroundColor: '#342c2d',
        borderWidth: 0,
        padding: [0, 0, 0, 0],
        margin: [0, 0, 0, 0],
        animation: false
    },
    tooltip: {
        enabled: false
    },
    scrollbar: {
        enabled: false
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        startOnTick: false,
        endOnTick: false,
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    exporting: { enabled: false },
    series: [{
        data: [],
        type: 'area'
    }]
};

export let CandleStickChartOptions = {

};

export let ChartLoadOptions = {
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    legend: { enabled: false },
    credits: { enabled: false },
    plotOptions: {
        area: {
            color: '#3ee129',
            fillColor: '#181818',
            marker: { enabled: false },
            states: { hover: { enabled: false } }
        }
    },
    pane: {
        background: [{
            backgroundColor: '#342c2d',
            shape: 'square'
        }],
        size: [0]
    },
    chart: {
        spacing: [0, 0, 0, 0],
        plotBackgroundColor: '#342c2d',
        plotBorderColor: '#342c2d',
        plotBorderWidth: 0,
        backgroundColor: '#342c2d',
        borderWidth: 0,
        padding: [0, 0, 0, 0],
        margin: [0, 0, 0, 0],
        animation: false
    },
    tooltip: { enabled: false },
    scrollbar: { enabled: false },
    xAxis: {
        type: 'category',
        title: { text: null },
        labels: { enabled: false },
        startOnTick: false,
        endOnTick: false,
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: { text: null },
        labels: { enabled: false },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    exporting: { enabled: false },
    series: [{data: [], type: 'area'}]
};

export let FinancialAreaChart = {
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        area: {
            color: '#3ee129', // green #3ee129 | red #a82f27
            fillColor: '#181818',
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    enabled: false
                }
            }
        }
    },
    pane: {
        background: [{
            backgroundColor: '#342c2d',
            shape: 'square'
        }],
        size: [0]
    },
    chart: {
        plotBackgroundColor: '#342c2d',
        plotBorderColor: '#342c2d',
        backgroundColor: '#342c2d',
        animation: false
    },
    tooltip: {
        enabled: false
    },
    scrollbar: {
        enabled: false
    },
    xAxis: {
        type: 'category',
        tickInterval: 5,
        title: {
            text: null
        },
        ordinal: false,
        labels: {
            align: 'right',
            x: 3,
            y: 16,
            format: '{value}',
            style: {
                color: '#ffffff'
            }
        },
        startOnTick: false,
        endOnTick: false,
        lineWidth: 0,
        tickWidth: 0
    },
    yAxis: {
        title: {
            text: null
        },
        min: 0,
        max: 0,
        opposite: true,
        labels: {
            x: 3,
            y: 16,
            format: '{value}',
            style: {
                color: '#ffffff'
            }
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    exporting: { enabled: false },
    series: [{
        data: [],
        type: 'area'
    }]
};
