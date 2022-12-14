import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import { Box, Heading } from "@chakra-ui/layout";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: any;
  updated_at: any;
  published_at: any;
}

interface PostJsonResponse {
  data: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:1337/api/posts", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Post[] = response.data;

  return {
    props: {
      data,
    },
  };
};

const IndexView = ({ data }: PostJsonResponse) => {
  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>My Blog</Heading>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </>
  );
};

export default IndexView;