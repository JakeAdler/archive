import Flex from '../src/components/global/Flex';
import Link from 'next/link'
import styled from 'styled-components';
import Layout from "../src/components/global/Layout/MainLayout";
import Button from '../src/components/global/Button';

const HomeContainer = styled(Flex)`
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
`

export default function indexPage(){

  return(
  <Layout>
    <HomeContainer justify='center' direction='column'>
      <h1>Welcome to The Scoop</h1>
      <h1>The place for all of your tech news.</h1>
      <Link href='/news'>
        <Button>View The News</Button>
      </Link>
    </HomeContainer>
  </Layout>
)
};
