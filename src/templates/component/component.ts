export default `import React from 'react';
import propTypes from 'prop-types';
import '<%= name %>.scss';

/**
 * Explain what the component does in a sentence.
 * (to see how to document Javascript code: https://jsdoc.app/about-getting-started.html)
 */
export default function <%= name %>({}) {
    return(
        <h1><%= name %> @TODO</h1>
    )
}

<%= name %>.propTypes = {

}`;