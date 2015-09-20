var chart_spo2 = c3.generate({
        bindto: '#chart-spo2',
        xFormat: '%Y',
        data: {
            x: 'time',
                  columns: [
            ['time', new Date('2015/09/19 00:00:00'), new Date('2015/09/19 00:00:05'), new Date('2015/09/19 00:01:20'), new Date('2015/09/19 00:03:04'), 
    new Date('2015/09/19 00:05:01'), new Date('2015/09/19 00:05:07')],
            ['SpO2', 96, 96, 95, 95, 97, 97],
          ]
        },
        axis: {
                  x: {
                         type: 'timeseries', 
                         tick: {
                             values: ['time', new Date('2015/09/19 00:00:00'), new Date('2015/09/19 00:01:00'), new Date('2015/09/19 00:02:00'), new Date('2015/09/19 00:03:00'), 
    new Date('2015/09/19 00:04:00'), new Date('2015/09/19 00:05:00')],
                             format: '%H:%M:%S'
                         }
                     }
        }
});
