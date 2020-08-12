export default `import React from 'react';
import propTypes from 'prop-types';
import '<%= name %>.scss';

/**
 * Explain what the component does in a sentence.
 * @param {typeOfParam} nameOfParam - this is how you should declare parameters
 * @return {typeOfReturn} this is how you should declare the return type
 * @example
 * you can add example code here of how the component should be useed (simple case)(optional)
 */
export default function <%= name %>({}) {
    return(
        <h1><%= name %> @TODO</h1>
    )
}

<%= name %>.propTypes = {

}`;