import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { getPersonajes} from 'utils/get';
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
  const { className, name, numero, ...rest } = props;

  const classes = useStyles();

  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [page, setPage] = useState(0);
  const [booleano, setBooleano] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(false)
  async function fetchData() {
    console.log(name,numero)
    const [personajes] = await Promise.all([getPersonajes(name.replace(' ','+'),numero)])
    setPersonajes(personajes.res)
    console.log(personajes)
    return personajes
  }
  const handleVolverAtras = () => {
    window.history.back()
  }
  
  React.useEffect(() => {
    
    if (!booleano){
      fetchData()}
      setBooleano(true)
  }, []);

  

  async function handleChangePage(event, page)  {
    setPage(page);
    const [personajes] = await Promise.all([getPersonajes(name.replace(' ','+'),(page*10))])
    setPersonajes(personajes.res)
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };

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
        
        <Divider />
        <CardContent className={classes.content}>
          <PerfectScrollbar>
            <div className={classes.inner}>
              <Table>
                <TableHead>
                  <TableRow>
                    
                    <TableCell>Nombre</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {personajes && personajes.slice(0, rowsPerPage).map(customer => (
                    <TableRow
                      hover
                      key={customer.id}
                      selected={selectedCustomers.indexOf(customer.id) !== -1}
                    >
                      
                      <TableCell>
                        <div className={classes.nameCell}>
                          <Avatar
                            className={classes.avatar}
                            src={customer.img}
                          >
                            {getInitials(customer.name)}
                          </Avatar>
                          <div>
                            <Link
                              color="inherit"
                              component={RouterLink}
                              to={"/RDLMovies/personaje/"+customer.name.replace(" ","+")+"/"}
                              variant="h6"
                            >
                              {customer.name}
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
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={-1}
            labelRowsPerPage=''
            rowsPerPage={rowsPerPage}
            onChangePage={handleChangePage}
            page={page}
            rowsPerPageOptions={[]}
          />
        </CardActions>
      </Card>
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  personajes: PropTypes.array.isRequired
};

Results.defaultProps = {
  personajes: []
};

export default Results;
