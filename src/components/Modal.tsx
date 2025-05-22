interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: string;
}

interface ModalProps {
  produto: Produto;
  onClose: () => void;
  adicionarAoCarrinho: (produto: Produto) => void;
}

export default function Modal({ produto, onClose, adicionarAoCarrinho }: ModalProps) {
  return (
    <div
      className="fixed inset-0 bg-gradient-to-br from-black/70 via-gray-900/80 to-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col md:flex-row overflow-hidden relative border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition text-3xl font-extrabold shadow-md rounded-full w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={onClose}
          aria-label="Fechar modal"
          title="Fechar"
        >
          &times;
        </button>

        <div className="md:w-1/2 bg-gradient-to-tr from-green-50 via-white to-green-100 flex justify-center items-center p-6 max-h-[85vh] overflow-hidden rounded-l-3xl shadow-inner">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="max-h-[60vh] w-auto object-contain rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 p-6 pt-14 flex flex-col justify-between max-h-[85vh]">
          <div className="overflow-auto max-h-[calc(85vh-140px)] pr-2">
            <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3 drop-shadow-sm">
              {produto.nome}
            </h2>

            <p className="text-lg md:text-2xl font-extrabold text-green-700 mb-5 drop-shadow-md">
              R$ {produto.preco.toFixed(2).replace('.', ',')}
            </p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-wrap mb-6 font-light tracking-wide">
              {produto.descricao}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 active:from-green-800 active:to-green-700 text-white font-semibold rounded-xl px-10 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
              onClick={() => {
                adicionarAoCarrinho(produto);
                onClose();
              }}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
