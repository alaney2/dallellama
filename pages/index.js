import { Flex,  } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Timeline from "./timeline";

const Home = () => {
  return (
    <Flex w="100%" h="100vh" justify="center">
      <Flex 
        direction="column" 
        width={{
          base: '100%',
          sm: '100%', // 0-30em
          md: '100%', // 30em-48em
          lg: '1024px', // 48em-62em
          xl: '1280px', // 62em+
        }} 
        mx="auto">
        <Nav />
        <Flex width={{base: '100%'}} >
          <Timeline />
        </Flex>
      </Flex>
    </Flex>
  );
  
  };
  
  export default Home;
  