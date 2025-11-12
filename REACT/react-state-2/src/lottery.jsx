import { useState } from "react";

function generateRandom3DigitNumber() {
  return Math.floor(Math.random() * 900) + 100;
}

function sumDigits(num) {
  if (!num) return 0;

  return num
    .toString()
    .split("")
    .reduce((acc, digit) => {
      return acc + parseInt(digit);
    }, 0);
}

export default function Lottery() {
  const [ticketNumber, setTicketNumber] = useState(null);
  console.log(ticketNumber);  

  const digitSum = sumDigits(ticketNumber);
  const isWinner = digitSum === 15;

  const handleBuyTicket = () => {
    const newTicket = generateRandom3DigitNumber();
    setTicketNumber(newTicket);

  };

  return (
    <div>
      <h2>Lottery Game</h2>
      <p>Win if the sum of your 3-digit ticket is 15!</p>

      <button onClick={handleBuyTicket}>Buy New Ticket</button>

      {ticketNumber === null ? (
        <h3>Click the button to get your first ticket!</h3>
      ) : (
        <div>
          <h3>Your Ticket Number is: {ticketNumber}</h3>
          <h4>The sum of the digits is: {digitSum}</h4>

          {isWinner ? (
            <h1 style={{ color: "green" }}>
              🎉 Congratulations! You are a Winner! 🎉
            </h1>
          ) : (
            <h2 style={{ color: "red" }}>Sorry, not a winner. Try again!</h2>
          )}
        </div>
      )}
    </div>
  );
}
