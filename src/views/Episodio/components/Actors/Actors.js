import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Button,
  Card,
  Link,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  colors
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { RecentActorsSharp } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    paddingBottom: 0
  },
  content: {
    paddingTop: 0
  },
  actions: {
    backgroundColor: colors.grey[50]
  },
  manageButton: {
    width: '100%'
  }
}));

const Actors = props => {
  const { actors, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        className={classes.header}
        title="Personajes"
        titleTypographyProps={{
          variant: 'overline'
        }}
      />
      <CardContent className={classes.content}>
        <List>
          {actors.map(actor => (
            <ListItem
              disableGutters
            >
              <Link
                              color="inherit"
                              component={RouterLink}
                              to={"/RDLMovies/personaje/"+actor.replace(" ","+")+"/"}
                              variant="h6"
                            >
                            
              
              <ListItemText
                primary={actor}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              </Link>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

Actors.propTypes = {
  className: PropTypes.string,
  members: PropTypes.array.isRequired
};

export default Actors;
