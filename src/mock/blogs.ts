export type BlogProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  createdAt: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  readingTime: string;
};
export const blogs: BlogProps[] = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch",
    image: "https://via.placeholder.com/600x400.png?text=Web+Development",
    description:
      "Explore the latest trends in web development, from AI-driven design to the rise of Web3 technologies. Stay ahead of the curve with these insights.",
    createdAt: "2024-08-15",
    user: {
      name: "John Doe",
      image: "https://via.placeholder.com/100x100.png?text=John+Doe",
    },
    rating: 4.5,
    readingTime: "6 min read",
  },
  {
    id: 2,
    title: "10 Tips for a More Productive Morning Routine",
    image: "https://via.placeholder.com/600x400.png?text=Morning+Routine",
    description:
      "Start your day right with these 10 tips for a more productive and energized morning routine.",
    createdAt: "2024-08-12",
    user: {
      name: "Jane Smith",
      image: "https://via.placeholder.com/100x100.png?text=Jane+Smith",
    },
    rating: 4.8,
    readingTime: "5 min read",
  },
  {
    id: 3,
    title:
      "Mastering JavaScript: The Best Practices Every Developer Should Know",
    image: "https://via.placeholder.com/600x400.png?text=JavaScript+Mastery",
    description:
      "Discover the best practices for writing clean, efficient, and maintainable JavaScript code.",
    createdAt: "2024-08-10",
    user: {
      name: "Alice Johnson",
      image: "https://via.placeholder.com/100x100.png?text=Alice+Johnson",
    },
    rating: 4.7,
    readingTime: "8 min read",
  },
  {
    id: 4,
    title: "How to Build a Personal Brand as a Developer",
    image: "https://via.placeholder.com/600x400.png?text=Personal+Branding",
    description:
      "Learn how to build and grow your personal brand as a developer, and stand out in the tech industry.",
    createdAt: "2024-08-08",
    user: {
      name: "Michael Brown",
      image: "https://via.placeholder.com/100x100.png?text=Michael+Brown",
    },
    rating: 4.6,
    readingTime: "7 min read",
  },
  {
    id: 5,
    title: "The Rise of Remote Work: How It's Changing the Workplace",
    image: "https://via.placeholder.com/600x400.png?text=Remote+Work",
    description:
      "Remote work is here to stay. Explore how it's transforming industries and what it means for the future of work.",
    createdAt: "2024-08-05",
    user: {
      name: "Sarah Lee",
      image: "https://via.placeholder.com/100x100.png?text=Sarah+Lee",
    },
    rating: 4.9,
    readingTime: "10 min read",
  },
  {
    id: 6,
    title: "Designing for Accessibility: How to Make Your Website Inclusive",
    image: "https://via.placeholder.com/600x400.png?text=Accessibility+Design",
    description:
      "Learn the key principles of designing websites that are accessible to everyone, including those with disabilities.",
    createdAt: "2024-08-02",
    user: {
      name: "Emily Davis",
      image: "https://via.placeholder.com/100x100.png?text=Emily+Davis",
    },
    rating: 4.7,
    readingTime: "9 min read",
  },
];
