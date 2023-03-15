import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/Home";
import Mobiles from "./components/Mobiles";
import RQMobile from "./components/RQMobile";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mobiles">Mobiles</Link>
              </li>
              <li>
                <Link to="/rq-mobiles">RQMobiles</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mobiles" element={<Mobiles />} />
            <Route path="/rq-mobiles" element={<RQMobile />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools position={"bottom-right"} initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
