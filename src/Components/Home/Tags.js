import React from 'react';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    console.log(tags);
    return (
      <div className="">
        <p>
          In Background an api call is made .. This route currently demos backgroundSync
        </p>

        {
          // tags.map(tag => {
          //   // do some buisness logic if required
          //   let id = tag.id ? tag.id : tag;
          //   let title = tag.title ? tag.title : tag;
          //   return (
          //     <li key={id}>
          //       {title}
          //     </li>
          //   );
          // })
        }
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="loading">Loading</div>
        </div>
      </div>
    );
  }
};

export default Tags;
