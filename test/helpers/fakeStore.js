/* eslint-disable */

const fakeStore = {
  getCurrentWeather: {
      location: 'Denver',
      weatherType: 'Clouds',
      temp: '34'
  },
    getFiveDayForecast: [
        {
            forecast: {
                a: [
                    {
                        time: '3 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 278.51,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '6 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 279.27,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '9 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 279.04,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '0 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 278.1,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '3 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 276.34,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '6 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 275.764,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '9 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 272.584,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '0 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 270.175,
                        main: 'Snow',
                        description: 'light snow'
                    }
                ],
                b: [
                    {
                        time: '3 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 269.149,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 268.08,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '9 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 268.153,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '0 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 268.694,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '3 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 268.148,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '6 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 267.868,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '9 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 267.238,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '0 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 265.91,
                        main: 'Clear',
                        description: 'clear sky'
                    }
                ],
                c: [
                    {
                        time: '3 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 265.215,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '6 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 267.185,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '9 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 269.445,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 273.366,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '3 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 275.006,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '6 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 275.077,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '9 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 275.3,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '0 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 275.499,
                        main: 'Rain',
                        description: 'light rain'
                    }
                ],
                d: [
                    {
                        time: '3 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 275.491,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '6 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 275.687,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '9 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 276.667,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '0 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 277.04,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '3 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 275.801,
                        main: 'Rain',
                        description: 'light rain'
                    }, {
                        time: '6 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 276.733,
                        main: 'Rain',
                        description: 'moderate rain'
                    }, {
                        time: '9 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 277.661,
                        main: 'Rain',
                        description: 'light rain'
                    }
                ]
            }
        }, {
            forecast: {
                a: [
                    {
                        time: '3 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 273.76,
                        main: 'Snow',
                        description: 'snow'
                    }, {
                        time: '6 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 273.94,
                        main: 'Snow',
                        description: 'snow'
                    }, {
                        time: '9 AM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 272.47,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 269.21,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '3 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 266.015,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 263.214,
                        main: 'Snow',
                        description: 'snow'
                    }, {
                        time: '9 PM',
                        date: '2016-12-05',
                        day: 'Monday',
                        temp: 263.109,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 262.1,
                        main: 'Snow',
                        description: 'light snow'
                    }
                ],
                b: [
                    {
                        time: '3 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 261.174,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 260.205,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '9 AM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 259.128,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 258.069,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '3 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 257.323,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 258.468,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '9 PM',
                        date: '2016-12-06',
                        day: 'Tuesday',
                        temp: 259.688,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 258.26,
                        main: 'Snow',
                        description: 'light snow'
                    }
                ],
                c: [
                    {
                        time: '3 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 256.865,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 255.635,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '9 AM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 254.895,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 254.366,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '3 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 253.356,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '6 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 255.651,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '9 PM',
                        date: '2016-12-07',
                        day: 'Wednesday',
                        temp: 257.425,
                        main: 'Snow',
                        description: 'light snow'
                    }, {
                        time: '0 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 256.274,
                        main: 'Snow',
                        description: 'light snow'
                    }
                ],
                d: [
                    {
                        time: '3 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 253.066,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '6 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 248.812,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '9 AM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 246.842,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '0 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 245.615,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '3 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 244.951,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '6 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 255.758,
                        main: 'Clear',
                        description: 'clear sky'
                    }, {
                        time: '9 PM',
                        date: '2016-12-08',
                        day: 'Thursday',
                        temp: 261.086,
                        main: 'Clear',
                        description: 'clear sky'
                    }
                ]
            }
        }
    ]
}

export default fakeStore
