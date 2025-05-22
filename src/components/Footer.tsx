import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start space-y-4">
          <img
            src="/RocketStore.png"
            alt="Logo Rocket Store"
            className="w-40"
          />
          <p className="text-sm text-gray-400 max-w-md">
            Na Rocket Store vendemos de tudo! Produtos de qualidade, diversidade e preços justos para facilitar sua vida.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Fale conosco</h4>
          <p className="text-sm text-gray-400 mb-4">
            Atendimento de segunda a sexta, das 9h às 18h.
          </p>
          <p className="text-sm text-gray-400 whitespace-pre-line">
            WhatsApp: (81) xxxx-xxxx{"\n"}
            Facebook: facebook.com/RocketStore{"\n"}
            Instagram: instagram.com/RocketStore
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Rocket Store. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
