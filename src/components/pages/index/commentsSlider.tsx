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
  return <CommentsSliderWrapper>This is commentsSlider Component/Page</CommentsSliderWrapper>;
};

CommentsSlider.propTypes = {};

export default CommentsSlider;
