import { useCart } from "../../context/CartContext";

function CartSidebar() {
  const { cart, open, setOpen, removeFromCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="font-semibold">Your Cart</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-6 space-y-4">
          {cart.length === 0 && (
            <p className="text-gray-500">Cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center"
            >
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CartSidebar;
