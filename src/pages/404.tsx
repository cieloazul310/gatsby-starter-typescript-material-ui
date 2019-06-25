import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import reducer from '../utils/reducer';
import { LocationWithState, createInitialAppState } from '../types';

interface Props {
  location: LocationWithState;
}

function NotFoundPage({ location }: Props) {
  console.log(location);
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));
  return (
    <Layout title="Not Found" location={location} appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        NOT FOUND
      </Typography>
      <Typography variant="h5" gutterBottom>
        <code>{location.pathname}</code> doesn&#39;t exist.
      </Typography>
      <AppLink to="/" appState={appState}>
        Top Page
      </AppLink>
    </Layout>
  );
}

export default NotFoundPage;