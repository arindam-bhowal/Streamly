import ListItem from '../listItem/ListItem';
import './list.scss';

const List = () => {
  return <div className='list'>

    <div className="container">
      <div className="heading">
        <h2>All Movies</h2>
      </div>
      
      <div className="wrapper">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>


    <div className="container">
      <div className="heading">
        <h2>All TV shows</h2>
      </div>
      
      <div className="wrapper">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>

  </div>;
};

export default List;
