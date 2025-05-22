import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

interface NavbarProps {
  carrinhoCount: number; // removido clienteNome daqui
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

export default function Navbar({ carrinhoCount }: NavbarProps) { // removido clienteNome daqui
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <nav className="bg-white p-4 flex flex-wrap items-center text-red-600 border-b border-black">
      <Link
        to="/"
        className="px-3 py-1 rounded flex items-center mr-4"
        onClick={() => setMenuAberto(false)}
      >
        <img src="/RocketStore.png" alt="Rocket Store" className="h-[60px]" />
      </Link>

      <div className="flex flex-grow justify-between items-center max-w-7xl mx-auto w-full md:ml-4">
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-red-600 hover:text-white transition-colors focus:outline-none"
          aria-label="Abrir menu"
        >
          {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <div className="hidden md:flex flex-wrap gap-4 items-center justify-between w-full">
          <div className="flex flex-wrap gap-4">
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

          <div className="flex items-center space-x-4 whitespace-nowrap ml-6">
            <span className="px-3 py-1 rounded">Olá, bem vindo</span>

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
      </div>

      {menuAberto && (
        <div className="md:hidden w-full mt-2 bg-white p-4 rounded shadow-md flex flex-col gap-3">
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

          <div className="flex items-center justify-between border-t pt-4">
            <span className="px-3 py-1 rounded">Olá, seja bem vindo</span>

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
