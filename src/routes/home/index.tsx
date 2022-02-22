import { FunctionalComponent, h } from 'preact';
import style from './style.css';

const Home: FunctionalComponent = () => {
  return (
    <div className={style.home}>
      <h2>Title</h2>
      <p>Paragraph text.</p>
      <p>Available for purchase via <a href={'https://www.trademe.co.nz/a/search?member_listing=1402299&search_string=bambina'}>TradeMe</a></p>
    </div>
  );
};

export default Home;
