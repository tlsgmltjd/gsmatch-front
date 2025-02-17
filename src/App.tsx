import { Route, Routes } from "react-router-dom";
import * as P from "./Pages";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<P.SignupPage />} />
        <Route path="/login" element={<P.LoginPage />} />
        <Route path="/main" element={<P.MainPage />} />
        <Route
          path="/"
          element={<PrivateRouter element={<P.ProfilePage />} />}
        />
        <Route
          path="/request"
          element={<PrivateRouter element={<P.RequestPage />} />}
        />
        <Route
          path="/notice"
          element={<PrivateRouter element={<P.NoticePage />} />}
        />
        <Route
          path="/chat"
          element={<PrivateRouter element={<P.ChattingPage />} />}
        />

        <Route
          path="/survey"
          element={<PrivateRouter element={<P.SurveyPage />} />}
        />

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
