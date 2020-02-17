import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { useLocation } from '@reach/router';

import FabIcon from '../../components/FabIcon';
import { shareOnTwitter, shareOnFacebook } from '../../utils/sharer';

function DrawerSharer() {
  const location = useLocation();
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem
        component="a"
        button
        href={shareOnTwitter({ url: location.href, title: document.title })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItemIcon>
          <FabIcon icon={faTwitter} />
        </ListItemIcon>
        <ListItemText primary="Share on Twitter" />
      </ListItem>
      <ListItem button component="a" href={shareOnFacebook({ url: location.href })} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faFacebookSquare} />
        </ListItemIcon>
        <ListItemText primary="Share on Facebook" />
      </ListItem>
    </List>
  );
}

export default DrawerSharer;
