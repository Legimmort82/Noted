import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Page404 from "./pages/Page404/Page404.jsx";
import Note from "./pages/Note.jsx";
import EmptyNote from "./pages/EmptyNote.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <EmptyNote />,
      },
      {
        path: "/note/:noteId",
        element: <Note />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
