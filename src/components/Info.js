import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import React, { Component } from 'react';

export default class Info extends Component {
  render() {
    const group = this.props.data.allMarkdownRemark.group;
    return (
      <div className="info">
        <p>Tags</p>
        <ul className="info__list">
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
