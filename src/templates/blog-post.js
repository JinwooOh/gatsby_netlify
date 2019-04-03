import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
}) => {
  const disqusShortname = 'https-jinwoocode-com';
  const disqusConfig = {
    identifier: date,
    title,
  };
  const PostContent = contentComponent || Content;
  return (
    <section className="markdown-body blogPost">
      {helmet || ''}
      <div className="container content">
        <div>
          <div>
            <h1 className="blogPost__title">{title}</h1>
            <p className="blogPost__desc">{description}</p>
            <p className="blogPost__date">{date}</p>

            <PostContent content={content} />
            {tags && tags.length ? (
              <div className="blogPost__tag">
                <h4 className="blogPost__tag--title">Tags</h4>
                <ul>
                  {tags.map(tag => (
                    <li className="blogPost__tag--list" key={`${tag}tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  const helmet = (
    <Helmet titleTemplate="%s | Blog">
      <title>{`${post.frontmatter.title}`}</title>
      <meta name="description" content={`${post.frontmatter.description}`} />
    </Helmet>
  );

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={helmet}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
