import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import type { Produto } from "../types";

interface CartProps {
  carrinho: Produto[];
  setCarrinho: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export default function Cart({ carrinho, setCarrinho }: CartProps) {
  const navigate = useNavigate();

  function removerProduto(id: number) {
    setCarrinho(carrinho.filter((p) => p.id !== id));
  }

  const total = carrinho.reduce((acc, p) => acc + p.preco, 0);

  function finalizarCompra() {
    alert("Compra finalizada com sucesso! Obrigado.");
    setCarrinho([]);
    navigate("/");
  }

  return (
    <>
      <Navbar clienteNome="Ylson Santos" carrinhoCount={carrinho.length} />
      <main className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-red-600">Carrinho de Compras</h1>

        {carrinho.length === 0 ? (
          <p className="text-gray-600">
            Seu carrinho está vazio. <Link to="/" className="text-red-600 underline">Voltar à loja</Link>
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {carrinho.map((produto) => (
                <li
                  key={`${produto.id}-${Math.random()}`}
                  className="flex items-center border rounded p-4 shadow"
                >
                  <img src={produto.imagem} alt={produto.nome} className="h-20 w-20 object-contain" />
                  <div className="ml-4 flex-grow">
                    <h2 className="font-semibold">{produto.nome}</h2>
                    <p className="text-gray-600">R$ {produto.preco.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removerProduto(produto.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-between items-center">
              <span className="text-xl font-bold text-red-700">Total: R$ {total.toFixed(2)}</span>
              <button
                onClick={finalizarCompra}
                className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
