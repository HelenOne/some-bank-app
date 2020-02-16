import React from "react";
// import ReactDOM from "react-dom";
import "../styles/central-part.sass";

type ChartData = number[];

const chartData: ChartData = Array(10 + Math.round(Math.random() * 10))
  .fill(0)
  .map(() => Math.round(Math.random() * 20000));

export default class Char extends React.Component {
  constructor(props: {}) {
    super(props);
    // this.myRef = React.createRef();
    this.state = {
      svgHeight: 160,
      svgWidth: 190
    };
    this.nowMonth = new Date().getMonth();
  }
  state: {
    svgHeight: number;
    svgWidth: number;
  };
  nowMonth: number;
  // myRef: React.RefObject<SVGSVGElement>;
  // componentDidMount() {
  //   if (this.myRef.current !== null) {
  //     this.myRef.current;
  //   }
  // }
  render() {
    return (
      <div className="chart-block">
        <div className="chart-block-header">
          <div className="text"> Transactions </div>
          <div className="chart-type-buttons">
            <input
              type="radio"
              name="select-chart"
              className="select-round-chart"
            />
            <input
              type="radio"
              name="select-chart"
              className="select-linear-chart"
            />
          </div>
        </div>
        <div className="chart">
          <svg
            // ref={this.myRef}
            id="linear-chart"
            width={this.state.svgWidth}
            height={this.state.svgHeight}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={`M0 ${Math.round(
                (this.state.svgHeight / 20000) * chartData[0]
              )} C 
                  ${chartData
                    .slice(1, -1)
                    .map((elem, index) => {
                      let x1 = Math.round(
                        (this.state.svgWidth / chartData.length) * index
                      );
                      let y1 = Math.round(
                        (this.state.svgHeight / 20000) * elem
                      );
                      let x2 = Math.round(
                        (this.state.svgWidth / chartData.length) * (index + 1)
                      );
                      let y2 = Math.round(
                        (this.state.svgHeight / 20000) * chartData[index + 1]
                      );
                      return `${x1} ${y1}, ${x2} ${y2}`;
                    })
                    .join(" S ")}
                 `}
              //  10
              // ${this.state.svgHeight - 40}
              //  , 65 10, 95 80 S 100 150, 180 80
              stroke="black"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    );
  }
}
