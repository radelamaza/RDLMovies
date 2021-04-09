import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Page, SearchBar } from 'components';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Tabs, Tab, Button, colors, Grid,CircularProgress } from '@material-ui/core';
import { Header, PersonajeInfo, Appearance, Quotes } from './components';

import { getPersonaje, getQuotes } from 'utils/get';




const user = {tags:[], profile:{speciality: " "}, cuestionarios:[], autoreportes:[]};
const handleSearch = () => {};


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    //minWidth: '400px',
  },
  inner: {
    
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  },
  info_contacto: { 
    marginLeft: '2%',
    marginTop: '1%',
    maxWidth: '600px',
    
    //minWidth: 500px;
  },
  contenedor_martin: {
    display: 'flex'
  },
  info_tags: {
    display: 'flex'
  }
}));

const Profile = props => {
  const { match, history, className, ...rest } = props;
  const classes = useStyles();
  const { name} = match.params;
  const [usuario, setUsuario] = useState([]);
  const [booleano, setBooleano] = useState(false)
  const [quotes, setQuotes] = useState([])
  
  async function fetchData() {
    
    const [ res, quotes] = await Promise.all([getPersonaje(name),getQuotes(name)])
    console.log(res.res)
    setUsuario(res.res[0]);
    console.log(quotes.res)
    setQuotes(quotes.res)
    setBooleano(true);

    return res
  }
  
  React.useEffect(() => {
    
    if (!booleano){
      fetchData()}
  }, []);


  const handleVolverAtras = () => {
    window.history.back()
  }
  

 
  


  return (

    
    <Page
      className={classes.root}
      
      title="Profile"
    >
      <Button
            color="primary"
            variant="contained"
            onClick={handleVolverAtras}
          >
            Volver Atrás
          </Button> 
      
      { usuario && (
      <Header personaje={usuario}/>)}
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      md={12}
      container
      spacing={3}
    >
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      md={8}
      lg={8}
      container
      spacing={3}
    >
      
      <Grid
        item
        lg={12}
        md={6}
        xl={9}
        xs={12}
      >
      {usuario &&
      <PersonajeInfo
      className={classes.results}
        personaje={usuario}
      />}
      </Grid>
      <Grid
        item
        lg={12}
        xl={3}
        xs={12}
      >{usuario &&
        <Quotes
          className={classes.members}
          appearance={quotes}
          title={'Frases Celebres'}
        />}
      </Grid>
      </Grid>
      <Grid
      {...rest}
      className={clsx(classes.root, className)}
      container
      lg={4}
      md={4}
      spacing={3}
    >

      <Grid
        item
        lg={12}
        xl={9}
        xs={12}
      >{usuario &&
        <Appearance
          className={classes.members}
          appearance={usuario.better_call_saul_appearance}
          title={'Better Call Saul'}
        />}
      </Grid>
      <Grid
        item
        lg={12}
        xl={3}
        xs={12}
      >{usuario &&
        <Appearance
          className={classes.members}
          appearance={usuario.appearance}
          title={'Breaking Bad'}
        />}
      </Grid>
      </Grid>
      </Grid>

    </Page>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Profile;




