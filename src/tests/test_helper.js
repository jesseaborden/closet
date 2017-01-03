import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import jquery from 'jquery';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

import reducers from '../reducers';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html></doctype>');
global.window = global.document.defaultView;
const jquery = jquery(global.window);

// Helper function to render React component to jsdom

function renderComponent (ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props} />  
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance));
}

// Helper function to simulate event

$.fn.simulate = function(eventName, value){
    if(this.val) this.val(value);

    TestUtils.Simulate[eventName](this[0]);
}

// Set up Chai jQuery

chaiJquery(chai, chai.util, $);

export { renderComponent, expect };