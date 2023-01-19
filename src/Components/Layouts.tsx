import Cards from "./Cards";
import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import type { PaginationProps } from "antd";
import { Pagination, Layout, Col, Row } from "antd";
import { useState } from "react";
const { Header, Footer, Content } = Layout;

export interface propselement {
  characters: {};
  results: {};
  name: string;
  img: string;
  gender: string;
  status: string;
}

const Layouts: React.FC = () => {
  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const GET_LOCATIONS = gql`
    query {
      characters(page: 1) {
        info {
          count
          pages
          next
          prev
        }

        results {
          id
          type
          name
          gender
          image
          status
          species
          created
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log(data?.characters.results);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error : {error.message}</p>;
  //console.log({ data, GET_LOCATIONS });

  //   var data_new: any = [];

  //   FinalData.characters.results.forEach((val: any) =>
  //     data_new.push({
  //       name: val.name,
  //       image: val.image,
  //       gender: val.gender,
  //       status: val.status,
  //     })
  //   );
  //   console.log(data_new);

  return (
    <Layout>
      <Header
        style={{
          marginBottom: "5%",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          GraphQl Practice
        </h1>
      </Header>
      <Content>
        <Row gutter={{ xs: 0, sm: 3, md: 10, lg: 50, xl: 90 }}>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Content>
      <Footer>
        <Pagination
          showSizeChanger={false}
          className="center"
          onChange={onChange}
          defaultCurrent={current}
          total={20}
        />
      </Footer>
    </Layout>
  );
};

export default Layouts;
