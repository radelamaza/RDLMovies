import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';
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

const Temporada = props => {
  const { match, history } = props;
  const classes = useStyles();
  const { tv, numero } = match.params;
  const [booleano, setBooleano] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  async function fetchData() {
    
    const [episodes] = await Promise.all([getEpisodes(tv, numero)])
    
    setEpisodes(episodes.res)
    console.log(episodes)
    return episodes
  }
  
  
  React.useEffect(() => {
    
    if (!booleano){
      fetchData()}
      setBooleano(true)
  }, []);
  
  const handleSearch = () => {};
  return (
    <Page
      className={classes.root}
      title={"Prueba"}
    >
      <Header />
       
      <SearchBar
        onSearch={handleSearch}
      />
      {episodes && (
        <Results
          className={classes.results}
          episodes={episodes}
          title={tv}
          numero={numero}
        />
      )}
    </Page>
  );
};
Temporada.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Temporada;
