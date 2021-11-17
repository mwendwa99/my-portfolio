import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    links: {
        textDecoration: 'underline',
        color: theme.palette.secondary.contrastText,
    },
}));

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6" align='left' sx={{ width: '40%', flexShrink: 0 }}>
                        <Typography variant="h5" align='left'>
                            <strong>Junior Web Developer</strong>
                        </Typography>
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                        <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            ConceptsHub Kenya &middot; Internship
                        </a>
                        <br />
                        <small>Jan 2021 - Mar 2021 3 mos</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Assisted the web development team with all aspects of website and application design.</li>
                            <li>Built email templates with MJML</li>
                            <li>Brainstormed new tech applications such as digital storage and mobile technulogy.</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography variant="h6" align='left' sx={{ width: '40%', flexShrink: 0 }}>
                        <Typography variant="h5" align='left'>
                            <strong>Junior Web Developer</strong>
                        </Typography>
                    </Typography>
                    <Typography variant="h6" align='left' sx={{ color: 'text.secondary' }}>
                        <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            PemterGroup &middot; Freelance
                        </a>
                        <br />
                        <small>Jan 2021 - Jul 2021 7 mos</small>
                        <small>Nairobi, Kenya</small>
                        <br />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
