import React, { Fragment, memo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "red",
  },
  links: {
    textDecoration: "underline",
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
      <Accordion
        className={classes.root}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            variant="body1"
            align="left"
            sx={{ width: "40%", mr: 2, flexShrink: 0 }}
          >
            Junior Software Developer
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            <a
              href="https://conceptshub.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              ConceptsHub Kenya &middot;
            </a>
            <br />
            <small>
              Jan 2021 - Mar 2021 <br />1 Year
            </small>
            <br />
            <small>Nairobi, Kenya</small>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" align="left">
            <ul>
              <li>
                Worked with the development team to develop backend and
                front-end applications with Express, Mongo and React JS.
              </li>
              <li>
                Deployed web applications through Continuous
                Integration/Development on Github.
              </li>
              <li>
                Collaborated with developers to implement new web features.
              </li>
              <li>Built email templates with MJML</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            variant="body1"
            align="left"
            sx={{ width: "40%", mr: 2, flexShrink: 0 }}
          >
            Frontend Web Application Developer
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{ color: "text.secondary" }}
          >
            <a
              href="https://gebeya.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              Gebeya Inc&middot; Freelance
            </a>
            <br />
            <small>
              Jan 2021 - Jul 2021 <br />7 months
            </small>
            <br />
            <small>Nairobi, Kenya</small>
            <br />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" align="left">
            <ul>
              <li>
                Develop test and deploy web and mobile interfaces in ReactJs.
              </li>
              <li>
                Write well designed, testable, efficient code by using best
                software development practices like High Cohesion - Low Coupling
                to reduce module complexion in React.
              </li>
              <li>
                Build website layout/user interfaces by using standard Reactjs
                components as well as React Hooks integrating data from various
                back-end services and databases.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            variant="body1"
            align="left"
            sx={{ width: "40%", mr: 2, flexShrink: 0 }}
          >
            Software Developer
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{ color: "text.secondary" }}
          >
            <a
              href="http://cmis.ombudsman.go.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.links}
            >
              Commission on Administrative Justice &middot; Intern
            </a>
            <br />
            <small>
              Mar 2022 - present <br />1 year
            </small>
            <br />
            <small>Nairobi, Kenya</small>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" align="left">
            <ul>
              <li>
                eveloped and maintained a complaints management information
                system in PHP and JavaScript.
              </li>
              <li>Database development and query in SQL</li>
              <li>
                Server Management and Administration VMWare.Enforced network and
                data security through Identity Access Management and Monitoring.
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
}

export default memo(ControlledAccordions);
