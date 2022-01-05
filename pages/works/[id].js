import React from 'react'
import { useRouter } from 'next/router'
import { Container, Badge } from '@chakra-ui/react'

import { Title } from '../../components/work'
import Layout from '../../components/layouts/article'
import Viewer from '../../components/viewer'

import { useGetPortfolio } from '../../api/portfolio'

const WorkDetail = () => {
  const router = useRouter()
  const { data } = useGetPortfolio(router.query.id)

  return (
    <Layout title={data && data.title}>
      <Container>
        {data && (
          <>
            <Title>
              {data.title}
              <Badge>
                {data.jobTitle === 'toy' ? '토이 프로젝트' : '실무 프로젝트'}
              </Badge>
            </Title>
            <Viewer contents={data.content} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default WorkDetail
