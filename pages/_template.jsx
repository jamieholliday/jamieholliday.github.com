import React from 'react';
import { RouteHandler, Link } from 'react-router';
import { Container, Grid, Span } from 'react-responsive-grid';
import { link } from 'gatsby-helpers';
import { rhythm, fontSizeToMS } from 'utils/typography';

import '../css/styles.css';

export default class extends React.Component {
  render() {
    const header = (
        <Grid columns={12}>
          <Span columns={9}>
            <div
              style={{
                padding: rhythm(0.5),
                display: 'flex'
              }}
            >
              <h1
                style={{
                  fontSize: fontSizeToMS(1.5).fontSize,
                  lineHeight: fontSizeToMS(1.5).lineHeight,
                  marginBottom: 0
                }}
              >
                <Link
                  style={{
                    textDecoration: 'none',
                  }}
                  to={link('/')}
                >
                  {this.props.config.blogTitle}
                </Link>
              </h1>
            </div>
          </Span>
          <Span columns={3} last>
              <a
                style={{
                  padding: rhythm(0.5),
                  display: 'block',
                  fontSize: fontSizeToMS(1).fontSize,
                  lineHeight: fontSizeToMS(1.5).lineHeight,
                  textAlign: 'right'
                }}
                href="http://employjamie.com"
              >CV</a>
          </Span>
        </Grid>
      );
    return (
      <div>
        <div>
          <Container
            style={{
              maxWidth: rhythm(36),
            }}
          >
            {header}
          </Container>
        </div>
        <Container
          style={{
            maxWidth: rhythm(36),
            padding: `${rhythm(1)} ${rhythm(1 / 2)}`
          }}
        >
          <RouteHandler {...this.props}/>
        </Container>
      </div>
    );
  }
}
