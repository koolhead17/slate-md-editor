// @flow
import React from 'react';
import commonNode from '@canner/slate-icon-renderer/lib/commonNode';
import type {Classnames} from './types';


// const {
//   commonNode,
//   linkNode,
// } = renderer;

export default function renderNode(classnames: Classnames, sizes) {
  return (props) => {
    const { node } = props;
    switch (node.type.toLowerCase()) {
      case 'header_one':
        return commonNode('h1')(props);
      case 'header_two':
        return commonNode('h2')(props);
      case 'header_three':
        return commonNode('h2')(props);
      case 'paragraph':
        return commonNode('p')(props);
      case 'blockquote':
        return commonNode('blockquote')(props);
      case 'list-ul':
        return commonNode('ul')(props);
      case 'list-ol':
        return commonNode('ol')(props);
      case 'list-item':
        return commonNode('li')(props);
      case 'code_block':
        return (
          <pre>
            <code {...props.attributes}>
              {props.children}
            </code>
          </pre>
        );
      case 'code_line':
        return <div {...props.attributes}>{props.children}</div>
      // case 'link':
      //   return linkNode()(props);
    }
  }
}