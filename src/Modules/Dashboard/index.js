import React from 'react';
import useSWR from 'swr';
import { useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//import local files
import Layout from './../../Components/Layout';
import Card from './../../Components/Card';
import MenuCategory from './../../Components/Category/index';
import { showSidebar } from './../../Reducer/Slices/SideBar';
import { showSelector } from './../../Reducer/Slices/SideBar';

function Dashboard() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR('http://localhost:3000/api/v1/foods', fetcher);

  let match = useRouteMatch();
  const { show } = useSelector(showSelector);
  const dispatch = useDispatch();

  console.log(show);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Layout>
      <div className='container'>
        <MenuCategory />
        <Card data={data} />

        <button onClick={() => dispatch(showSidebar())}>show sidebar</button>
      </div>
    </Layout>
  );
}

export default {
  routeProps: {
    path: '/Dashboard',
    exact: true,
    component: Dashboard,
  },
  name: 'Dashboard',
};
