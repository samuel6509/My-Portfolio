export function showTest()
{
  // div mounting logic
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>this is a test</h1>
  <button id="fib_execute" >press for fibonacci</button>
  <input type="number" id="fib_param" min="0" max="50" value="10"></input>
  <p id="fib_answer" ></p>
  `;

    const fibButton = document.getElementById("fib_execute");
    const fibAnswer = document.getElementById("fib_answer");
    const fibParam = document.getElementById("fib_param") as HTMLInputElement;
    fibButton?.addEventListener("click", () => {
        const param = parseInt(fibParam.value) || 0;
        const answer = fib(param);
        if(fibAnswer) fibAnswer.textContent = answer.join(", ");
    });
}

// fibonacci function
function fib(number:number)
{
    if(number == 0 || number < 0) return [];
    else if(number == 1) return [0];
    else if(number == 2) return [0, 1];

    let answer: number[] = [0, 1];
    for(let i:number = 2; i < number; i++) answer.push(answer[i - 1] + answer[i - 2])

    console.log(answer);
    return answer;
}