import { Hypergraph } from "./priority-traversal-types";

export const FranconeriHideHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Bar chart",
    description: "Height of Charlie and River at different ages. With axes age and height in inches.",
    parents: [],
    children: ["1", "2"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Age",
    description: "Contains 3 groups.",
    parents: ["0"],
    children: ["3", "4", "5"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Name",
    description: "Contains 2 groups.",
    parents: ["0"],
    children: ["6", "7"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "Age 8",
    description: "Contains 2 points.",
    parents: ["1"],
    children: ["8", "9"],
    priority: 1,
  },
  "4": {
    id: "4",
    displayName: "Age 10",
    description: "Contains 2 points.",
    parents: ["1"],
    children: ["10", "11"],
    priority: 1,
  },
  "5": {
    id: "5",
    displayName: "Age 12",
    description: "Contains 2 points.",
    parents: ["1"],
    children: ["12", "13"],
    priority: 1,
  },
  "6": {
    id: "6",
    displayName: "Charlie",
    description: "Contains 3 points.",
    parents: ["2"],
    children: ["8", "10", "12"],
    priority: 1,
  },
  "7": {
    id: "7",
    displayName: "River",
    description: "Contains 3 points.",
    parents: ["2"],
    children: ["9", "11", "13"],
    priority: 1,
  },
  "8": {
    id: "8",
    displayName: "Charlie at 8",
    description: "52 inches.",
    parents: ["3", "6"],
    children: [],
    priority: 1,
  },
  "9": {
    id: "9",
    displayName: "River at 8",
    description: "50 inches.",
    parents: ["3", "7"],
    children: [],
    priority: 1,
  },
  "10": {
    id: "10",
    displayName: "Charlie at 10",
    description: "54 inches.",
    parents: ["4", "6"],
    children: [],
    priority: 1,
  },
  "11": {
    id: "11",
    displayName: "River at 10",
    description: "57 inches.",
    parents: ["4", "7"],
    children: [],
    priority: 1,
  },
  "12": {
    id: "12",
    displayName: "Charlie at 12",
    description: "56 inches.",
    parents: ["5", "6"],
    children: [],
    priority: 1,
  },
  "13": {
    id: "13",
    displayName: "River at 12",
    description: "55 inches.",
    parents: ["5", "7"],
    children: [],
    priority: 1,
  },
};
