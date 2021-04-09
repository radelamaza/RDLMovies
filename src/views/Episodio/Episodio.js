import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { Page, SearchBar } from 'components';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { Header, Actors, EpisodeInfo } from './components';
import { getEpisode} from 'utils/get';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  },
  members: {
    marginTop: theme.spacing(3)
  }
}));

const Episodio = props => {
  const { match, history ,className, ...rest} = props;
  const classes = useStyles();
  const { id } = match.params;
  const [booleano, setBooleano] = useState(false);
  const [episode, setEpisode] = useState();
  async function fetchData() {
    console.log('Buscando Episodio')
    const [episode] = await Promise.all([getEpisode(id)])
    setEpisode(episode.res)

    return episode
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
      title={'Prueba'}
    >
      <Header />
       
      <SearchBar
        onSearch={handleSearch}
      />
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid
        item
        lg={8}
        xl={9}
        xs={12}
      >
      {episode &&
      <EpisodeInfo
      className={classes.results}
        episode={episode[0]}
      />}
      </Grid>
      <Grid
        item
        lg={4}
        xl={3}
        xs={12}
      >{episode &&
        <Actors
          className={classes.members}
          actors={episode[0].characters}
        />}
      </Grid>
      </Grid>
    </Page>
  );
};
Episodio.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Episodio;
