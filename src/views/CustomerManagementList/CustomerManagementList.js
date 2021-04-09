import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import axios from 'utils/axios';
import { Grid } from '@material-ui/core';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = props => {
  const classes = useStyles();
  const { className, ...rest } = props;
  const [seasonsBCS, setSeasonsBCS] = useState([]);
  const [seasonsBB, setSeasonsBB] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchSeasons = () => {
      axios.get('/api/management/seasonsBCS').then(response => {
        if (mounted) {
          setSeasonsBCS(response.data.seasonsBCS);
        }
      });
      axios.get('/api/management/seasonsBB').then(response => {
        if (mounted) {
          setSeasonsBB(response.data.seasonsBB);
        }
      });
    };
    console.log('hola')
    fetchSeasons();

    return () => {
      mounted = false;
    };
  }, []);

  const handleFilter = () => {};
  const handleSearch = () => {};

  return (
    <Page
      className={classes.root}
      title="Customer Management List"
    >
      <Header />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      spacing={2}
    >
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
      {seasonsBB && (
        <Results
          className={classes.results}
          seasons={seasonsBB}
          title={'Breaking Bad'}
        />
      )}
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={3}
        xs={12}
      >
      {seasonsBCS && (
        <Results
          className={classes.results}
          seasons={seasonsBCS}
          title={'Better Call Saul'}
        />
      )}
      </Grid>
      </Grid>
    </Page>
  );
};

export default CustomerManagementList;
