import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// views
import CountdownTimerDemo from './views/CountdownTimerDemo';
import BottomSheetDemo from './views/BottomSheetDemo';

function App() {
    return (
        <Router>
            <nav className="flex justify-center py-4 space-x-8 font-semibold h-[15vh]">
                <Link to="/countdown-timer">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Countdown Timer Demo
                    </button>
                </Link>
                <Link to="/bottom-sheet">
                    <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Bottom Sheet Demo
                    </button>
                </Link>
            </nav>
            <main className="h-[85vh] relative overflow-hidden">
                <Routes>
                    <Route path="/" element={<CountdownTimerDemo />} />
                    <Route path="/countdown-timer" element={<CountdownTimerDemo />} />
                    <Route path="/bottom-sheet" element={<BottomSheetDemo />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
