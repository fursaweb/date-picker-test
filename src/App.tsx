import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import { theme } from 'styleguide';
import 'style.scss'
import Input from 'components/Input';
import CalendarPopup from 'components/CalendarPopup';
import Notifications from 'components/Notifications';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app styleguide-v2">
        <h1>Test Assignment</h1>
        <div className="sections">
          <section>
            <h2>Input Styling</h2>
            <div className="row">
              <Input label="Caption for field" placeholder="Placeholder" />
            </div>
            <div className="row">
              <Input label="Disabled" placeholder="Placeholder" disabled />
            </div>
            <div className="row">
              <Input label="Error" placeholder="Placeholder" error="Error text" icon="error" />
            </div>
            <div className="row">
              <Input label="Success" value="Text exemple for field" success readOnly />
            </div>
            <div className="row">
              <Input value="Search" icon="search" readOnly />
            </div>
          </section>
          <section>
            <h2>Calendar Popup</h2>
            <CalendarPopup />
          </section>
          <section>
            <h2>Notifications Component</h2>
            <Notifications />
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
