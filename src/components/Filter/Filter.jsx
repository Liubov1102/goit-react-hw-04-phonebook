import React from "react";
import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

export const Filter = ({ value, onChangeFilter }) => {
    return (
        <Label htmlFor='inputFilter'>
            Find contacts by name
            <Input
                name="filter"
                type="text"
                value={value}
                onChange={(e) => onChangeFilter(e.target.value)}
            />
        </Label>
    )
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};
