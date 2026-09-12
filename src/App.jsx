import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Chapter from "./pages/Chapter";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Progress from "./pages/Progress";
import Author from "./pages/Author";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/practice"
                    element={<Practice />}
                />

                <Route
                    path="/practice/:chapter"
                    element={<Chapter />}
                />

                <Route
                    path="/quiz/:chapter/:difficulty"
                    element={<Quiz />}
                />

                <Route
                    path="/result"
                    element={<Result />}
                />

                <Route
                    path="/progress"
                    element={<Progress />}
                />

                <Route
                    path="/author"
                    element={<Author />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;