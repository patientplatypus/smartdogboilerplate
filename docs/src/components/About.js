import React, { Component } from 'react';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from 'victory';
import glamorous from 'glamorous';
import { css } from 'glamor';

const ChartDiv = glamorous.div({
  fontSize: 20,
  textAlign: 'center',
  height: '50vh',
  backgroundColor: "white"
})

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];


class About extends Component {
  render() {
    return (
      <div className="About">
        <h1>
          This is the About Page you dig?
        </h1>
        <ChartDiv>
          <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={20}
          >
            <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryBar
              data={data}
              x="quarter"
              y="earnings"
            />
          </VictoryChart>
        </ChartDiv>
      </div>
    );
  }
}

export default About;
