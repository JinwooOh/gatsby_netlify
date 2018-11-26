import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Info from '../components/Info';

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const NavLink = props => {
      if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
      }
      return <span>{props.text}</span>;
    };

    const { group, index, first, last, pageCount } = pageContext;
    const previousUrl = index - 1 == 1 ? '' : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
      <Layout>
        <section className="blog">
          <div>
            <div className="post">
              {group.map(({ node }) => (
                <Link key={node.id} to={node.fields.slug}>
                  <div className="post__card">
                    <h3 className="post__title">{node.frontmatter.title}</h3>
                    <p className="post__desc">{node.frontmatter.description}</p>
                    <small className="post__date">{node.frontmatter.date}</small>
                    {node.frontmatter.cover && (
                      <Img
                        className="post__image"
                        sizes={node.frontmatter.cover.childImageSharp.sizes}
                      />
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="pagination">
              <div className="pagination--prev">
                <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
              </div>
              <div className="pagination--next">
                <NavLink test={last} url={nextUrl} text="Go to Next Page" />
              </div>
            </div>
          </div>
        </section>
        <Info data={data} />
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
