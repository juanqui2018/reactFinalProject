import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const onChangeHadler = (getValue, {target} ) => {
  console.log('child',target);
  getValue(target);
}

const DropdownSearch = ({ posts, getValue }) => (
  <Dropdown
    placeholder="Select a post"
    search
    selection
    options={posts}
    onChange={onChangeHadler.bind({}, getValue)}
  />
);

DropdownSearch.propType = {
  posts: PropTypes.array,
  getValue: PropTypes.func
};
export default DropdownSearch;
