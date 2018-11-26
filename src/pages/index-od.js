// import React from 'react';
// import PropTypes from 'prop-types';
// import Img from 'gatsby-image';
// import { Link, graphql } from 'gatsby';
// import Layout from '../components/Layout';
// import Info from '../components/Info';

// export default class IndexPage extends React.Component {
//   render() {
//     const { data } = this.props;
//     const { edges: posts } = data.allMarkdownRemark;

//     return (
//       <Layout>
//         <section className="blog">
//           <div>
//             <div className="post">
//               {posts.map(({ node: post }) => (
//                 <Link key={post.id} to={post.fields.slug}>
//                   <div className="post__card">
//                     <h3 className="post__title">{post.frontmatter.title}</h3>
//                     <p className="post__desc">{post.frontmatter.description}</p>
//                     <small className="post__date">{post.frontmatter.date}</small>
//                     {post.frontmatter && (
//                       <Img
//                         className="post__image"
//                         sizes={post.frontmatter.cover.childImageSharp.sizes}
//                       />
//                     )}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//         <Info data={data} />
//       </Layout>
//     );
//   }
// }

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// };

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//     ) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             cover {
//               childImageSharp {
//                 sizes(maxWidth: 300) {
//                   ...GatsbyImageSharpSizes
//                 }
//               }
//             }
//             description
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;
