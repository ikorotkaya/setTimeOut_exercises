// Exercise 1

const $submit = document.querySelector(".submit");
const $reset = document.querySelector(".reset");
const $output = document.querySelector(".output");

$submit.addEventListener("click", () => {

  setTimeout(() => {
    $output.innerHTML = "1";
    setTimeout(() => {
      $output.innerHTML += " 2";
      setTimeout(() => {
        $output.innerHTML += " 3";
        setTimeout(() => {
          $output.innerHTML += " 4";
          setTimeout(() => {
            $output.innerHTML += " PROFIT"
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }, 1000);
})

$reset.addEventListener('click', () => {
  $output.innerHTML = "";
})


//Exercise  2 (Promise + then)

const $submit = document.querySelector(".submit");
const $reset = document.querySelector(".reset");
const $output = document.querySelector(".output");
const $time = document.querySelector(".time");

$submit.addEventListener("click", () => {
  let timeStamp = new Date();
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve($output.innerHTML = "1");
      $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
    }, 1000);
  });

  promise.then(() => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve($output.innerHTML += " 2");
        $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
      }, 2000);
    });
  }).then(() => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve($output.innerHTML += " 3");
        $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
      }, 3000);
    });
  }).then(() => {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve($output.innerHTML += " 4");
        $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
      }, 4000);
    })
  })

})

$reset.addEventListener('click', () => {
  $output.innerHTML = "";
  $time.innerHTML = "";
})


// Exercise 3 (Promise + then)

const $submit = document.querySelector(".submit");
const $reset = document.querySelector(".reset");
const $output = document.querySelector(".output");
const $time = document.querySelector(".time");

$submit.addEventListener("click", () => {
  let timeStamp = new Date();
  
  const wait = (number) => {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve($output.innerHTML += number);
        $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
      }, number * 1000);
    });
  }
  
  wait(1)
    .then(() => wait(2))
    .then(() => wait(3))
    .then(() => wait(4))
    .then(() => $output.innerHTML += "PROFIT")
})


$reset.addEventListener('click', () => {
  $output.innerHTML = "";
  $time.innerHTML = "";
})

// Exercise 4 (async/await)

const $submit = document.querySelector(".submit");
const $reset = document.querySelector(".reset");
const $output = document.querySelector(".output");
const $time = document.querySelector(".time");

$submit.addEventListener("click", () => {
  let timeStamp = new Date();

  const wait = (num) => {
    return new Promise(function(resolve) {
      setTimeout(() => {
        resolve($output.innerHTML += num);
        $time.innerHTML += Math.round((new Date() - timeStamp) / 1000);
      }, num * 1000);
    });
  }

  (async () => {
    await wait(1);
    await wait(2);
    await wait(3);
    await wait(4);
    $output.innerHTML += "PROFIT";
  })()

})

$reset.addEventListener('click', () => {
  $output.innerHTML = "";
  $time.innerHTML = "";
})
