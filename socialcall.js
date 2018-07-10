console.info('Hear the cries of the people.')

let platform = window.location.host
let url = window.location.href

let cries = [
  "Please give me validation, I am filled with self doubt.",
  "Tell me I'm doing OK, please tell me I'm good... enough?",
  "I need likes and comments to feel good about myself.",
  "Social media gives me the illusion than I am someone, that I am unique.",
  "Everyday, slave to the audience to get a never-enough fix of external love.",
  "If I am not loved, I don't exist.",
  "I have to pretend to be something desirable to earn basic human decency.",
  "I want to feel loved, but on social media the closest thing is envy.",
  "Existence is meaningless, so I take a selfie to try to forget it.",
  "We are all rotting corpses, but maybe if I seem to be the best of them, it will lift the burden of my shoulder.",
  "It's not about being happy, it's about pretending to be happy on social media.",
  "Rehab for likes on social media cannot exist, or people would take selfie while taking the program.",
  "What will be left of me after I die?",
  "I post selfies online therefore I am."
]

function twitterCries() {
  let tweets = document.querySelectorAll('.js-tweet-text-container .js-tweet-text');

  [].forEach.call(tweets, (tweet) => {
    tweet.innerText = cries[Math.floor(Math.random() * Math.floor(cries.length))]
  })

}

function facebookCries() {
  let posts = document.querySelectorAll('.userContentWrapper .userContent');

  [].forEach.call(posts, (post) => {
    post.innerText = cries[Math.floor(Math.random() * Math.floor(cries.length))]
  })

  let comments = document.querySelectorAll('.UFICommentBody');

  [].forEach.call(comments, (comment) => {
    comment.innerText = cries[Math.floor(Math.random() * Math.floor(cries.length))]
  })

}

function instaCries() {
  let posts = document.querySelectorAll('.Xl2Pu .gElp9 span');

  [].forEach.call(posts, (post) => {
    post.innerText = cries[Math.floor(Math.random() * Math.floor(cries.length))]
  })

}

function letTheTearsRun() {
  switch (platform) {

    case 'twitter.com':
      twitterCries()
      break;
  
    case 'www.facebook.com':
      facebookCries()
      break;
  
    case 'www.instagram.com':
      instaCries()
      break;
  
  }
}

(() => {
  letTheTearsRun()
  let checkURL = window.setInterval(() => {
    if(url !== window.location.href ) {
      url = window.location.href
      letTheTearsRun()
    }
  }, 100)
})()