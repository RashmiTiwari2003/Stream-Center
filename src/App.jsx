import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Box className="flex flex-col" sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Outlet />
      </Box>
    ),
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: "/video/:id",
        element: <VideoDetail />,
      },
      {
        path: "/channel/:id",
        element: <ChannelDetail />,
      },
      {
        path: "/search/:searchTerm",
        element: <SearchFeed />,
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
