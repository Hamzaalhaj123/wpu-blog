const comments = [
  {
    name: "Alice Johnson",
    text: "Great post! I really enjoyed reading it.",
    date: "2023-10-01",
    upvotes: 12,
    replies: [],
  },
  {
    name: "Bob Smith",
    text: "I found this article very insightful. Thanks for sharing!",
    date: "2023-10-02",
    upvotes: 8,
    replies: [],
  },
  {
    name: "Charlie Brown",
    text: "I disagree with some points mentioned, but overall a good read.",
    date: "2023-10-03",
    upvotes: 5,
    replies: [],
  },
  {
    name: "Diana Prince",
    text: "Excellent information! I learned a lot.",
    date: "2023-10-03",
    upvotes: 15,
    replies: [],
  },
  {
    name: "Ethan Hunt",
    text: "Could you provide more examples on this topic?",
    date: "2023-10-04",
    upvotes: 3,
    replies: [
      {
        name: "Ethan Hunt",
        text: "Could you provide more examples on this topic?",
        date: "2023-10-04",
        upvotes: 3,
        replies: [],
      },
    ],
  },
];

export default comments;
