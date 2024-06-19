# Pathfinding Visualizer App

This project is a React+vite application that visualizes various pathfinding algorithms. It allows users to create custom mazes, select different algorithms, and visualize the pathfinding process.

## Features

- **Click and Drag**: Change the position of the start or end node by clicking and dragging.
- **Click and Hover**: Add walls to the grid by clicking and hovering to build a custom maze.
- **Select and Visualize Algorithms**: Choose a maze algorithm to generate a maze and then select a pathfinding algorithm to visualize the path.
- **Clear Grid**: Click "Clear Grid" to reset the grid and start over.

## Maze Algorithms

1. **Random Maze**: Generates a maze using a random pattern.
2. **Recursive Division Maze**: Generates a maze using the recursive division method.
3. **Vertical Division Maze**: Generates a maze using vertical divisions.
4. **Horizontal Division Maze**: Generates a maze using horizontal divisions.

## Pathfinding Algorithms

1. **Dijkstra's Algorithm**: Guarantees the shortest path.
2. **A\* Algorithm**: Uses heuristics to improve the performance of pathfinding.
3. **Greedy Best First Search**: Uses heuristics to find a path.
4. **Bidirectional Greedy Search**: Uses heuristics to search from both start and end nodes.
5. **Breadth First Search**: Explores all nodes at the present depth level before moving on to nodes at the next depth level.
6. **Depth First Search**: Explores as far as possible along each branch before backtracking.
7. **Random Walk**: Moves randomly from node to node.

## Installation

```bash
git clone git@github.com:shadow0935/path-finding-visualizer.git
cd path-finding-visualizer
npm install
```

- To Run the Application Locally
```bash
npm run dev
```
