import "./subTotal.css";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <stronge>{value}</stronge>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order Contains a Gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
