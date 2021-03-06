import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const Press = cityData.list.map(weather => weather.main.pressure);
        const humdi = cityData.list.map(weather => weather.main.humidity);
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={100} width={150} data={temps}>
                        <SparklinesLine color="red"></SparklinesLine>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={100} width={150} data={Press}>
                        <SparklinesLine color="red"></SparklinesLine>
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={100} width={150} data={humdi}>
                        <SparklinesLine color="red"></SparklinesLine>
                    </Sparklines>
                </td>
            </tr>
        )
    };

    render() {
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>city</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    };
}

function mapStateToProps({ weather }) {
    return { weather }
};

export default connect(mapStateToProps)(WeatherList);