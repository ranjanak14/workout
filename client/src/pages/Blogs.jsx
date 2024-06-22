import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Heading = styled.div`
  padding: 0px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const BlogWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const BlogCard = styled.div`
  background-color: ${({ theme }) => theme.card_background};
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const BlogTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 0;
`;

const BlogAuthor = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const BlogDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const BlogDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
`;

const ReadMore = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.link_color};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const blogs = [
  {
    title: "Benefits of Regular Exercise",
    author: "John Doe",
    date: "June 20, 2024",
    description: "Regular exercise can have profound benefits on your mental and physical health. Learn how to incorporate it into your daily routine.",
    link: "#",
    image: "https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Healthy Eating Habits",
    author: "Jane Smith",
    date: "June 18, 2024",
    description: "Discover the importance of healthy eating habits and how they can improve your overall well-being.",
    link: "#",
    image: "https://images.pexels.com/photos/1196516/pexels-photo-1196516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Yoga for Beginners",
    author: "Emily Johnson",
    date: "June 15, 2024",
    description: "Yoga is a great way to improve your flexibility and reduce stress. Here are some beginner-friendly poses to get you started.",
    link: "#",
    image: "https://images.pexels.com/photos/3820345/pexels-photo-3820345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Fitness Blog</Title>
        <Heading>Read about various fitness tips, healthy habits, and workout routines to help you stay in shape and live a healthy lifestyle.</Heading>
        <BlogWrapper>
          {blogs.map((blog, index) => (
            <BlogCard key={index}>
              <BlogImage src={blog.image} alt={blog.title} />
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogAuthor>By {blog.author}</BlogAuthor>
              <BlogDate>{blog.date}</BlogDate>
              <BlogDescription>{blog.description}</BlogDescription>
              <ReadMore href={blog.link}>Read More</ReadMore>
            </BlogCard>
          ))}
        </BlogWrapper>
      </Wrapper>
    </Container>
  );
};

export default Blog;