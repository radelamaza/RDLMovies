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

const UserProfileInfo = (props) => {
    const { className, episode, ...rest } = props;
    const classes = useStyles();
    

    

    

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardHeader title='Información Personal' />
            <Divider />
            <CardContent className={classes.content}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Nombre
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{episode.title}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>
                                {' '}
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Numero
                                </Typography>{' '}
                            </TableCell>
                            <TableCell>
                                <div>{episode.episode}</div>
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Temporada
                                </Typography>
                            </TableCell>
                            <TableCell>
                                {episode.season}
                            </TableCell>
                        </TableRow>
                        <TableRow selected>
                            <TableCell>
                                <Typography style={{ fontWeight: 'bold' }}>
                                    {' '}
                                    Fecha Estreno
                                </Typography>
                            </TableCell>
                            <TableCell>{episode.air_date}</TableCell>
                        </TableRow>
                        
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

UserProfileInfo.propTypes = {
    className: PropTypes.string,
    order: PropTypes.object.isRequired,
};

export default UserProfileInfo;
