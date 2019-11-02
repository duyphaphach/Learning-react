import React from 'react';
import ModulePostForm from "../../modules/ModulePostForm";
import ModulePosts from "../../modules/ModulePosts";

const Home = () => {
    return (
      <div>
        <div className='home container'>
          <h1 className="title">Home page</h1>
          <div className="subtitle">We are happy to have you as our customer</div>
        </div>
        <ModulePosts />
        <ModulePostForm />
      </div>
    );
};

export default Home;
