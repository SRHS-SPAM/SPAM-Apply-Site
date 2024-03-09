// pages/index.tsx
import React from "react";
import Layout from "./components/Layout";
import { SizeProvider } from "./tool/sizecheck";

const Home: React.FC = () => {
    return (
        <SizeProvider>
            <Layout />
        </SizeProvider>
    );
};

export default Home;
