import "./App.css";
import { HomeIcon } from "@radix-ui/react-icons"

function App() {
  return (
    <>
      <nav className="w-72 max-w-sm my-0 mt-8 px-8 m-auto">
        <ul className="flex justify-between">
          <li className="bg-[#ea580a] border-[#ea580a] text-[#FBFCF8] py-2 px-4 border-2 rounded-xl font-extrabold text-lg hover:cursor-pointer">Home</li>
          <li className="bg-[#ea580a] border-[#ea580a] text-[#FBFCF8] py-2 px-4 border-2 rounded-xl font-extrabold text-lg hover:cursor-pointer">About</li>
        </ul>
      </nav>
      <h1 className="mt-64 text-center text-4xl">Are we cooking?</h1>
    </>
  );
}

export default App;
