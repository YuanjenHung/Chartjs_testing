/* 
const times = [];
const temperatures = [];

const {InfluxDB} = require('@influxdata/influxdb-client')

// You can generate an API token from the "API Tokens Tab" in the UI
const token = 'Smrm037Xfq6s4RzcMRkik81q9S6zO8LY8u6mDxPUyOoFmvlrz9C12P63a2eF_xrrrPR8YoIbEBmavRM1yszdaw=='
const org = 'yuanjen.hung@student.supsi.ch'
const bucket = 'HAR_system'

// Define client
const client = new InfluxDB({url: 'https://eu-central-1-1.aws.cloud2.influxdata.com', token: token})

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const updateLabels = [
    'Jaly',
    'Augest',
    'September',
    'October',
    'November',
    'December',
];

saleData = [0, 10, 5, 2, 20, 30, 45];
updateSaleData =  [40, 20, 15, 12, 25, 32, 40];

const data = {
    labels: [],
    datasets: [{
        label: 'Total sale',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
  };

// const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
// );

// for (i = 0; i < updateLabels.length; i++) {
//     addData(myChart, updateLabels[i], updateSaleData[i]);
// }

// Query time
const queryApi = client.getQueryApi(org)

const query = `from(bucket: "HAR_system") |> range(start: -1h) |> filter(fn: (r) => r["_measurement"] == "temperature") |> filter(fn: (r) => r["_field"] == "value") |> filter(fn: (r) => r["host"] == "arduino_bathroom")`
queryApi.queryRows(query, {
    next(row, tableMeta) {
        const o = tableMeta.toObject(row)
        times.push(o._time);
        temperatures.push(o._value);
        console.log(`${o._time}\t${o._measurement}(${o._field}) = ${o._value}`)
    },
    error(error) {
        console.error(error)
        console.log('Finished ERROR')
    },
    complete() {
        console.log('Finished SUCCESS');
        // console.log(labels);
        // console.log(labels.length);
        // console.log(temperatures);
        // console.log(temperatures.length);
    },
})
*/

import {InfluxDB, Point} from 'https://unpkg.com/@influxdata/influxdb-client/dist/index.browser.mjs'

// You can generate an API token from the "API Tokens Tab" in the UI
const token = 'Smrm037Xfq6s4RzcMRkik81q9S6zO8LY8u6mDxPUyOoFmvlrz9C12P63a2eF_xrrrPR8YoIbEBmavRM1yszdaw=='
const org = 'yuanjen.hung@student.supsi.ch'
const bucket = 'HAR_system'

// Define client
const client = new InfluxDB({url: 'https://eu-central-1-1.aws.cloud2.influxdata.com', token: token})

const queryApi = client.getQueryApi(org)

const query = `from(bucket: "HAR_system") |> range(start: -1h) |> filter(fn: (r) => r["_measurement"] == "temperature") |> filter(fn: (r) => r["_field"] == "value") |> filter(fn: (r) => r["host"] == "arduino_bathroom")`
queryApi.queryRows(query, {
    next(row, tableMeta) {
        const o = tableMeta.toObject(row)
        // times.push(o._time);
        // temperatures.push(o._value);
        console.log(`${o._time}\t${o._measurement}(${o._field}) = ${o._value}`)
    },
    error(error) {
        console.error(error)
        console.log('Finished ERROR')
    },
    complete() {
        console.log('Finished SUCCESS');
        // console.log(labels);
        // console.log(labels.length);
        // console.log(temperatures);
        // console.log(temperatures.length);
    },
})