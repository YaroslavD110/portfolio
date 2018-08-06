import React from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";

import Work from "./Work";

const WorksList = ({ works }) => (
  <FlipMove className="works-list">
    {works !== [] &&
      works !== undefined &&
      works.map(work => (
        <Work
          key={work.id}
          title={work.title}
          demoLink={work.demoLink}
          previewSrc={work.previewSrc}
          sourceCodeLink={work.sourceCodeLink}
        />
      ))}
  </FlipMove>
);

WorksList.defaultProps = {
  works: []
};

WorksList.propTypes = {
  works: PropTypes.array.isRequired
};

export default WorksList;
