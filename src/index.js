// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import CorporateBusiness from './home/CorporateBusiness';

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";


// Blocks Layout
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Calculators from './elements/Calculators';
import Product from './elements/Products';
import ProductDetails from './elements/ProductDetails';
import Downloads from './elements/Downloads';
import Admin from './home/Admin';
import AdminForms from './home/AdminForms';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    <Switch>
                        <Route exact path={`/`} component={CorporateBusiness}/>

                        {/* Element Layot */}
                        <Route exact path={`/service`} component={Service}/>
                        <Route exact path={`/admin/ygyufhjjhugwiuhefuygywbvhbehvuewbvjewnjrvgagjskhjkwbnjken`} component={Admin}/>
                        <Route exact path={`/admin/forms/ygyufhjjhugwiuhefuygywbvhbehvuewbvjewnjrvgagjskhjkwbnjken`} component={AdminForms}/>
                        <Route exact path={`/product`} component={Product}/>
                        <Route exact path={`/service-details`} component={ServiceDetails}/>
                        <Route exact path={`/product-details`} component={ProductDetails}/>
                        <Route exact path={`/contact`} component={Contact}/>
                        <Route exact path={`/calculators`} component={Calculators}/>
                        <Route exact path={`/downloads`} component={Downloads}/>
                        <Route exact path={`/about`} component={About}/>
                        <Route exact path={`/blog`} component={Blog}/>
                        <Route exact path={`/blog-details`} component={BlogDetails}/>

                        {/* Blocks Elements  */}
                        <Route exact path={`/video-popup`} component={VideoPopup}/>
                        <Route exact path={`/gallery`} component={Gallery}/>
                        <Route path={`/404`} component={error404}/>
                        <Route component={error404}/>
                    </Switch>
                </PageScrollTop>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();