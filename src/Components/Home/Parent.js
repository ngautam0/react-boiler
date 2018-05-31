import React from 'react';
import Tags from './Tags';
import Banner from './Banner';
import MainView from './MainView';

const HomeComponent = props => {
  return (
    <div className="row">
      <Banner appName={props.appName} />
        <div className="col-sm-12">
          <MainView />
          <div className="col-sm-12">
            <Tags
              tags={props.tags}
            />
          </div>
        </div>
    </div>
  );
}


export default HomeComponent;
