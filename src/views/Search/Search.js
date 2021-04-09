import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Page, SearchBar } from 'components';
import {  Results } from './Members';
import { getEpisodes} from 'utils/get';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const Search = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { name} = match.params;
  const [booleano, setBooleano] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  
  const handleVolverAtras = () => {
    window.history.back()
  }
  const handleSearch = () => {};
  return (
    <Page
      className={classes.root}
      title={"Search"}
    >
      <Button
            color="primary"
            variant="contained"
            onClick={handleVolverAtras}
          >
            Volver Atrás
          </Button> 
       
      {episodes && (
        <Results
          className={classes.results}
          name={name}
          numero={0}
        />
      )}
    </Page>
  );
};
Search.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Search;
