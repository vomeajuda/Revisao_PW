import { useState } from "react";
import './count.css';

function count() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>Valor: {counter}</h2>
      <button onClick={() => setCounter(counter - 1)}>&lt;- Decrementar</button>
      <button onClick={() => setCounter(0)}>0</button>
      <button onClick={() => setCounter(counter + 1)}>Incrementar -&gt;</button>
		</div>
	);
}

export default count;