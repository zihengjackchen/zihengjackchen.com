+++
authors = ["Ziheng Chen"]
title = "OpenFlights: Flight Information Processing"
date = "2021-05-20"
tags = [
    "c++", "data-structures", "large-scale-data-processing"
]
+++

[Source (GitHub)](https://github.com/zihengjackchen/CS225FinalProject)

#### Deliverables
* [Report](https://github-dev.cs.illinois.edu/cs225-sp21/rmday2-yuen9-zihengc2-haoyu9/blob/master/CS%20225%20Final%20Project%20Report.pdf)
* [Presentation Video](https://youtu.be/r_ltZNUqKkw)
* [Presentation Slides](https://github-dev.cs.illinois.edu/cs225-sp21/rmday2-yuen9-zihengc2-haoyu9/blob/master/CS%20225%20Final%20Project%20Presentation.pdf)


#### Project Overview
##### Introduction
We utilized data from [OpenFlights](https://openflights.org/data.html) to create a graph representation of airports and their routes. Our project incorporates three key algorithms: Djikstra's algorithm for finding the shortest path between two airports, a Landmark Path algorithm for determining the shortest path between two airports with landmarks in between, and a Page Rank algorithm to identify important airports.

##### Code and Data Overview
The project codebase comprises several files, each serving a specific purpose:
* **Airport:** Defines the vertices of our graph structure, with details such as name, ID, city, country, and geographical coordinates.
* **Flight:** Constructs edges (flights) between airports, where the weight of an edge represents the distance between two airports.
* **airport_graph:** The graph class supporting the creation and insertion of vertices and edges.
* **BFS:** Implements Breadth-First Search for graph traversal.
* **Djikstras:** Implements Djikstra's algorithm for finding the shortest path.
* **Landmark:** Implements the Landmark Path algorithm.
* **PageRank:** Implements the Page Rank algorithm.
* **main:** Contains tests for the algorithms.

##### Running the Program
To execute the program, use the 'finalproject' executable and follow these steps:
1. Compile with `make all`.
2. Run the program with `./finalproject`.
3. Choose the dataset to construct the graph.
4. Follow on-screen instructions to perform various operations, such as BFS traversal, shortest path calculations, PageRank, and Landmark Path. Some operations may require custom inputs.

To end the program, use `Ctrl+C`.

#### Contributions
- Led a team in a final project using OpenFlights data to construct a graph of airports and routes
- Implemented key algorithms, including Djikstra's, Landmark Path, and Page Rank, for efficient analysis of airport connectivity and importance
- Developed a modular codebase with distinct files for Airport, Flight, airport_graph, BFS, Djikstras, Landmark, PageRank, and main, ensuring a clear and organized structure
- Enabled user-friendly program execution with detailed instructions, dataset selection, and interactive operations, enhancing accessibility
- Conducted comprehensive testing covering airport construction, graph building, PageRank, BFS traversal, Djikstra's algorithm, and Landmark Path algorithm