import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../Context/auth";
const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Homepage-BBC"}>
      <h1 className="bg-dark">Homepage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Homepage;
