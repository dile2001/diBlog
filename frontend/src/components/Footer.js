import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {description}
        </Typography>
        <Copyright />
      </Container>
      {/* <p>
                                    <span class="span-title">Social</span>
                                    <span class="span-icons">
                                        <a target="_blank" href="https://www.facebook.com/" class="mdi fonts-icons mdi-facebook"></a>
                                        <a target="_blank" href="https://twitter.com/" class="mdi fonts-icons mdi-twitter"></a>
                                        <a target="_blank" href="https://www.instagram.com/" class="mdi fonts-icons mdi-instagram"></a>
                                        <a target="_blank" href="https://www.linkedin.com/" class="mdi fonts-icons mdi-linkedin"></a>
                                        <a target="_blank" href="https://www.behance.net/" class="mdi fonts-icons mdi-behance"></a>
                                        <a target="_blank" href="https://dribbble.com/" class="mdi fonts-icons mdi-dribbble"></a>
                                        <a target="_blank" href="https://medium.com/" class="mdi fonts-icons mdi-medium"></a>
                                        <a target="_blank" href="https://github.com/" class="mdi fonts-icons mdi-github-circle"></a>
                                    </span>
                                </p> */}
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
