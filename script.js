let qouteText = document.querySelector('.quote-text')
let authorName = document.querySelector('.author')
let genBtn = document.getElementById('newQuoteBtn')



let qoutesOrAuthors = [
     {
    quote: "Stay hungry, stay foolish",
    author: "Steve Jobs"
  },
    {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },

  {
  quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney"
},


{
quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
author: "Nelson Mandela"
},

{
quote: "I'm not a great programmer; I'm just a good programmer with great habits.",
author: "Kent Beck"
},


{
quote: "First, solve the problem. Then, write the code.",
author: "John Johnson"
},

{
quote: "Knowledge is power.",
author: "Francis Bacon"
}

]





genBtn.addEventListener('click',function(){
    let index = Math.floor(Math.random() * qoutesOrAuthors.length)


    qouteText.innerText = `${qoutesOrAuthors[index].quote}`
    authorName.innerText = `${qoutesOrAuthors[index].author}`
})