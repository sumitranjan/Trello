import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "Not Started",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn JavaScript",
      },
      {
        id: uuidv4(),
        title: "Learn Git",
      },
      {
        id: uuidv4(),
        title: "Learn Python",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "In Development",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn CSS",
      },
      {
        id: uuidv4(),
        title: "Learn Java",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Learn HTML",
      },
    ],
  },
];

export default mockData;
