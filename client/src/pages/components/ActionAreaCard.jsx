import React, { memo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(theme => ({
    links: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
}));

const ActionAreaCard = memo(({ image, title, description, link }) => {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small">
                    <a href={link} target="_blank" rel="noopener noreferrer" className={classes.links}>
                        Learn More
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
});

export default ActionAreaCard;
