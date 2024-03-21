import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";

const App = () => {
  return (
    <main>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </main>
  );
};

export default App;
