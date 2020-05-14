import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';


import './pagescroll-style.scss';

const PageScroll = () => {


    return (
        <ScrollAnimation  animateIn="fadeIn">
            <ScrollableAnchor id={"home"}>
            <div className="custonSection5">teste</div>
            </ScrollableAnchor>
            <ScrollableAnchor id={"about"}><div className="custonSection1">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"contact"}><div className="custonSection2">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"galery"}><div className="custonSection3">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"blog"}><div className="custonSection4">teste</div></ScrollableAnchor>
        </ScrollAnimation>
    )
}

export default PageScroll;