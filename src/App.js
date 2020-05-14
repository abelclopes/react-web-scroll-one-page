import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import NavigateLinks from './navigateScroll/index';
class MySection extends React.Component {
  render() {
    return (
      <div className="section">
        <h3>{this.props.content}</h3>
      </div>
    );
  }
}
const  App = (props) => {
 
const anchors = ["home", "page2", "page3", "page4", "page5"];
  return (
    <div>
      <NavigateLinks/>
      <ReactFullpage
        anchors={anchors}
        scrollingSpeed = {1000} /* Options here */

        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi);
          return (
            <ReactFullpage.Wrapper>
              
              <MySection content={'Section 1'}/>
              <MySection content={'Section 2'}/>
              <MySection content={'Section 3'}/>
              <MySection content={'Section 4'}/>
              <MySection content={'Section 5'}/>  
              
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
    )
}

export default App;
