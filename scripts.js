/**
 * Created by session1 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Year', 'Bachelors Degree Education',],
        ['2000', .13],
        ['2001', .12],
        ['2002', .121],
        ['2003', .123],
        ['2004', .117]
    ]);

    var options = {
        title: 'Percentage of People Who Have a Physical Activity',
        chartArea: {width: '60%'},
        hAxis: {
            title: 'Total Percentage',
            minValue: 0
        },
        vAxis: {
            title: 'Year'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}