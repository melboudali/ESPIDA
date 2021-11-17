import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentsSliderWrapper = styled.div`
  background-color: #fafafa;
  margin-top: 40px;
  padding: 63px 0;
`;

interface CommentsSliderProps {}

const CommentsSlider: React.FC<CommentsSliderProps> = (props) => {
  return (
    <CommentsSliderWrapper>
      <p>“Their ability to deliver technical yet fashionable shirts has heightened the standard of everyday attire“</p>
    </CommentsSliderWrapper>
  );
};

CommentsSlider.propTypes = {};

export default CommentsSlider;
