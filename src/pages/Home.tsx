import { useState, useEffect } from "react";
import produtos from "../data/produtos";
import type { Produto } from "../types";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HomeProps {
  adicionarAoCarrinho: (produto: Produto) => void;
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

const banners = [
  "/Banner-Celular.png",
  "/Banner-Computador.png",
  "/Banner-fogao.png",
  "/Banner-Moveis.png",
  "/Banner-Pneu.png",
  "/Banner-tempo.png",
];

export default function Home({
  adicionarAoCarrinho,
  carrinhoCount,
}: HomeProps) {
  const [indices, setIndices] = useState<Record<string, number>>(() =>
    categorias.reduce((acc, c) => ({ ...acc, [c]: 0 }), {})
  );

  const [bannerAtual, setBannerAtual] = useState(0);
  const [produtoModal, setProdutoModal] = useState<Produto | null>(null);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setBannerAtual((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  function bannerAnterior() {
    setBannerAtual((prev) => (prev - 1 + banners.length) % banners.length);
  }

  function bannerProximo() {
    setBannerAtual((prev) => (prev + 1) % banners.length);
  }

  function proximo(categoria: string) {
    setIndices((old) => {
      const total = produtos.filter((p) => p.categoria === categoria).length;
      const novoIndex = (old[categoria] + 1) % total;
      return { ...old, [categoria]: novoIndex };
    });
  }

  function anterior(categoria: string) {
    setIndices((old) => {
      const total = produtos.filter((p) => p.categoria === categoria).length;
      const novoIndex = (old[categoria] - 1 + total) % total;
      return { ...old, [categoria]: novoIndex };
    });
  }

  function fecharModal() {
    setProdutoModal(null);
  }

  const [produtosVisiveis, setProdutosVisiveis] = useState(5);

  useEffect(() => {
    function ajustarVisiveis() {
      const largura = window.innerWidth;
      if (largura >= 1280) setProdutosVisiveis(5);
      else if (largura >= 1024) setProdutosVisiveis(4);
      else if (largura >= 768) setProdutosVisiveis(3);
      else if (largura >= 480) setProdutosVisiveis(2);
      else setProdutosVisiveis(1);
    }
    ajustarVisiveis();
    window.addEventListener("resize", ajustarVisiveis);
    return () => window.removeEventListener("resize", ajustarVisiveis);
  }, []);

  return (
    <>
      <Navbar carrinhoCount={carrinhoCount} />

      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden mb-6">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt={`Banner ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover shadow-md transition-opacity duration-1000 ease-in-out ${
              index === bannerAtual ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}

        <button
          onClick={bannerAnterior}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-red-600 rounded-full p-2 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={bannerProximo}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-red-600 rounded-full p-2 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center space-x-3 mb-6">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setBannerAtual(i)}
            className={`w-4 h-4 rounded-full transition-colors ${
              i === bannerAtual ? "bg-black" : "bg-black/50"
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto p-4">
        {categorias.map((categoria) => {
          const produtosCat = produtos.filter((p) => p.categoria === categoria);
          const total = produtosCat.length;
          const start = indices[categoria];

          const visibles =
            start + produtosVisiveis <= total
              ? produtosCat.slice(start, start + produtosVisiveis)
              : [
                  ...produtosCat.slice(start),
                  ...produtosCat.slice(0, produtosVisiveis - (total - start)),
                ];

          return (
            <div key={categoria} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-red-700">
                {categoria}
              </h2>
              <div className="bg-gray-100 rounded-lg p-4 min-h-[400px] relative">
                <button
                  onClick={() => anterior(categoria)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded z-10"
                >
                  {"<"}
                </button>

                <div className="flex gap-4 overflow-hidden px-12 justify-center md:justify-start">
                  {visibles.map((produto) => (
                    <div
                      key={produto.id}
                      className="border rounded p-2 max-w-xs w-52 h-80 flex flex-col justify-between bg-white"
                    >
                      <img
                        src={produto.imagem}
                        alt={produto.nome}
                        className="w-full h-52 object-cover rounded cursor-pointer"
                        onClick={() => setProdutoModal(produto)}
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="mt-2 font-semibold text-sm">
                            {produto.nome}
                          </h3>
                          <p className="text-red-600 font-bold text-sm">
                            R$ {produto.preco.toFixed(2)}
                          </p>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <button
                            onClick={() => adicionarAoCarrinho(produto)}
                            className="bg-green-600 text-white px-3 py-1 rounded text-sm w-24 active:opacity-70 active:scale-95 transition-all"
                          >
                            Carrinho
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => proximo(categoria)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-red-600 text-white px-3 py-1 rounded z-10"
                >
                  {">"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {produtoModal && (
        <Modal
          produto={produtoModal}
          onClose={fecharModal}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      )}
    </>
  );
}
 