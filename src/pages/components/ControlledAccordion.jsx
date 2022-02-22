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
                    <Typography variant="body1" align='left' sx={{ width: '40%', mr: 2, flexShrink: 0 }}>
                        Web Developer
                    </Typography>
                    <Typography variant='body1' sx={{ color: 'text.secondary' }}>
                        <a href="https://conceptshub.co.ke" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            ConceptsHub Kenya &middot; Internship
                        </a>
                        <br />
                        <small>Jan 2021 - Mar 2021 <br />3 months</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Worked with the development team to
                                develop backend and front-end applications with Express, Mongo and React JS.
                            </li>
                            <li>Deployed web applications through Continuous Integration/Development on Github.</li>
                            <li>Collaborated with developers to implement new web features.</li>
                            <li>Built email templates with MJML</li>
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
                    <Typography variant="body1" align='left' sx={{ width: '40%', mr: 2, flexShrink: 0 }}>
                        Web Developer
                    </Typography>
                    <Typography variant="body1" align='left' sx={{ color: 'text.secondary' }}>
                        <a href="https://pemtergroup.com/" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            PemterGroup &middot; Freelance
                        </a>
                        <br />
                        <small>Jan 2021 - Jul 2021 <br />7 months</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                        <br />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Designed the data and presentation layer of the web application’s front-end
                                with Material ui and Figma.
                            </li>
                            <li>Used additional JavaScript libraries such as React Context API and Recoil to manage the
                                web application’s state, derive computed data from the state of the system,
                                and make asynchronous API calls.
                            </li>
                            <li>
                                Tested and updated the web application with Jest so that it can be used on all web browsers.
                            </li>
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
                    <Typography variant="body1" align='left' sx={{ width: '40%', mr: 2, flexShrink: 0 }}>
                        Software Developer
                    </Typography>
                    <Typography variant="body1" align='left' sx={{ color: 'text.secondary' }}>
                        <a href="https://vcck.org" target="_blank" rel="noopener noreferrer" className={classes.links}>
                            Vulnerable Children Concern Kenya &middot; Freelance
                        </a>
                        <br />
                        <small>Oct 2020 - Oct 2021 <br />1 year</small>
                        <br />
                        <small>Nairobi, Kenya</small>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1" align='left'>
                        <ul>
                            <li>Wrote well designed, testable, efficient code by using best software
                                development practices like High Cohesion - Low Coupling to reduce module complexion.</li>
                            <li>Built website layout/user interfaces by using standard ReactJS components as well as
                                React Hooks integrating data from various back-end services and databases.</li>
                            <li>Intergrated a backend email service with nodemailer</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Fragment>
    );
}

export default memo(ControlledAccordions);