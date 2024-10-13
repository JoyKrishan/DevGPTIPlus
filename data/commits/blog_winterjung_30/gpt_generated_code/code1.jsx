import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";

export default function NotFound() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 5
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Page Not Found</h1>
      <p>Oops, we couldn't find this page! Maybe these recent posts can help:</p>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            {/* Prepend the slug with a forward slash to make the path absolute */}
            <Link to={`/${node.fields.slug}`}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}