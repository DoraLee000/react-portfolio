import React from 'react';
import Countdown from 'react-countdown-now';


const Completionist = () => <span>旅程中</span>;


const renderer = ({ days,hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return(
    <div className="countdown">
      <div className="mun"><p>{days}</p><span>DAY(S)</span></div>
      <p className="colon">:</p>
      <div className="mun"><p>{hours}</p><span>HOUR(S)</span></div>
      <p className="colon">:</p>
      <div className="mun"><p>{minutes}</p><span>MINUTE(S)</span></div>
      <p className="colon">:</p>
      <div className="mun"><p>{seconds}</p><span>SECOND(S)</span></div>
    </div>
    ) 
  }
};

const About =()=>(
  <section className="content">
  <h3>距離下次旅程</h3>
    <Countdown date={'Thu, 13 Sep 2018 00:00:00' + 10000} renderer={renderer}/>
    <div className="about">
    <h3>每一段旅程</h3>
    <p>哈囉大家好，我是Dora我是個熱愛旅遊的重度自助旅遊家</p>
    <p>每段旅程的感受總是各種的特別，而出發的理由總是很渺，</p>
    <p>可能為了欣賞滿天星空露宿沙漠</p>
    <p>或許是小時候嚮往童話故事中的耶誕節特地飛往俄羅斯</p>
    <p>又或者只是看了神鬼傳奇想說那就去埃及看看法老王吧</p>
  </div>
  </section>
)

export default About;