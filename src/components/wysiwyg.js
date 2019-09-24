import React from "react"

const WYSIWYG = (settings) => {
  return (<div dangerouslySetInnerHTML={{ __html: settings.editor }} />)
};
export default WYSIWYG;