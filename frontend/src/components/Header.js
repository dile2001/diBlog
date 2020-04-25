import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const menus = [
  
  { title: 'Work Experience', url: '#' },
  // { title: 'Skills', url: '#' },
  // { title: 'Certificates', url: '#' },
  {title: 'My Apps', url:'#'}, //dile2001.visualstudio.com , https://github.com/dile2001,https://github.com/henryle
  { title: 'Books', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Travel', url: '#' },
  { title: 'Blog', url: '#' },
  { title: 'Contact Me', url: '#' }
  // { title: 'Online-store', url: '#' },
  
];
const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  menu:{
    padding:'8px 26px',
    textTransform:'none'
  }
}));
const defaulTitle = "DI LE";
export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          {title? title : defaulTitle}
        </Typography>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {menus.map((section) => (
          <Button
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.menu}
          >
            {section.title}
          </Button>
        ))}
      </Toolbar>
      </Toolbar>
      
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
