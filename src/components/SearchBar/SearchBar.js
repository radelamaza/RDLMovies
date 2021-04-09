import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

import { Search, Filter } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
   
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  search: {
    flexGrow: 1,
    maxWidth: 480,
    flexBasis: 480
  },
  filterButton: {
    marginLeft: 'auto'
  },
  filterIcon: {
    marginRight: theme.spacing(1)
  }
}));

const SearchBar = props => {
  const { onFilter, onSearch, onChange, className, ...rest } = props;

  const classes = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        <Search
          className={classes.search}
          onSearch={onSearch}
          onChange={onChange}
        />
      </Grid>
      
      
    </Grid>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  onFilter: PropTypes.func,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchBar;
