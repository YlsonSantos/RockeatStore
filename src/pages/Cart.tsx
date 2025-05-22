import { useState } from "react";
import type { Produto } from "../types";
import Navbar from "../components/Navbar";

interface CartProps {
  carrinho: (Produto & { quantidade: number })[];
  remover: (id: number) => void;
  carrinhoCount: number;
}

export default function Cart({ carrinho, remover, carrinhoCount }: CartProps) {
  const total = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
  const [pagamentoSelecionado, setPagamentoSelecionado] = useState<
    "boleto" | "cartao" | "pix" | null
  >(null);
  const [parcelas, setParcelas] = useState(1);

  const confirmarPagamento = () => {
    alert(
      `Compra realizada com sucesso!\nPagamento: ${
        pagamentoSelecionado === "cartao"
          ? `Cartão em ${parcelas}x de R$ ${(total / parcelas)
              .toFixed(2)
              .replace(".", ",")}`
          : pagamentoSelecionado
      }`
    );
  };

  return (
    <>
      <Navbar carrinhoCount={carrinhoCount} />

      <main className="max-w-5xl mx-auto px-6 py-10 bg-gray-50 min-h-screen rounded-lg mt-8">
        <h1 className="text-4xl font-extrabold text-red-600 mb-8 border-b border-red-200 pb-4 drop-shadow-sm">
          Seu Carrinho
        </h1>

        {carrinho.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            O carrinho está vazio.{" "}
            <a
              href="/"
              className="text-red-600 underline font-semibold hover:text-red-700 transition-colors"
            >
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
                    <p className="font-semibold text-lg text-red-700">
                      {produto.nome}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {produto.descricao}
                    </p>
                    <p className="text-gray-700 font-medium mt-2">
                      Quantidade:{" "}
                      <span className="font-semibold">
                        {produto.quantidade}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-6 mt-4 md:mt-0">
                    <span className="font-bold text-2xl text-red-600">
                      R${" "}
                      {(produto.preco * produto.quantidade)
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                    <button
                      onClick={() => remover(produto.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition active:scale-95 active:opacity-80"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-red-300 pt-6 text-right">
              <p className="text-xl font-bold text-red-700">
                Total: R$ {total.toFixed(2).replace(".", ",")}
              </p>
            </div>

            <section className="mt-10 space-y-6">
              <h2 className="text-2xl font-semibold text-red-600">
                Formas de Pagamento
              </h2>

              <div className="flex flex-wrap gap-6">
                {(["boleto", "cartao", "pix"] as const).map((metodo) => {
                  const label =
                    metodo === "boleto"
                      ? "Boleto"
                      : metodo === "cartao"
                      ? "Cartão de Crédito"
                      : "Pix";

                  return (
                    <label
                      key={metodo}
                      className={`cursor-pointer px-5 py-3 rounded-lg border transition
                        ${
                          pagamentoSelecionado === metodo
                            ? "bg-red-600 border-red-600 text-white shadow-lg"
                            : "bg-white border-gray-300 text-gray-700 hover:bg-red-50 hover:border-red-400"
                        }`}
                    >
                      <input
                        type="radio"
                        name="pagamento"
                        value={metodo}
                        checked={pagamentoSelecionado === metodo}
                        onChange={() => setPagamentoSelecionado(metodo)}
                        className="hidden"
                      />
                      {label}
                    </label>
                  );
                })}
              </div>

              {pagamentoSelecionado === "cartao" && (
                <div className="mt-4">
                  <label
                    htmlFor="parcelas-select"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Escolha o número de parcelas:
                  </label>
                  <select
                    id="parcelas-select"
                    value={parcelas}
                    onChange={(e) => setParcelas(Number(e.target.value))}
                    className="border border-gray-300 rounded px-4 py-2 w-44 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {[...Array(10).keys()].map((i) => {
                      const p = i + 1;
                      return (
                        <option key={p} value={p}>
                          {p}x sem juros
                        </option>
                      );
                    })}
                  </select>

                  <p className="mt-3 text-gray-700 font-semibold">
                    Valor de cada parcela:{" "}
                    <span className="text-red-600">
                      R$ {(total / parcelas).toFixed(2).replace(".", ",")}
                    </span>
                  </p>
                </div>
              )}

              <button
                onClick={confirmarPagamento}
                disabled={!pagamentoSelecionado}
                className={`mt-6 w-full md:w-auto px-6 py-3 rounded font-semibold text-white transition ${
                  pagamentoSelecionado
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Confirmar Pagamento
              </button>
            </section>
          </>
        )}
      </main>
    </>
  );
}
