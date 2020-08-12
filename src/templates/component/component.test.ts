export default `import <%= name%> from '../<%= name%>';
import { render, screen } from '@testing-library/react';
import <%= name%>Scenario from './<%= name%>.scenario.js';

/**
 * this is a @testing-library/react render wrapper
 * @param {Object} Scenario 
 */
const renderFromScenario = (Scenario) => render(<<%= name%> {...Scenario}/>);


describe("<%= name%>", () => {
    // decomment this block of code if all test should render the same scenario.
    // const container;
    // const debug;
    // beforeEach(() => {
    //     const {container: renderContainer, debug: renderDebug} = renderFromScenario(<%= name%>Scenario);
    //     container = renderContainer;
    //     debug = renderDebug;
    // });
});`