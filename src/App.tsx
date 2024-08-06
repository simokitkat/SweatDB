import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/index.scss";
import SharedLayout from "./pages/SharedLayout";
import HomePage from "./pages/HomePage";
import BodyPartExercisesPage from "./pages/BodyPartExercisesPage";
import EquipmentExercisesPage from "./pages/EquipmentExercisesPage";
import MuscleGroupExercises from "./pages/MuscleGroupExercises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "body-parts", element: <BodyPartExercisesPage /> },
      { path: "equipment", element: <EquipmentExercisesPage /> },
      { path: "muscle-groups", element: <MuscleGroupExercises /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
