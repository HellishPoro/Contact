import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import { Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';

export const MainApp = () => {
  return (
    <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactListPage />} />
          <Route path="contact">
            <Route index element={<ContactListPage />} />
            <Route path=":contactId" element={<ContactPage />} />
          </Route>
          <Route path="groups">
            <Route index element={<GroupListPage />} />
            <Route path=":groupId" element={<GroupPage />} />
          </Route>
          <Route path="favorit" element={<FavoritListPage />} />
        </Route>
      </Routes>
  </ThemeProvider>
  );
};
