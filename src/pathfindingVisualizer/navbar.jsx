import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiX } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";

const NavBar = (props) => {
  const brand = window.innerWidth > 600 ? "Pathfinding Visualizer" : "Pathfinder";
  const [isAlgorithmDropdownOpen, setAlgorithmDropdownOpen] = useState(false);
  const [isMazeDropdownOpen, setMazeDropdownOpen] = useState(false);
  const [isSpeedDropdownOpen, setSpeedDropdownOpen] = useState(false);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);
  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [algorithm, setAlgorithm] = useState("Visualize Algorithm");
  const [pathState, setPathState] = useState(false);
  const [speedState, setSpeedState] = useState("Medium");

  const selectAlgorithm = (selection) => {
    if (props.visualizingAlgorithm) {
      return;
    }
    if (
      selection === algorithm ||
      algorithm === "Visualize Algorithm" ||
      algorithm === "Select an Algorithm!"
    ) {
      setAlgorithm(selection);
    } else if (pathState) {
      clearPath();
      setAlgorithm(selection);
    } else {
      setAlgorithm(selection);
    }
    setAlgorithmDropdownOpen(false);
  };

  const selectMaze = (selection) => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    clearTemp();
    setMazeDropdownOpen(false);
    if (selection === "Generate Random Maze") props.generateRandomMaze();
    else if (selection === "Generate Recursive Maze") props.generateRecursiveDivisionMaze();
    else if (selection === "Generate Vertical Maze") props.generateVerticalMaze();
    else if (selection === "Generate Horizontal Maze") props.generateHorizontalMaze();
  };

  const visualizeAlgorithm = () => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    if (pathState) {
      clearPath();
    }
    if (
      algorithm === "Visualize Algorithm" ||
      algorithm === "Select an Algorithm!"
    ) {
      setAlgorithm("Select an Algorithm!");
    } else {
      setPathState(true);
      setSettingsDropdownOpen(false);
      if (algorithm === "Visualize Dijkstra") props.visualizeDijkstra();
      else if (algorithm === "Visualize A*") props.visualizeAStar();
      else if (algorithm === "Visualize Greedy BFS") props.visualizeGreedyBFS();
      else if (algorithm === "Visualize Bidirectional Greedy")
        props.visualizeBidirectionalGreedySearch();
      else if (algorithm === "Visualize Breadth First Search")
        props.visualizeBFS();
      else if (algorithm === "Visualize Depth First Search")
        props.visualizeDFS();
      else if (algorithm === "Visualize Random Walk")
        props.visualizeRandomWalk();
    }
  };

  const clearGrid = () => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    props.clearGrid();
    setAlgorithm("Visualize Algorithm");
    setPathState(false);
  };

  const clearPath = () => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    props.clearPath();
    setPathState(false);
  };

  const clearTemp = () => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    props.clearGrid();
    setPathState(false);
  };

  const changeSpeed = (speed) => {
    if (props.visualizingAlgorithm || props.generatingMaze) {
      return;
    }
    let value = [10, 10];
    if (speed === "Slow") value = [50, 30];
    else if (speed === "Medium") value = [25, 20];
    else if (speed === "Fast") value = [10, 10];
    setSpeedState(speed);
    props.updateSpeed(value[0], value[1]);
    setSpeedDropdownOpen(false);
  };

  return (
    <nav className="bg-primary p-4 top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold" href="https://github.com/shadow0935/path-finding-visualizer">
          {brand}
        </a>
        <ul className="flex space-x-4 items-center">
          <li className="relative hidden lg:block">
            <button
              className="bg-white text-primary py-2 px-4 rounded hover:bg-gray-200 focus:outline-none flex items-center"
              type="button"
              onClick={() => setAlgorithmDropdownOpen(!isAlgorithmDropdownOpen)}
            >
              Algorithms
              <FiChevronDown className="ml-2" />
            </button>
            {isAlgorithmDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectAlgorithm("Visualize Dijkstra")}
                >
                  Dijkstra's Algorithm
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectAlgorithm("Visualize A*")}
                >
                  A* Algorithm
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectAlgorithm("Visualize Greedy BFS")}
                >
                  Greedy Best First Search
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() =>
                    selectAlgorithm("Visualize Bidirectional Greedy")
                  }
                >
                  Bidirectional Greedy Search
                </button>
                <div className="border-t my-2"></div>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() =>
                    selectAlgorithm("Visualize Breadth First Search")
                  }
                >
                  Breadth First Search
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() =>
                    selectAlgorithm("Visualize Depth First Search")
                  }
                >
                  Depth First Search
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectAlgorithm("Visualize Random Walk")}
                >
                  Random Walk
                </button>
              </div>
            )}
          </li>
          <li className="relative hidden lg:block">
            <button
              className="bg-white text-primary py-2 px-4 rounded hover:bg-gray-200 focus:outline-none flex items-center"
              type="button"
              onClick={() => setMazeDropdownOpen(!isMazeDropdownOpen)}
            >
              Mazes
              <FiChevronDown className="ml-2" />
            </button>
            {isMazeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectMaze("Generate Random Maze")}
                >
                  Random Maze
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectMaze("Generate Recursive Maze")}
                >
                  Recursive Division Maze
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectMaze("Generate Vertical Maze")}
                >
                  Vertical Division Maze
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => selectMaze("Generate Horizontal Maze")}
                >
                  Horizontal Division Maze
                </button>
              </div>
            )}
          </li>
          <li className="hidden md:block">
            <button
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              onClick={() => visualizeAlgorithm()}
            >
              {algorithm}
            </button>
          </li>
          <li className="hidden md:block">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => clearGrid()}
            >
              Clear Grid
            </button>
          </li>
          <li className="relative hidden lg:block">
            <button
              className="bg-white text-primary py-2 px-4 rounded hover:bg-gray-200 focus:outline-none flex items-center"
              type="button"
              onClick={() => setSpeedDropdownOpen(!isSpeedDropdownOpen)}
            >
              Speed: {speedState}
              <FiChevronDown className="ml-2" />
            </button>
            {isSpeedDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => changeSpeed("Fast")}
                >
                  Fast
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => changeSpeed("Medium")}
                >
                  Medium
                </button>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => changeSpeed("Slow")}
                >
                  Slow
                </button>
              </div>
            )}
          </li>
          <li className="hidden lg:block">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center"
              onClick={() => setHelpModalOpen(true)}
            >
              <FiHelpCircle className="mr-2" />
              Help
            </button>
          </li>
          <li className="lg:hidden block">
            <button
              className="text-2xl bg-white text-primary py-2 px-4 rounded hover:bg-gray-200 focus:outline-none flex items-center"
              type="button"
              onClick={() => setSettingsDropdownOpen(!isSettingsDropdownOpen)}
            >
              {isSettingsDropdownOpen ? <FiX /> : <AiFillSetting />}
            </button>
            {isSettingsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                <button
                  className="flex w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => setAlgorithmDropdownOpen(!isAlgorithmDropdownOpen)}
                >
                  Algorithms
                  <FiChevronDown className="ml-auto my-auto" />
                </button>
                {isAlgorithmDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectAlgorithm("Visualize Dijkstra")}
                    >
                      Dijkstra's Algorithm
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectAlgorithm("Visualize A*")}
                    >
                      A* Algorithm
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectAlgorithm("Visualize Greedy BFS")}
                    >
                      Greedy Best First Search
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() =>
                        selectAlgorithm("Visualize Bidirectional Greedy")
                      }
                    >
                      Bidirectional Greedy Search
                    </button>
                    <div className="border-t my-2"></div>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() =>
                        selectAlgorithm("Visualize Breadth First Search")
                      }
                    >
                      Breadth First Search
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() =>
                        selectAlgorithm("Visualize Depth First Search")
                      }
                    >
                      Depth First Search
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectAlgorithm("Visualize Random Walk")}
                    >
                      Random Walk
                    </button>
                  </div>
                )}
                <button
                  className="flex w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => setMazeDropdownOpen(!isMazeDropdownOpen)}
                >
                  Mazes
                  <FiChevronDown className="ml-auto my-auto" />
                </button>
                {isMazeDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectMaze("Generate Random Maze")}
                    >
                      Random Maze
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectMaze("Generate Recursive Maze")}
                    >
                      Recursive Division Maze
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectMaze("Generate Vertical Maze")}
                    >
                      Vertical Division Maze
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => selectMaze("Generate Horizontal Maze")}
                    >
                      Horizontal Division Maze
                    </button>
                  </div>
                )}
                <button
                  className="block w-full text-left px-4 py-2 font-bold border-2 border-gray-300 bg-gray-100 text-primary hover:bg-gray-200 md:hidden transition duration-300"
                  type="button"
                  onClick={() => visualizeAlgorithm()}
                >
                  {algorithm}
                </button>
                <button
                  className="block w-full text-left px-4 py-2 font-bold border-2 border-gray-300 bg-gray-100 text-primary hover:bg-gray-200 md:hidden transition duration-300"
                  type="button"
                  onClick={() => clearGrid()}
                >
                  Clear Grid
                </button>
                <button
                  className="flex w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => setSpeedDropdownOpen(!isSpeedDropdownOpen)}
                >
                  Speed: {speedState}
                  <FiChevronDown className="ml-auto my-auto" />
                </button>
                {isSpeedDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => changeSpeed("Fast")}
                    >
                      Fast
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => changeSpeed("Medium")}
                    >
                      Medium
                    </button>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      type="button"
                      onClick={() => changeSpeed("Slow")}
                    >
                      Slow
                    </button>
                  </div>
                )}
                <button
                  className="flex w-full text-left px-4 py-2 hover:bg-gray-200"
                  type="button"
                  onClick={() => setHelpModalOpen(true)}
                >
                  <FiHelpCircle className="mr-2 my-auto" />
                  Help
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
      {isHelpModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm border-primary border-2 w-11/12 md:w-full">
            <h2 className="text-lg font-bold mb-4">How to Use the App</h2>
            <p className="mb-4">Click and drag to change the position of the start or end node.</p>
            <p className="mb-4">Click and hover to add walls to build a custom maze.</p>
            <p className="mb-4">Select a maze algorithm and then visualize the pathfinding algorithm.</p>
            <p className="mb-4">Click "Clear Grid" to reset the grid.</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setHelpModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
