import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"; 

import type { Produto } from "./types";

export default function App() {
  const [carrinho, setCarrinho] = useState<(Produto & { quantidade: number })[]>([]);
  const nomeCliente = "Ylson Santos";

  function adicionarAoCarrinho(produto: Produto) {
    setCarrinho((oldCarrinho) => {
      const itemExistente = oldCarrinho.find((item) => item.id === produto.id);
      if (itemExistente) {
        return oldCarrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      }
      return [...oldCarrinho, { ...produto, quantidade: 1 }];
    });
  }

  function removerDoCarrinho(id: number) {
    setCarrinho((oldCarrinho) =>
      oldCarrinho
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  const quantidadeTotal = carrinho.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              adicionarAoCarrinho={adicionarAoCarrinho}
              quantidadeCarrinho={quantidadeTotal}
              nomeCliente={nomeCliente}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              carrinho={carrinho}
              remover={removerDoCarrinho}
              nomeCliente={nomeCliente}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
