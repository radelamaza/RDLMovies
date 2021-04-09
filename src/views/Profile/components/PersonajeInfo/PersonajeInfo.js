import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {},
    content: {
        padding: 0,
    },
    actions: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        '& > * + *': {
            marginLeft: 0,
        },
    },
    buttonIcon: {
        marginRight: theme.spacing(1),
    },
}));

const PersonajeInfo = (props) => {
    const { className, personaje, ...rest } = props;
    const classes = useStyles();
    

    

    

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader title='Información' />
            <Divider />
            <CardContent className={classes.content}>
                <Table>
                    <TableBody>
                        
                        <TableRow selected>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Estado
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{personaje.status}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Actor
                                </Typography>
                            </TableCell>
                            <TableCell>
                                {personaje.portrayed}
                            </TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

PersonajeInfo.propTypes = {
    className: PropTypes.string,
    order: PropTypes.object.isRequired,
};

export default PersonajeInfo;
