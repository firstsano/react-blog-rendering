import React from "react";
import BlogList from './BlogList';

const blogItems = [
    {text: "blog 1", src: "src 1"},
    {text: "blog 2", src: "src 2"},
    {text: "blog 3", src: "src 3"},
    {text: "blog 4", src: "src 4"},
    {text: "blog 5", src: "src 5"},
];

export default function App () {
  return (
      <div>
          <BlogList items={blogItems} />
      </div>
  );
}