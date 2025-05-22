import type { Produto } from "../types";

interface ProductCardProps {
  produto: Produto;
  onAdd: (produto: Produto) => void;
}

export default function ProductCard({ produto, onAdd }: ProductCardProps) {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={produto.imagem} alt={produto.nome} className="h-40 object-contain mb-4" />
      <h3 className="font-semibold text-lg">{produto.nome}</h3>
      <p className="text-gray-700 flex-grow">{produto.descricao}</p>
      <p className="font-bold mt-2 text-red-600">R$ {produto.preco.toFixed(2)}</p>
      <button
        onClick={() => onAdd(produto)}
        className="mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded transition"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
