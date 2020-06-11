import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveDashboard extends Component {

  render() {
    switch (this.props.activeDashboard){
      case "fas fa-graduation-cap":
        return ( <p>Hello</p> );
    //   case "reviews":
    //     // return();
    //   case "chat":
    //     // return();
    default:
    // this.lineGraph;
      return (
        <div className="container-dash-class mt-3">
          <div className="card-dash-class-global">
            <h2><span className="highlight-orange">Class Dashboard</span></h2>

            <div>
              <div datachapters={this.props.test3} datascore={this.props.test3} className="lineChartClass">
                <canvas id="lineChart"></canvas>
              </div>
            </div>

          </div>
        </div>
      )
    // }

  }
}
}


function mapStateToProps(state) {
  return {
    activeDashboard: state.activeDashboard
  };
}
export default connect(mapStateToProps)(ActiveDashboard);
