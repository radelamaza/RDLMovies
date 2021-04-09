import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import BarChartIcon from '@material-ui/icons/BarChart';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  Button,
  colors,
  Divider
} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import { useSelector } from 'react-redux';



const useStyles = makeStyles(theme => ({
  root: {},
  summaryButton: {
    backgroundColor: theme.palette.white,
    
  },
  contacto: {
    marginLeft: '2%',
    marginTop: '1%',
    width: '30%',
  },
  cover: {
    position: 'relative',
    height: 360,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage:
        'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
    },
    '&:hover': {
      '& $changeButton': {
        visibility: 'visible'
      }
    }
  },
  changeButton: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.white,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(3),
      bottom: 'auto'
    },
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  addPhotoIcon: {
    marginRight: theme.spacing(1)
  },
  div_derecha: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(2, 3)
  },
  container: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    padding: theme.spacing(2, 3),
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    marginTop: 120,
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  avatar: {
    border: `2px solid ${theme.palette.white}`,
    height: 120,
    width: 120,
    top: -60,
    left: theme.spacing(3),
    position: 'absolute'
  },
  details: {
    marginLeft: 136
  },
  actions: {
    position: 'relative',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1)
    },
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  pendingButton: {
    color: theme.palette.white,
    backgroundColor: colors.red[600],
    '&:hover': {
      backgroundColor: colors.red[900]
    }
  },
  personAddIcon: {
    marginRight: theme.spacing(1)
  },
  autoreporte: {
    marginRight: theme.spacing(1),
  },
  contenedor_martin: {
    display: 'inline-flex'
  },
  tipo_dolor: {
    border: '1px',
    marginLeft: 30,
    marginRight: theme.spacing(3),
    marginTop: 10,
    width: 500,
    height: 150
  },
  boton_autoreporte: {
    marginRight: "auto",
    marginTop: 0
  }

}));


const Header = props => {
  const { className, personaje, ...rest } = props;
  const classes = useStyles();
  const role = localStorage.getItem('role');


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      
      {}
      <div className={classes.container}>
        <img
          alt="Person"
          className={classes.avatar}
          src={personaje.img}
        />
        <div className={classes.details}>
          <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            {personaje.nickname}
          </Typography>
          <Typography
            component="h1"
            variant="h4"
          >
            {personaje.name}
          </Typography>
          
        </div>
        <div className={classes.div_derecha}>
        </div>
        {/* <div className={classes.actions}>
          {button}
          
          <Button
            className={classes.summaryButton}
            edge="start"
            component={RouterLink}
            variant="contained"
            to={"/profile/"+user.id+"/dashboard"}
          >
            <BarChartIcon className={classes.barChartIcon} />
            Ver Estadisticas
          </Button>
        </div> */}
      </div>
      
      <Divider className={classes.divider} />
        {}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
