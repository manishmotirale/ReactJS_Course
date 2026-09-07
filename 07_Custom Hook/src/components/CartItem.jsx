import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItem({ item, onUpdateQty, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
        <div className="qty-ctrl">
          <button onClick={() => onUpdateQty(item.id, item.quantity - 1)}>
            {" "}
            <FaMinus />
          </button>

          <span>{item.quantity}</span>

          <button onClick={() => onUpdateQty(item.id, item.quantity + 1)}>
            {" "}
            <FaPlus />
          </button>
        </div>
      </div>

      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItem;
