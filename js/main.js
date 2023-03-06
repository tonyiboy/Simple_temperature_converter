
document.querySelector('#yell').addEventListener('click', run)

function run() {
    let pumpkin = document.querySelector('#firstName').value
    pumpkin = pumpkin * 9/5 + 32
    document.querySelector('#placeToYell').innerText = pumpkin
  }
