# Josephus Problem

## Introduction

The Josephus Problem is a theoretical problem that involves a group of people standing in a circle. Every k-th person is eliminated in a sequential manner until only one person remains. This problem has historical significance and applications in computer science, particularly in algorithm design and data structures.

This application provides an interactive visual representation of the Josephus Problem using a circular linked list, implemented in JavaScript and HTML.

## Usage

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.)
- Ensure all files are in the same directory

### Steps to Run the Application

1. **Open the Application**:
    - Download or clone the repository to your local machine.
    - Navigate to the directory containing the files.
    - Open the `index.html` file in your web browser.

2. **Input Members Count**:
    - On the main page, you will see a text box labeled "Members Count".
    - Enter the number of people (nodes) you want to include in the circle. For example, to simulate the problem with 10 people, enter `10`.

3. **Start the Simulation**:
    - After entering the desired number of members, click the "Play" button to start the simulation.
    - The application will create a circular representation of the people standing in the circle.

4. **Visualizing the Process**:
    - The nodes will be displayed in a circular formation on the screen.
    - The elimination process will begin, and each eliminated node will be marked visually (e.g., turning red or labeled as "Holder").
    - The simulation will continue until only one node remains in the circle.

5. **Observe the Result**:
    - The last remaining node is the "safe position" in the Josephus Problem.

6. **Restart the Simulation**:
    - To run a new simulation, refresh the page and enter a new number of participants.

### Example Use Case

1. **Enter Members Count**:
    - Input `10` in the "Members Count" text box.

2. **Play the Simulation**:
    - Click the "Play" button.
    - The application will display 10 nodes in a circle and begin the elimination process.
    - Observe how nodes are sequentially removed until one node is left.

3. **Repeat**:
    - Refresh the page to restart the simulation and try different numbers of members to see how the safe position changes.

## Circular Linked List

The application uses a circular linked list to represent the group of people in the Josephus Problem. Here’s a brief explanation of how it works:

- **Circular Linked List**: A linked list where the last node points back to the first node, forming a circle. This structure allows for continuous traversal of the list without reaching an endpoint.
- **Node Elimination**: Starting from a specified point, nodes (people) are removed from the list at regular intervals (every k-th node). The process continues in a circular manner until only one node remains.
- **Visualization**: The application visually marks the eliminated nodes, helping users understand the progression of the problem.

By using this interactive application, you can better understand the mechanics of the Josephus Problem and visualize the elimination process in a clear and intuitive way. The circular linked list provides an efficient way to handle the continuous nature of the problem, making it an ideal choice for this application.

## Alternative Access

Users can also visit the application online at [Here]([http://naderidev.ir/gg](https://naderidev.github.io/linklist-Josephus/)) instead of running it locally.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.
