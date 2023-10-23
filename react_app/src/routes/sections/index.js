import { useEffect, useState, lazy, Suspense } from 'react';
//  react-router-dom
import { Navigate, useRoutes, Outlet } from 'react-router-dom';
// config
import { BASE_LINK } from 'src/config-global';
// utils
import { zohoLinkStorageGetItem, zohoLinkStorageAvailable } from 'src/utils/storage-available';
// layouts
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';
// ----------------------------------------------------------------------
const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const PageTwo = lazy(() => import('src/pages/dashboard/two'));
const PageThree = lazy(() => import('src/pages/dashboard/three'));
const PageFour = lazy(() => import('src/pages/dashboard/four'));
const PageFive = lazy(() => import('src/pages/dashboard/five'));
const PageSix = lazy(() => import('src/pages/dashboard/six'));
const Page404 = lazy(() => import('src/pages/404'));
// ----------------------------------------------------------------------

export default function Router() {
  console.log(BASE_LINK);
  return useRoutes([
    {
      path: `${BASE_LINK}/index.html/`,
      element: <Navigate to={`${BASE_LINK}/index.html/dashboard`} replace />,
    },

    {
      path: `${BASE_LINK}/index.html/dashboard`,
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: `${BASE_LINK}/index.html/dashboard/two`, element: <PageTwo /> },
        { path: `${BASE_LINK}/index.html/dashboard/three`, element: <PageThree /> },
        {
          path: `${BASE_LINK}/index.html/dashboard/group`,
          children: [
            { element: <PageFour />, index: true },
            { path: `${BASE_LINK}/index.html/dashboard/group/five`, element: <PageFive /> },
            { path: `${BASE_LINK}/index.html/dashboard/group/six`, element: <PageSix /> },
          ],
        },
      ],
    },

    // No match 404
    { path: '*', element: <Page404 /> },
  ]);
}
