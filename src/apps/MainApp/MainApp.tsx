import { useEffect } from 'react';
import './MainApp.scss';
import {ThemeProvider} from 'react-bootstrap';
import { Route, Routes} from 'react-router-dom';
import {Layout} from 'src/components/Layout';
import {ContactListPage, GroupPage, ContactPage, FavoritListPage, GroupListPage} from 'src/pages';
import { useAppDispatch } from 'src/store/hooks/hooks';
import { fetchContacts, fetchFavorites, fetchGroups } from 'src/store/thunks/thunks';

export const MainApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchGroups());
    dispatch(fetchFavorites());
  }, [dispatch]);


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
