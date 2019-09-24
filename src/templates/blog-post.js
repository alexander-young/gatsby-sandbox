import React from "react"

import Layout from "../components/layout"
import RelatedPosts from "../components/RelatedPosts"
import Author from "../components/Author"

import Image from "../components/image"
import WYSIWYG from "../components/wysiwyg"

const components = {
  Image: Image,
  TextEditor: WYSIWYG,
}

function toPascalCase(string) {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

const BlogPostTemplate = (data) => {
  {
    console.log({ data });

    const elementorData = data.pageContext.modifiedData;
    let PageContent;
    if (!elementorData) {
      PageContent = 'no data';
    } else {
      PageContent = elementorData.map(row => {
        return (
          <div key={row.id} className="row mb-5">
            {
              row.elements.map(column => {
                return (
                  <div key={column.id} className={`col col-${column.settings._column_size}`}>
                    {
                      column.elements.map(widget => {
                        return (
                          React.createElement(
                            components[toPascalCase(widget.widgetType)],
                            {
                              ...widget.settings,
                              key: widget.id
                            }
                          )
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        )
      })
    }
    return (
      <Layout>
        <div>
          {PageContent}
          {<RelatedPosts />}
          {<Author author={data.pageContext.author} />}
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate