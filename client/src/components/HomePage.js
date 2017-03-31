import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardTitle} from 'material-ui/Card';

const HomePage = () => (
    <MuiThemeProvider>
    <Card className="container">
    <CardTitle title="Nick's Auth App" subtitle="This is HomePage." />
    </Card>
    </MuiThemeProvider>
);

export default HomePage;