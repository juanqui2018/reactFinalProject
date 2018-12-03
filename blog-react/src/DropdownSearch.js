import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const onChangeHandler = (getValue, event, {value}) => getValue(value);

const DropdownSearch = ({ posts, getValue }) => (
  <Dropdown
    placeholder="Select a post"
    search
    selection
    options={posts}
    onChange={onChangeHandler.bind({}, getValue)}
  />
);

DropdownSearch.propType = {
  posts: PropTypes.array,
  getValue: PropTypes.func
};

export default DropdownSearch;
