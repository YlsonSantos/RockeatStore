import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  carrinhoCount: number;
}

const categorias = [
  "Eletrônicos",
  "Cuidados Pessoais",
  "Casa",
  "Papelaria",
  "Eletrodomesticos",
  "Brinquedos",
  "Esportes",
  "Automotivo",
];

export default function Navbar({ carrinhoCount }: NavbarProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <nav className="bg-white py-6 px-4 flex items-center text-red-600 border-b border-black relative">
      <Link
        to="/"
        className="flex-shrink-0 px-3 py-1 rounded flex items-center mr-4"
        onClick={() => setMenuAberto(false)}
      >
        <img src="/RocketStore.png" alt="Rocket Store" className="h-[60px]" />
      </Link>

      <div className="flex flex-grow items-center max-w-7xl mx-auto w-full min-w-0">
        <div className="flex md:hidden flex-grow justify-end">
          <button
            onClick={toggleMenu}
            className="p-2 rounded hover:bg-red-600 hover:text-white transition-colors focus:outline-none flex-shrink-0"
            aria-label="Abrir menu"
          >
            {menuAberto ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-wrap gap-4 items-center justify-between w-full overflow-x-auto whitespace-nowrap min-w-0">
          <div className="flex flex-wrap gap-4 min-w-0">
            {categorias.map((categoria) => (
              <Link
                key={categoria}
                to={`/?categoria=${encodeURIComponent(categoria)}`}
                className="text-lg px-3 py-1 rounded hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap cursor-default"
                onClick={() => setMenuAberto(false)}
              >
                {categoria}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto whitespace-nowrap relative overflow-hidden">
            <span className="px-2 py-1 rounded text-sm">Olá, bem vindo</span>

            <Link
              to="/cart"
              className="relative p-2 rounded hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Carrinho de compras"
              onClick={() => setMenuAberto(false)}
            >
              <ShoppingCart className="w-6 h-6" />
              {carrinhoCount > 0 && (
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black rounded-full px-1.5 text-[10px] font-bold leading-tight">
                  {carrinhoCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden absolute left-0 top-full w-full bg-white p-4 rounded-b shadow-lg flex flex-col gap-3 z-50">
          {categorias.map((categoria) => (
            <Link
              key={categoria}
              to={`/?categoria=${encodeURIComponent(categoria)}`}
              className="text-sm px-3 py-2 rounded hover:bg-red-600 hover:text-white transition-colors cursor-default"
              onClick={() => setMenuAberto(false)}
            >
              {categoria}
            </Link>
          ))}

          <div className="flex items-center justify-start gap-3 border-t pt-4 max-w-xs mx-auto">
            <span className="px-2 py-1 rounded">Olá, bem vindo</span>

            <Link
              to="/cart"
              className="relative p-2 rounded hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Carrinho de compras"
              onClick={() => setMenuAberto(false)}
            >
              <ShoppingCart className="w-6 h-6" />
              {carrinhoCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full px-2 text-xs font-bold">
                  {carrinhoCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
