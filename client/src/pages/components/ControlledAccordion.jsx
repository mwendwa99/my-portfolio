import React, { Fragment, memo } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'red',
    },
    links: {
        textDecoration: 'underline',
        color: theme.palette.secondary.contrastText,
    },
}));

function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Fragment>
            <Accordion className={classes.root} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6" align='left' sx={{ width: '40%', flexShrink: 0 }}>
                        <strong>Junior Web Developer</strong>
                    </Typography>
                    <Typography variant='h6' sx={{ color: 'text.secondary' }}>
                        <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            ConceptsHub Kenya &middot; Internship
                        </a>
                        <br />
                        <small>Jan 2021 - Mar 2021 <br />3 mos</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Assisted the web development team with wireframes using Figma and Adobe illustrator</li>
                            <li>Deployed web applications through Continuous Integration/Development on Github</li>
                            <li>Built email templates with MJML</li>
                            <li>Brainstormed and deployed applications on AWS cloud platform and Heroku.</li>
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
                        <strong>Web Developer</strong>
                    </Typography>
                    <Typography variant="h6" align='left' sx={{ color: 'text.secondary' }}>
                        <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            PemterGroup &middot; Freelance
                        </a>
                        <br />
                        <small>Jan 2021 - Jul 2021 <br />7 mos</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                        <br />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Designed the data and presentation layer of the web application’s front-end
                                with Material ui and Figma
                            </li>
                            <li>Used additional JavaScript libraries such as React Context API to manage the
                                web application’s state, derive computed data from the state of the system,
                                and make asynchronous API calls.</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant="h6" align='left' sx={{ width: '40%', flexShrink: 0 }}>
                        <strong>Software Developer</strong>
                    </Typography>
                    <Typography variant="h6" align='left' sx={{ color: 'text.secondary' }}>
                        <a href="https://vcck.org" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            Vulnerable Children Concern Kenya &middot; Freelance
                        </a>
                        <br />
                        <small>Oct 2020 - Nov 2021 <br />1 year</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Wrote well designed, testable, efficient code by using best software
                                development practices.</li>
                            <li>Built website layout/user interfaces by using standard ReactJS components.</li>
                            <li>Intergrated a backend email service with nodemailer</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

export default memo(ControlledAccordions);