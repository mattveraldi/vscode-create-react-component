export default `import <%= name%> from '../<%= name%>';
import { render, screen } from '@testing-library/react';

/**
 * Renders the component based on props to test each scenario separately. 
 * @param {Object} props 
 */
const renderFromScenario = (props) => render(<<%= name%> {...props}/>);


describe("<%= name%>", () => {
    // decomment this block of code if all test should render the same scenario.
    // const container;
    // const debug;
    // beforeEach(() => {
    //     const scenario = {}; // fill it with your props' scenario.
    //     const {container: renderContainer, debug: renderDebug} = renderFromScenario(...scenario);
    //     container = renderContainer;
    //     debug = renderDebug;
    // });
});`