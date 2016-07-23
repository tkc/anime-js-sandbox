'use strict';

import anime from 'animejs'

const translatex = anime({
  targets: [ '.translatex' ],
  translateX: '5rem',
  borderRadius: 0,
  duration: 850,
  loop: true
});

const multipletiming = anime({
  targets: '.multipletiming',
  translateX: '5rem',
  scale: [ .1, .9 ],
  delay: function (el, index) {
    return index * 10;
  },
  direction: 'alternate',
  loop: true
});

const random = anime({
  targets: '.random',
  translateX: function(el, index) {
    return anime.random(10, 100);
  },
  loop: true
});

const elasticity = anime({
  targets: [ '.elasticity' ],
  translateX: '5rem',
  borderRadius: 0,
  duration: 850,
  elasticity: 1000,
  loop: true
});

const translatey = anime({
  targets: [ '.translatey' ],
  translateY: '2rem',
  borderRadius: 0,
  duration: 850,
  loop: true
});

const translatexy = anime({
  targets: [ '.translatexy' ],
  translateX: '2rem',
  translateY: '2rem',
  borderRadius: 0,
  duration: 850,
  loop: true
});

const rotate = anime({
  targets: [ '.rotate' ],
  translateX: '2rem',
  rotate: 360,
  borderRadius: 0,
  duration: 850,
  loop: true
});

const sample2 = anime({
  targets: [ '.sample2' ],
  translateX: '5rem',
  rotate: 360,
  borderRadius: 0,
  duration: 850,
  loop: true
});

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const restartButton = document.querySelector('.restart');

playButton.addEventListener('click', () => {
  sample2.play();
});

pauseButton.addEventListener('click', () => {
  sample2.pause();
});

restartButton.addEventListener('click', () => {
  sample2.restart();
});

const sample3 = anime({
  targets: [ '.sample3' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInBounce'
  },
  direction: 'alternate',
  loop: true
});

const sample4 = anime({
  targets: [ '.sample4' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInCirc'
  },
  direction: 'alternate',
  loop: true
});

const sample5 = anime({
  targets: [ '.sample5' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInCubic'
  },
  direction: 'alternate',
  loop: true
});

const sample6 = anime({
  targets: [ '.sample6' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInElastic'
  },
  direction: 'alternate',
  loop: true
});

const sample7 = anime({
  targets: [ '.sample7' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInExpo'
  },
  direction: 'alternate',
  loop: true
});

const sample8 = anime({
  targets: [ '.sample8' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeInOutBack'
  },
  direction: 'alternate',
  loop: true
});

const sample9 = anime({
  targets: [ '.sample9' ],
  scale: {
    value: 2,
    delay: 150,
    duration: 850,
    easing: 'easeOutElastic'
  },
  direction: 'alternate',
  loop: true
});
