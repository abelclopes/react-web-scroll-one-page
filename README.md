### skell react web scroll animate one page

Install:
```
npm install react-animate-on-scroll --save or yarn add react-animate-on-scroll 
```
install react scrollable anchor:
```
npm install react-scrollable-anchor --save or yarn add react-scrollable-anchor 
```
If you want to use the animations from animate.css, be sure to include animate.css in someway in your project This can be done in a number of ways, eg:

```
npm install --save animate.css or yarnd add animate.css
```
and then importing in your project:

import "animate.css/animate.min.css";
Or by simply including a link to the file hosted by CDNJS:

```
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>

```
## Most Simple Use:
```
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor from 'react-scrollable-anchor';

import "animate.css/animate.min.css";
import './pagescroll-style.scss';

const PageScroll = () => {


    return (
        <ScrollAnimation animateIn="fadeIn">  
            <ScrollableAnchor id={"home"}><div className="custonSection1">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"about"}><div className="custonSection2">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"contact"}><div className="custonSection3">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"galery"}><div className="custonSection4">teste</div></ScrollableAnchor>
            <ScrollableAnchor id={"blog"}><div className="custonSection5">teste</div></ScrollableAnchor>
        </ScrollAnimation>

    )
}

export default PageScroll;

```

more details [https://www.npmjs.com/package/react-animate-on-scroll]