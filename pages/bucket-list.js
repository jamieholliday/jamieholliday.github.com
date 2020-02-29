/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';

const S_h1 = styled.h1`
  margin-bottom: 20px;
`;

const S_div_list = styled.div`
  margin-top: 40px;
`;

const S_ol = styled.ul`
  padding-left: 35px;
  li {
    margin-bottom: 5px;
    list-style: decimal;
  }
`;

const todo = [
  'Stand under a waterfall',
  'Catch a wave surfing',
  'Mush a dog sled',
  'Do a Backflip',
  'Go Fatbiking',
  'Go in a submarine',
  'Drive a tank',
  'Drive a rally car',
  'Drive a supercar',
  'Fly in a helicopter',
  'Walk a rope bridge',
  'Zorbing',
  'Feed/Wash an elephant',
  'Climb a volcano',
  'Relax in a natural hot spring',
  'Sleep in an igloo',
  'Visit the ice hotel',
  'Start a fire by rubbing sticks together',
  'See the northern lights',
  'Live by the sea',
  'Meet someone famous - (not sure who yet)',
  'Have a book published',
  'Create a family tree',
  'Make pottery on a wheel',
  'Be in a TV show audience',
  'Be an extra in a film',
  'Fly first/business class',
  'See a ted talk live',
  'Watch the Hakka live',
  'See a live Wimbledon match',
  'Set a guinness world record',
  'Watch a rocket launch',
  'Take a mud bath',
  'Catch, cook and eat a fish',
  'Create an ice sculpture',
  'Create a signature dish',
  'Eat an insect',
  'Eat at a michelin 3-star restaurant',
  'Eat fondue',
  'Learn a song on the piano',
  'Make cheese',
  'Make my own wine',
  'Stomp grapes',
  'Have cooking lesson from a famous chef',
  'Eat a deep fried mars bar',
  'Do random act of kindness',
  'Give blood',
  'Help someone complete something on their bucket list',
  'Learn to speak another language',
  '2 min Handstand',
  'One arm chin up',
  'Shoot a machine gun',
  'Ride a snowmobile',
  'Drive speed boat',
  'Ride a Segway',
  'Drive a dune buggy',
  'Spend Xmas in the snow',
  'Spend Xmas in the sun',
  'Road trip around Europe',
  'Sleep in a treehouse',
  'Stay at an underwater hotel',
  'Visit New Zealand',
  'Stay in a Water bungalow',
  'Trip to Vegas',
  'See the Grand canyon',
  'Visit the Hover damn',
  'Go to San Francisco',
  'Run the Rocky Steps in Philadelphia',
  'Relax in the Blue lagoon in Iceland',
  'Zero gravity plane ride',
  'Volunteer',
  'Go to watch gymnastics',
  'Wedding reunion in Cyprus',
  'Learn to dive into water',
  'Donate a bench with your name on it',
  'Watch a demolition',
];

const done = [
  'Arrive be seaplane',
  'Travel on a Zip line',
  'Paddle board on a warm ocean',
  'Learn to scuba dive',
  'Drive a digger',
  'Swim with turtles',
  'Learn to carve wood',
  'Go in a sensory deprivation tank',
  'Eat a 10 course meal',
  'Go deep sea fishing',
  'Have a go on a Jetski',
  'Holiday in Bali',
  'Take the Guinness Brewery tour in Dublin',
  'Climb Snowdon',
  'Take a photo every day for a year - tried, failed, never again',
  'Watch strongman competition',
];

const Items = ({ list = [], title }) => {
  if (list.length) {
    return (
      <S_div_list>
        <h2>
          {title}: ({list.length})
        </h2>
        <S_ol>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </S_ol>
      </S_div_list>
    );
  }
  return null;
};

const BucketList = () => {
  return (
    <Wrapper>
      <Head>
        <title>Bucket list</title>
      </Head>
      <S_h1>Bucket list</S_h1>
      <p>
        On my 40th birthday a wrote this list of things I was going to try and
        do before I was 50. Some of those things are easy and some of them I
        feel may be a bit ambitious but I'll give it a try and see what happens.
      </p>
      <section>
        <Items list={todo} title="Still to do" />
        <Items list={done} title="Done" />
      </section>
    </Wrapper>
  );
};

export default BucketList;
