import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@mui/icons-material/Check';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import HelpIcon from '@mui/icons-material/Help';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        width: '100%',
        border: '0.5px solid lightgrey',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    font: {
        fontSize: '1.2rem'
    }
});

export default function SimpleCard({title, value, icon, color, valueColor}) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2" style={{color:  valueColor, fontWeight: 'bold', fontSize: '40px'}}>
                    {value}
                </Typography>
                <Typography className={classes.font} variant="h5" component="h2">
                    {((icon === CheckIcon) && < CheckIcon />) || ((icon === TrendingUpIcon) && < TrendingUpIcon />) || ((icon === LooksOneIcon) && < LooksOneIcon />) || ((icon === HelpIcon) && < HelpIcon />) } {title}
                </Typography>
            </CardContent>
        </Card>
    );
}