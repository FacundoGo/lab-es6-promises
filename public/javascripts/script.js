// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
const promise1 = addFood(steak[0], '#steak', () => {
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                // here add the image to the top
                let table = document.querySelector('#table')
                let newDiv = document.createElement('div')
                let newImg = table.appendChild(newDiv)
                newImg.innerHTML = '<img src="/public/images/steak.jpg">'
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
const promise2 = addFood(mashPotatoes[0], '#mashPotatoes').then(() => {

  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {

      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {

        addFood(mashPotatoes[4], '#mashPotatoes')
        let table = document.querySelector('#table')
                let newDiv = document.createElement('div')
                let newImg = table.appendChild(newDiv)
                newImg.innerHTML = '<img src="/public/images/mashPotatoes.jpg">'
      })
    })
  })
});

// Iteration 3 using async and await

async function makeFood(step) {
    
    for (let el of step){
      addFood(el, '#brusselSprouts')
    }
      // await addFood(mashPotatoes[4])
      Promise.all([promise1, promise2]).then(() =>{
        let table = document.querySelector('#table')
        let newDiv = document.createElement('div')
        let newImg = table.appendChild(newDiv)
        newImg.innerHTML = '<img src="/public/images/brusselSprouts.jpg">'
      }) 
    } 
  

  const promise3 = makeFood(brusselSprouts)


  Promise.all([promise1, promise2, promise3]).then((values) => {
      console.log('test')
  });

  // async function makeFood(step) {
  //   try {
  //     addFood(brusselSprouts[0], '#brusselSprouts'); 
  //     await addFood(brusselSprouts[1], '#brusselSprouts'); 
  //     await addFood(brusselSprouts[2], '#brusselSprouts');
  //     await addFood(brusselSprouts[3], '#brusselSprouts');
  //     await addFood(brusselSprouts[4], '#brusselSprouts');  
  //     await addFood(brusselSprouts[5], '#brusselSprouts'); 
  //     await addFood(brusselSprouts[6], '#brusselSprouts'); 
  //     await addFood(brusselSprouts[7], '#brusselSprouts'); 
  //     await addFood(brusselSprouts[8], '#brusselSprouts'); 
  //     // await addFood(mashPotatoes[4])
  //     setTimeout(()=>{
  //     let table = document.querySelector('#table')
  //     let newDiv = document.createElement('div')
  //     let newImg = table.appendChild(newDiv)
  //     newImg.innerHTML = '<img src="/public/images/brusselSprouts.jpg">'

  //     }, 3000)
      
  //   } catch(error){
  //   }
  // }
