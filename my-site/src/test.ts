export function showTest()
{
  // div mounting logic
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>this is a test</h1>

  <button id="fib_execute" >press for fibonacci</button>
  <input type="number" id="fib_param" min="0" max="50" value="10"></input>
  <p id="fib_answer" ></p>

  <button id="fizzbuzz_execute" >press for fizzbuzz</button>
  <input type="number" id="fizzbuzz_param" min="0" max="50" value="10"></input>
  <p id="fizzbuzz_answer" ></p>

  <button id="reverse_execute" >press to reverse</button>
  <input type="input" id="reverse_param" value="Hello World!"></input>
  <p id="reverse_answer" ></p>
  `;

    // trigger logic for fibonacci
    const fibButton = document.getElementById("fib_execute");
    const fibAnswer = document.getElementById("fib_answer");
    const fibParam = document.getElementById("fib_param") as HTMLInputElement;
    fibButton?.addEventListener("click", () => {
        const param = parseInt(fibParam.value) || 0;
        const answer = fib(param);
        if(fibAnswer) fibAnswer.textContent = JSON.stringify(answer);
    });

    // trigger logic for fizzbuzz
    const fbButton = document.getElementById("fizzbuzz_execute");
    const fbAnswer = document.getElementById("fizzbuzz_answer");
    const fbParam = document.getElementById("fizzbuzz_param") as HTMLInputElement;
    fbButton?.addEventListener("click", () => {
        const param = parseInt(fbParam.value) || 0;
        const answer = fizzBuzz(param);
        if(fbAnswer) fbAnswer.textContent = JSON.stringify(answer);
    });

    // trigger logic for reversing string
    const reverseButton = document.getElementById("reverse_execute");
    const reverseAnswer = document.getElementById("reverse_answer");
    const reverseParam = document.getElementById("reverse_param") as HTMLInputElement;
    reverseButton?.addEventListener("click", () => {
        const param = reverseParam.value;
        const answer = reverse(param);
        if(reverseAnswer) reverseAnswer.textContent = JSON.stringify(answer);
    });
}

// fibonacci function
function fib(number:number)
{
    if(number == 0 || number < 0) return [];
    if(number == 1) return [0];
    if(number == 2) return [0, 1];

    let answer: number[] = [0, 1];
    for(let i:number = 2; i < number; i++) answer.push(answer[i - 1] + answer[i - 2])

    console.log(answer);
    return answer;
}

// fizzbuzz function
function fizzBuzz(number:number)
{
    if(number < 1) return {};
    let answer: {[key:number]: string} = {};
    for(let i:number = 1; i <= number; i++)
    {
        if(i % 3 == 0 && i % 5 == 0) answer[i] = "FizzBuzz";
        else if(i % 3 == 0) answer[i] = "Fizz";
        else if(i % 5 == 0) answer[i] = "Buzz";
        else answer[i] = "";
    }

    console.log(answer);
    return answer;
}

// reversing a string function
function reverse(input:string)
{
    if(input.length == 0) return "";
    let answer:string = "";
    for(let i:number = input.length - 1; i >= 0; i--) answer += input[i];

    console.log(answer);
    return answer;
}