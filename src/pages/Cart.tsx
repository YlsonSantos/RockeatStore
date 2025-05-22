import { useState } from "react";
import type { Produto } from "../types";
import Navbar from "../components/Navbar";

interface CartProps {
  carrinho: (Produto & { quantidade: number })[];
  remover: (id: number) => void;
  nomeCliente: string;
}

export default function Cart({ carrinho, remover, nomeCliente }: CartProps) {
  const total = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState<"boleto" | "cartao" | "pix" | null>(null);
  const [parcelas, setParcelas] = useState(1);

  const confirmarPagamento = () => {
    alert(`Compra realizada com sucesso!\nPagamento: ${pagamentoSelecionado === "cartao" ? `Cartão em ${parcelas}x` : pagamentoSelecionado}`);
  };

  return (
    <>
      <Navbar
        nomeCliente={nomeCliente}
        quantidadeCarrinho={carrinho.reduce((acc, i) => acc + i.quantidade, 0)}
      />
      <main className="max-w-5xl mx-auto px-6 py-10 bg-gray-50 min-h-screen rounded-lg mt-8">
        <h1 className="text-4xl font-extrabold text-red-600 mb-8 border-b border-red-200 pb-4 drop-shadow-sm">
          Seu Carrinho
        </h1>

        {carrinho.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            O carrinho está vazio.{" "}
            <a href="/" className="text-red-600 underline font-semibold hover:text-red-700 transition-colors">
              Voltar para produtos
            </a>
          </p>
        ) : (
          <>
            <ul className="space-y-6">
              {carrinho.map((produto) => (
                <li
                  key={produto.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col space-y-1 max-w-[65%]">
                    <p className="font-semibold text-lg text-red-700">{produto.nome}</p>
                    <p className="text-gray-600 text-sm line-clamp-2">{produto.descricao}</p>
                    <p className="text-gray-700 font-medium mt-2">
                      Quantidade: <span className="font-semibold">{produto.quantidade}</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <span className="font-bold text-2xl text-red-600">
                      R$ {(produto.preco * produto.quantidade).toFixed(2).replace(".", ",")}
                    </span>
                    <button
                      onClick={() => remover(produto.id)}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex justify-end border-t border-red-200 pt-6">
              <p className="text-3xl font-extrabold text-red-700 drop-shadow-md">
                Total: R$ {total.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <section className="mt-10 bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Escolha a forma de pagamento</h2>

              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => setPagamentoSelecionado("boleto")}
                  className={`py-2 rounded-md font-semibold transition-colors ${
                    pagamentoSelecionado === "boleto"
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  Boleto
                </button>

                <button
                  onClick={() => setPagamentoSelecionado("cartao")}
                  className={`py-2 rounded-md font-semibold transition-colors ${
                    pagamentoSelecionado === "cartao"
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  Cartão de Crédito
                </button>

                <button
                  onClick={() => setPagamentoSelecionado("pix")}
                  className={`py-2 rounded-md font-semibold transition-colors ${
                    pagamentoSelecionado === "pix"
                      ? "bg-red-600 text-white"
                      : "bg-red-100 text-red-700 hover:bg-red-200"
                  }`}
                >
                  PIX
                </button>
              </div>

              {pagamentoSelecionado === "cartao" && (
                <div className="mt-6">
                  <label htmlFor="parcelas" className="block mb-2 font-semibold text-red-700">
                    Quantas vezes deseja parcelar?
                  </label>
                  <select
                    id="parcelas"
                    className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    value={parcelas}
                    onChange={(e) => setParcelas(Number(e.target.value))}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}x
                      </option>
                    ))}
                  </select>

                  <p className="mt-2 text-sm text-gray-700 font-medium">
                    Valor por parcela:{" "}
                    <span className="text-red-600 font-bold">
                      R$ {(total / parcelas).toFixed(2).replace(".", ",")}
                    </span>
                  </p>
                </div>
              )}

              <button
                onClick={confirmarPagamento}
                disabled={!pagamentoSelecionado}
                className={`mt-6 w-full py-3 rounded-lg font-bold text-white transition-colors ${
                  pagamentoSelecionado ? "bg-red-600 hover:bg-red-700" : "bg-red-300 cursor-not-allowed"
                }`}
              >
                Confirmar pagamento
              </button>
            </section>
          </>
        )}
      </main>
    </>
  );
}
