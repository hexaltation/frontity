import React from "react";
import Package from "../types";
import { connect } from "frontity";

/**
 * This is a basic test of the wp-comments.
 *
 * @returns React Element.
 */
const Component: React.FC = connect(({ actions }) => (
  <>
    <button
      onClick={() =>
        actions.comments.submit(1, {
          content: "Hello world!",
          email: "frontibotito@frontity.org",
        })
      }
    >
      Comment
    </button>
  </>
));

const WPCommentsPackage: Package = {
  name: "e2e-wp-comments",
  state: {},
  actions: {},
  roots: {
    wpComments: Component,
  },
  libraries: {},
};

export default WPCommentsPackage;