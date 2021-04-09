import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';

import getInitials from 'utils/getInitials';
import { ReviewStars, GenericMoreButton, TableEditBar } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 700
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 42,
    width: 42,
    marginRight: theme.spacing(1)
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  }
}));

const Results = props => {
  const { className, seasons, title, ...rest } = props;

  const classes = useStyles();



 


  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        
      </Typography>
      <Card>
        <CardHeader
          title={title}
        />
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    
                    <TableCell align="center">Temporadas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {seasons.map(season => (
                    <TableRow
                      hover
                      key={season.id}
                    >
                      
                      <TableCell>
                        <div className={classes.nameCell}>
                          
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={"/temporada/"+season.tv+"/"+season.numero+"/"}
                              variant="h6"
                            >
                              {season.name}
                            </Link>
                          </div>
                        </div>
                      </TableCell>
                      
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  sasons: PropTypes.array.isRequired
};

Results.defaultProps = {
  seasons: []
};

export default Results;
