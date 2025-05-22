import type { Produto } from "../types";

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Fone de ouvido JBL",
    preco: 199.9,
    descricao:
      "Fone de ouvido Bluetooth JBL com tecnologia avançada de cancelamento de ruído, design ergonômico para conforto durante horas, bateria de longa duração para uso contínuo e conexão estável, proporcionando uma experiência sonora imersiva e de alta qualidade.",
    imagem:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Eletrônicos",
  },
  {
    id: 2,
    nome: "Macbook",
    preco: 9500,
    descricao:
      "Notebook Apple MacBook ideal para trabalho e estudos, com processador de alta performance, tela Retina com cores vibrantes e nítidas, teclado retroiluminado e bateria que dura o dia todo, garantindo produtividade e mobilidade sem comprometer a qualidade.",
    imagem:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.1.0",
    categoria: "Eletrônicos",
  },
  {
    id: 3,
    nome: "Fone de ouvido sony",
    preco: 199.9,
    descricao:
      "Fone de ouvido Bluetooth Sony com cancelamento ativo de ruído para reduzir sons externos, som claro e potente, design confortável para uso prolongado, microfone integrado para chamadas nítidas e conexão Bluetooth estável para liberdade sem fios.",
    imagem:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categoria: "Eletrônicos",
  },
  {
    id: 4,
    nome: "Notebook Predator Helios Neo",
    preco: 8500,
    descricao:
      "Notebook gamer Predator Helios Neo com processador de última geração, placa gráfica dedicada para alta performance em jogos, tela com alta taxa de atualização para imagens fluidas, sistema de resfriamento eficiente e teclado RGB personalizável, ideal para gamers exigentes.",
    imagem:
      "https://acerstore.vtexassets.com/arquivos/ids/163373/PHN16-71-72W6---2.jpg?v=638779005794930000",
    categoria: "Eletrônicos",
  },
  {
    id: 5,
    nome: "iPhone 16 Pro Max",
    preco: 2800,
    descricao:
      "Smartphone iPhone 16 Pro Max com tela AMOLED de alta definição, sistema de câmera tripla para fotos e vídeos profissionais, desempenho rápido com o processador mais recente, sistema iOS intuitivo e design elegante, oferecendo uma experiência completa e sofisticada.",
    imagem: "https://imgs.casasbahia.com.br/55067420/1g.jpg?imwidth=500",
    categoria: "Eletrônicos",
  },
  {
    id: 6,
    nome: "Apple Watch Series 10",
    preco: 750,
    descricao:
      "Relógio inteligente Apple Watch Series 10 com monitor cardíaco avançado, GPS integrado para acompanhamento de atividades, resistência à água, notificações em tempo real e funções de saúde e fitness que ajudam a manter seu bem-estar diariamente.",
    imagem:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-cell-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aWp3UWRQeU9ENTVkdnpWZ2VCQ1JYVkF1Z0RaeFB5LzRxZEliRVE2WkswOW5YNUh6UG9VcVpLK2VQampYMHFQR0ZraFRqYm9IdFcyZHNBc3g5MFNqQkIxRVpGM0VTYkFEYWkrVUpmdm5HMEsvZzdYL1dmbHI1ck0vS0dDZmJkTUNtcXlYK1hMV0U1ZW9xcCtlRHF3V3gyZThGL0dtL1JkeEJQSnRCMXJsZFBFY2doN2ZiODFwWklZeDgrZ0RtbVRXag",
    categoria: "Eletrônicos",
  },
  {
    id: 7,
    nome: "Caixa De Som Jbl Boombox 2",
    preco: 1000,
    descricao:
      "Caixa de som portátil JBL Boombox 2 com potência sonora impressionante, graves profundos, bateria com até 24 horas de autonomia e design resistente à água, ideal para festas e ambientes externos, garantindo música com qualidade premium a qualquer momento.",
    imagem:
      "https://cdn.awsli.com.br/800x800/818/818709/produto/143142187/229bca2fbe.jpg",
    categoria: "Eletrônicos",
  },
  {
    id: 8,
    nome: "Mouse Gamer M987-K ",
    preco: 4200,
    descricao:
      "Mouse gamer M987-K com alta precisão, sensores avançados para resposta rápida, design ergonômico para conforto em longas sessões de jogo e botões programáveis, garantindo desempenho profissional para jogadores exigentes.",
    imagem:
      "https://mirandacomputacao.jetassets.com.br/produto/46215-principal.png",
    categoria: "Eletrônicos",
  },
  {
    id: 9,
    nome: "Monitor LED 24pol Samsung",
    preco: 3900,
    descricao:
      "Monitor LED Samsung de 24 polegadas com resolução Full HD, painel IPS para cores precisas e ângulos amplos, tempo de resposta rápido para jogos e trabalho, conectividade HDMI e VGA, perfeito para profissionais e gamers que buscam qualidade visual superior.",
    imagem:
      "https://waz.vtexassets.com/arquivos/ids/218229/124414-1-Monitor_LED_24pol_Samsung_LF24T350_IPS_Full_HD_HDMI_VGA_FreeSync_124414.jpg?v=637812314751100000",
    categoria: "Eletrônicos",
  },
  {
    id: 10,
    nome: "Teclado Mecânico Gamer",
    preco: 850,
    descricao:
      "Teclado mecânico gamer com switches silenciosos, iluminação RGB personalizável, construção robusta e design ergonômico, oferecendo conforto, durabilidade e alta performance para gamers que buscam precisão e estilo durante as partidas.",
    imagem:
      "https://www.zoing.com.br/media/catalog/product/cache/356405186860d79d6d10aa0f8b116a78/t/e/teclado-mecanico-gamer-redragon-akaki-rgb-abnt2-preto-abnt2-k642-rgb-pt-brown-1.jpg",
    categoria: "Eletrônicos",
  },
  {
    id: 11,
    nome: "Cadeira Gamer Otello Preto",
    preco: 999,
    descricao:
      "Cadeira gamer ergonômica com estofado em couro sintético, suporte lombar ajustável e base reforçada — ideal para sessões prolongadas de jogo com máximo conforto.",
    imagem:
      "https://a-static.mlcdn.com.br/800x560/cadeira-gamer-otello-preto-e-vermelho/magazineluiza/237019000/b3fc5faf334ec8354d4177f54df4e87a.jpg",
    categoria: "Casa",
  },
  {
    id: 12,
    nome: "Conjunto Mesa de Jantar Quadrada",
    preco: 1399,
    descricao:
      "Mesa de jantar quadrada em madeira maciça, acabamento sofisticado e design moderno, com capacidade para até 6 pessoas confortavelmente.",
    imagem:
      "https://imageswscdn.wslojas.com.br/files/1537/MED_produto-conjunto-mesa-de-jantar-quadrada-90x90cm-com-vidro-freijo-white-e-04-cadeiras-1442.jpg",
    categoria: "Casa",
  },
  {
    id: 13,
    nome: "Sofá 3 Lugares Nevada",
    preco: 1799,
    descricao:
      "Sofá 3 lugares com revestimento em tecido suede de alta durabilidade, espuma de densidade premium e design contemporâneo para valorizar sua sala.",
    imagem:
      "https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg",
    categoria: "Casa",
  },
  {
    id: 14,
    nome: "Abajur Luminaria De Mesa Alto Padrão",
    preco: 179,
    descricao:
      "Abajur sofisticado com base em cerâmica esmaltada e cúpula em tecido premium, perfeito para criar um ambiente aconchegante e elegante.",
    imagem:
      "https://cdn.leroymerlin.com.br/products/abajur_luminaria_de_mesa_alto_padrao_luxo_1569770448_a76e_600x600.jpg",
    categoria: "Casa",
  },
  {
    id: 15,
    nome: "Estante 4 Prateleiras Legno",
    preco: 499,
    descricao:
      "Estante robusta com 4 prateleiras em madeira maciça, ideal para organizar livros, objetos decorativos e otimizar seu espaço com estilo.",
    imagem:
      "https://www.artefamamoveis.com.br/estatico/artefama/images/temp/600_estante4prateleiraslegnomadeiramacica.jpeg",
    categoria: "Casa",
  },
  {
    id: 16,
    nome: "Cortina Blackout 100% Linen",
    preco: 299,
    descricao:
      "Cortina blackout de linho 100% natural, bloqueia até 99% da luz, reduz ruídos e proporciona maior conforto térmico para seu ambiente.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1175294/cortina_blackout_linen_tecido_100_5_40m_x_2_50m_indicado_para_varao_de_ate_2_50m_duna_bella_janela_5991_1_37e2f4dff89e686a57c294bfa668bda2.jpg",
    categoria: "Casa",
  },
  {
    id: 17,
    nome: "Tapete Vermelho Persa Koleay",
    preco: 2598,
    descricao:
      "Tapete Persa autêntico com padronagem tradicional e cores vibrantes, feito com fios de alta qualidade para durabilidade e elegância em sua decoração.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/740651/tapete_vermelho_persa_koleay_1808_1_05x1_50m_117_1_20200123125141.jpg",
    categoria: "Casa",
  },
  {
    id: 18,
    nome: "Ventilador de Mesa 2 em 1 ",
    preco: 329,
    descricao:
      "Ventilador silencioso com design moderno, controle remoto e função luz noturna integrada, oferecendo conforto e praticidade para seu dia a dia.",
    imagem:
      "https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1539/medium/ventilador-de-mesa-2-em-1-turbo-force-vf42-arno-40cm-com-6-pas-127v-preto_12065.jpg",
    categoria: "Casa",
  },
  {
    id: 19,
    nome: "Luminária Pendente Decor",
    preco: 229,
    descricao:
      "Luminária pendente em metal com design elegante e acabamento sofisticado, perfeita para dar um toque moderno e funcional à sua sala ou escritório.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/720646/luminaria_pendente_decor_em_metal_bubbles_g_16459_1_8bad8a7fca2049949997d042bbd7f27a.jpg",
    categoria: "Casa",
  },
  {
    id: 20,
    nome: "Armário de Cozinha Completa",
    preco: 3599,
    descricao:
      "Armário de cozinha com acabamento em MDF resistente, múltiplas portas e gavetas para máxima organização, ideal para otimizar espaços pequenos ou grandes.",
    imagem:
      "https://m.media-amazon.com/images/I/61ipbro8rCL._AC_UF894,1000_QL80_.jpg",
    categoria: "Casa",
  },
  {
    id: 21,
    nome: "Oral-B PRO Series 1",
    preco: 189,
    descricao:
      "Escova elétrica com tecnologia de limpeza 3D que remove até 100% mais placa que uma escova manual. Possui sensor de pressão que protege suas gengivas e timer inteligente para garantir a duração ideal da escovação, proporcionando sensação de limpeza profissional todos os dias.",
    imagem:
      "https://m.media-amazon.com/images/I/51afEiWGJZL._AC_UF1000,1000_QL80_.jpg",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 22,
    nome: "Máquina Barbeador Shave",
    preco: 129,
    descricao:
      "Barbeador elétrico com design ergonômico para máxima comodidade. Equipado com lâminas de alta precisão que garantem um barbear rente, seguro e confortável, ideal para o uso diário e para diferentes tipos de pele.",
    imagem: "https://imgs.extra.com.br/1545922914/1xg.jpg?imwidth=1000",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 23,
    nome: "Santa Clara COLOR Wind",
    preco: 150,
    descricao: "Secador profissional com tecnologia avançada de controle de temperatura, jato de ar frio e potência de 2100W. Perfeito para proteger os fios enquanto seca, proporcionando brilho e redução do frizz para um acabamento impecável.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/159791/secador_de_cabelos_profissional_color_wind_santa_clara_2100watts_vermelho_220v_7270_1_3cd7dfb0b5ad1b872dd537468fa84f40.jpg",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 24,
    nome: "Perfume Feminino L'eau De Lily Soleil",
    preco: 95,
    descricao: "Fragrância delicada e sofisticada com notas florais e cítricas que transmitem frescor e elegância. Ideal para uso diário, deixando uma impressão marcante e encantadora em qualquer ocasião.",
    imagem:
      "https://http2.mlstatic.com/D_Q_NP_892409-MLU75559572244_042024-O.webp",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 25,
    nome: "Lily Creme Acetinado Hidratante",
    preco: 40,
    descricao: "Creme hidratante enriquecido com vitamina E e ativos nutritivos que promovem hidratação profunda, maciez e toque acetinado à pele, ideal para uso diário e para manter a pele saudável e protegida.",
    imagem: "https://m.media-amazon.com/images/I/51JtZoU95lL.jpg",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 26,
    nome: "Sabonete Líquido Monange Frutas",
    preco: 25,
    descricao: "Sabonete líquido com fórmula suave e enriquecida com extratos naturais de frutas, proporcionando limpeza eficaz com toque refrescante e aroma frutado que dura o dia todo.",
    imagem:
      "https://lojacoty.vteximg.com.br/arquivos/ids/174236-1000-1000/25094-0-1.jpg?v=638700795702700000",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 27,
    nome: "Desodorante Rexona Masculino",
    preco: 20,
    descricao: "Desodorante antitranspirante com tecnologia MotionSense que oferece proteção prolongada contra suor e odor, mesmo durante atividades intensas. Fórmula que respeita a pele e proporciona sensação de frescor o dia inteiro.",
    imagem:
      "https://images-americanas.b2w.io/produtos/01/00/img3/1278376/9/127837625_1GG.jpg",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 28,
    nome: "Pasta de Dente XeroLacer 100g",
    preco: 15,
    descricao: "Pasta de dente especialmente formulada para proteger contra a xerostomia, promovendo higiene bucal eficaz e refrescante, ajudando a manter o hálito fresco e os dentes fortes.",
    imagem:
      "https://aopharma.com.br/media/catalog/product/cache/4f539c273125922854c08a8829908ac5/6/4/644123fddd3f160001e6dacc-002998-0.jpg",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 29,
    nome: "Kit Manicure em Casa Mundial",
    preco: 70,
    descricao: "Kit completo para manicure com tesoura, alicate, lixa e espátula em estojo compacto e resistente. Ideal para cuidados pessoais precisos e profissionais no conforto do seu lar.",
    imagem:
      "https://cdnv2.moovin.com.br/grupomundial/imagens/produtos/det/kit-manicure-em-casa.png",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 30,
    nome: "Máscara Facial Preta Bisnaga",
    preco: 50,
    descricao: "Máscara facial com extratos naturais que auxiliam na limpeza profunda dos poros, revitalizam e iluminam a pele, promovendo um aspecto saudável e renovado.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/962461/mascara_facial_preta_bisnaga_face_beautiful_239_1_d14bace33128e4e6f7e810f63a1dc28a.png",
    categoria: "Cuidados Pessoais",
  },
  {
    id: 31,
    nome: "Caderno Universitário",
    preco: 15,
    descricao:
      "Caderno com 200 folhas pautadas, ideal para anotações detalhadas e organização do seu dia a dia acadêmico.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYucUrvC8NULx9jOz1zQolmp12hPqBaA4Yg&s",
    categoria: "Papelaria",
  },
  {
    id: 32,
    nome: "Caneta Esferográfica Ponta Média",
    preco: 3,
    descricao:
      "Caneta de ponta média com tinta de secagem rápida para escrita fluida e sem borrões.",
    imagem:
      "https://lojamultilaser.vtexassets.com/arquivos/ids/1403545/13327_00.jpg?v=638786208630670000",
    categoria: "Papelaria",
  },
  {
    id: 33,
    nome: "Estojo Escolar 100 Pens Grande",
    preco: 25,
    descricao:
      "Estojo espaçoso e resistente, com múltiplos compartimentos para organizar seus materiais escolares com praticidade.",
    imagem:
      "https://a-static.mlcdn.com.br/800x560/estojo-escolar-100-pens-grande-box-academie-tilibra/e-clipfix/estojo-turquesa/4207c74651c6a3c1a8995e7c90246328.jpeg",
    categoria: "Papelaria",
  },
  {
    id: 34,
    nome: "Lápis de cor aquarelável, 36 Cores",
    preco: 18,
    descricao:
      "Conjunto com 36 lápis de cor aquareláveis, oferecendo cores vibrantes e alta durabilidade para suas criações artísticas.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRAcaGF63h7DrZmNOMfvZGPOnPwphVVFjPA&s",
    categoria: "Papelaria",
  },
  {
    id: 35,
    nome: "Caneta Borracha Retrátil",
    preco: 2,
    descricao:
      "Borracha retrátil de alta qualidade que apaga com precisão sem danificar o papel, prática e eficiente para correções rápidas.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1255172/borracha_retratil_leo_e_leo_sonic_com_1_suporte_e_3_borrachas_und_leonora_911_2_6de0257c0da3b029b1fa1397c50850d7.jpg",
    categoria: "Papelaria",
  },
  {
    id: 36,
    nome: "Régua de Aço Keramik 20cm",
    preco: 4,
    descricao:
      "Régua de aço resistente com 20cm, perfeita para medições precisas tanto em ambiente escolar quanto técnico.",
    imagem:
      "https://cdn.awsli.com.br/1500x1500/1277/1277487/produto/50197491/regua-de-aco-keramik-20-cm-jn6xs0vz0e.jpg",
    categoria: "Papelaria",
  },
  {
    id: 37,
    nome: "Lumini Marcador de Texto",
    preco: 7,
    descricao:
      "Marcador de texto com tinta fluorescente intensa, ideal para destacar informações importantes sem borrar.",
    imagem: "https://m.media-amazon.com/images/I/71J1+W-5DNL.jpg",
    categoria: "Papelaria",
  },
  {
    id: 38,
    nome: "Cola bastão Pritt 10g ",
    preco: 6,
    descricao:
      "Cola bastão prática e sem sujeira, com excelente aderência para trabalhos escolares e artesanais.",
    imagem: "https://s3.amazonaws.com/lepok.w/produtos/produtos/00393.webp",
    categoria: "Papelaria",
  },
  {
    id: 39,
    nome: "Agenda escolar",
    preco: 30,
    descricao:
      "Agenda com planejamento semanal, perfeita para organizar seus compromissos e garantir uma rotina produtiva.",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/203/267/products/escolar-rose-gold1-640-0-d746806dcf285e576e16734700100141-1024-1024.png",
    categoria: "Papelaria",
  },
  {
    id: 40,
    nome: "Grampeador Pequeno",
    preco: 20,
    descricao:
      "Grampeador compacto e resistente, ideal para uso diário em escritórios e escolas com alta eficiência.",
    imagem:
      "https://cdnv2.moovin.com.br/marbig/imagens/produtos/det/grampeador-12-folhas-mini-com-extrator-g101-rosa-img-18519_1010240303019793.jpg",
    categoria: "Papelaria",
  },
  {
    id: 41,
    nome: "Microondas 20 Litros Philco",
    preco: 450,
    descricao:
      "Micro-ondas compacto com painel digital intuitivo e diversas funções pré-programadas para facilitar seu dia a dia na cozinha.",
    imagem: "https://imgs.casasbahia.com.br/1565678751/1xg.jpg",
    categoria: "Eletrodomesticos",
  },
  {
    id: 42,
    nome: "Liquidificador Turbo, Mondial, Preto/Inox",
    preco: 219,
    descricao:
      "Liquidificador potente com 3 velocidades e função pulsar para preparar suas receitas com praticidade e rapidez.",
    imagem:
      "https://dleyjack4mlu0.cloudfront.net/Custom/Content/Products/58/81/5881_liquidificador-mondial-12-velocidades-filter-l-1200_z2_638623566285682417.webp",
    categoria: "Eletrodomesticos",
  },
  {
    id: 43,
    nome: "Cafeteira Espresso Dolce",
    preco: 249,
    descricao:
      "Cafeteira espresso com capacidade para até 12 xícaras, design compacto e tecnologia que preserva o sabor intenso do café.",
    imagem:
      "https://d296pbmv9m7g8v.cloudfront.net/Custom/Content/Products/10/40/1040935_cafeteira-dolce-gusto-arno-genio-s-plus-dgs3-capsula-automatica-vermelha-10006431_z144_638597707627247593.webp",
    categoria: "Eletrodomesticos",
  },
  {
    id: 44,
    nome: "Fogão Continental 4 Bocas",
    preco: 1099,
    descricao:
      "Fogão 4 bocas com forno espaçoso, acendimento automático e design moderno para facilitar seu dia a dia na cozinha.",
    imagem:
      "https://lojawebcontinental.vtexassets.com/arquivos/ids/20812149/B81021523011130031-1.jpg?v=638257992528500000",
    categoria: "Eletrodomesticos",
  },
  {
    id: 45,
    nome: "Batedeira Stand Mixer ",
    preco: 749,
    descricao:
      "Batedeira robusta com múltiplas velocidades, tigela de aço inox e acessórios para diversas receitas, perfeita para quem ama cozinhar.",
    imagem:
      "https://spicy.vtexassets.com/arquivos/ids/215359-800-auto?v=637835657645530000&width=800&height=auto&aspect=true",
    categoria: "Eletrodomesticos",
  },
  {
    id: 46,
    nome: "Geladeira Duplex Frost Free",
    preco: 2899,
    descricao:
      "Geladeira duplex frost free com alta eficiência energética A, design moderno e capacidade ideal para famílias que buscam praticidade e economia.",
    imagem:
      "https://compracerta.vtexassets.com/arquivos/ids/962318-800-800?v=638762670728200000&width=800&height=800&aspect=true",
    categoria: "Eletrodomesticos",
  },
  {
    id: 47,
    nome: "Máquina De Lavar Brastemp ",
    preco: 1799,
    descricao:
      "Máquina de lavar com alta capacidade e múltiplos programas para diferentes tipos de tecidos, garantindo lavagem eficiente e cuidado com suas roupas.",
    imagem:
      "https://compracerta.vtexassets.com/arquivos/ids/940705-800-800?v=638760072764670000&width=800&height=800&aspect=true",
    categoria: "Eletrodomesticos",
  },
  {
    id: 48,
    nome: "Ferro de Passar a Vapor",
    preco: 119,
    descricao:
      "Ferro a vapor com base antiaderente e controle preciso de temperatura, para passar roupas com facilidade e proteger os tecidos.",
    imagem:
      "https://www.oster.com.br/arquivos/ppGCSTBS5053-02m.jpg?v=637720577472800000",
    categoria: "Eletrodomesticos",
  },
  {
    id: 49,
    nome: "Fritadeira Air Fry Britânia",
    preco: 299,
    descricao:
      "Fritadeira elétrica Air Fry com capacidade média, painel digital e tecnologia que garante alimentos crocantes e saudáveis.",
    imagem:
      "https://philco.vtexassets.com/arquivos/ids/183455/Fritadeira-Air-Fry-Digital-Inox-BFR20PI_3.jpg?v=638736836427470000",
    categoria: "Eletrodomesticos",
  },
  {
    id: 50,
    nome: "Aspirador De Pó Útil Eletro",
    preco: 350,
    descricao:
      "Aspirador portátil com filtro HEPA, fácil manuseio e limpeza prática, ideal para manter sua casa livre de poeira e alergênicos.",
    imagem:
      "https://freitasvarejo.vteximg.com.br/arquivos/ids/187115-1000-1000/75113073001_4.jpg?v=638439706770970000",
    categoria: "Eletrodomesticos",
  },
  {
    id: 51,
    nome: "Jogo de Cartas UNO",
    preco: 29,
    descricao:
      "Clássico jogo de cartas que promove diversão e interação para toda a família. Fácil de aprender, com regras simples, ideal para todas as idades e perfeito para momentos de lazer e competição amigável.",
    imagem:
      "https://images-americanas.b2w.io/produtos/01/00/img3/1267927/9/126792761_1SZ.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 52,
    nome: "Boneca Barbie Fashion",
    preco: 120,
    descricao:
      "Boneca Barbie com roupas e acessórios variados, que estimulam a criatividade e o desenvolvimento da imaginação. Perfeita para brincadeiras de faz de conta, incentivando a expressão pessoal e o estilo.",
    imagem:
      "https://cdn.awsli.com.br/600x700/510/510818/produto/282644478/c0a761d3-1946-4223-99fc-5f544d8b48e7-a1pvpvao4m.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 53,
    nome: "Quebra-Cabeça 500 Peças",
    preco: 60,
    descricao:
      "Quebra-cabeça colorido com 500 peças de alta qualidade, ideal para todas as idades. Desenvolve habilidades cognitivas, concentração e coordenação motora enquanto monta imagens incríveis e desafiadoras.",
    imagem:
      "https://cdn.awsli.com.br/600x450/2437/2437567/produto/164998037/90062b274b.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 54,
    nome: "Blocos De Construção",
    preco: 39,
    descricao:
      "Conjunto de blocos de construção com peças resistentes e coloridas para montar diversas figuras e estruturas. Estimula a criatividade, a coordenação motora fina e o raciocínio lógico durante as brincadeiras.",
    imagem:
      "https://cdn.awsli.com.br/600x450/328/328177/produto/57524876/d79f1fb936.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 55,
    nome: "Jogo da Memória",
    preco: 25,
    descricao:
      "Jogo da memória com cartas ilustradas para treinar e aprimorar a concentração e a memória visual das crianças. Perfeito para momentos educativos e divertidos em família.",
    imagem:
      "https://rihappy.vtexassets.com/arquivos/ids/4169180/100181873_2.jpg?v=637927195737930000",
    categoria: "Brinquedos",
  },
  {
    id: 56,
    nome: "Patins Infantil TXT",
    preco: 220,
    descricao:
      "Patins infantil ajustável, com sistema de proteção e rodas em PU que proporcionam segurança e conforto. Ideal para crianças que querem aprender a patinar, desenvolvendo equilíbrio e coordenação.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYNUu6CJMEqwlAUsAs-nZ6CB5KERyr_d99gw&s",
    categoria: "Brinquedos",
  },
  {
    id: 57,
    nome: "Boneco Stitch Vinil 15cm",
    preco: 100,
    descricao:
      "Boneco articulado do personagem Stitch, feito em vinil de alta qualidade, com detalhes realistas e acessórios. Perfeito para colecionadores e para as crianças que amam aventuras e histórias divertidas.",
    imagem:
      "https://a-static.mlcdn.com.br/1500x1500/boneco-stitch-vinil-15cm-minimals-disney-baby-lilo-ohana-original-roma-roma-brinquedos/mctoysshop/rb-5757/18b36e55a7b4b217219a5dcaca739d9e.jpeg",
    categoria: "Brinquedos",
  },
  {
    id: 58,
    nome: "Patinete Com Luz De Led",
    preco: 185,
    descricao:
      "Patinete infantil com rodas equipadas com luzes de LED coloridas, que se acendem conforme o movimento. Estrutura resistente, guidão ajustável em altura e base antiderrapante, garantindo segurança e diversão para as crianças.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv97ZrkEWdh7twP6XmKBi5_V8yBWzjkqbp8w&s",
    categoria: "Brinquedos",
  },
  {
    id: 59,
    nome: "Bola Futebol Atrio Mundi",
    preco: 130,
    descricao: "Bola oficial tamanho 5 para jogos recreativos e treino",
    imagem:
      "https://images-americanas.b2w.io/produtos/01/00/img/4839191/4/4839191463_1GG.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 60,
    nome: "Barraca 3 Em 1",
    preco: 330,
    descricao:
      "Barraca infantil 3 em 1, que pode ser utilizada como cabana, túnel para brincadeiras e espaço de lazer. Fabricada com materiais seguros, leves e de fácil montagem, perfeita para diversão dentro e fora de casa.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/684826/brinquedo_infantil_barraca_3_em_1_princesas_dm_toys_24825_1_20200928100806.jpg",
    categoria: "Brinquedos",
  },
  {
    id: 61,
    nome: "Bola Basquete Penalty",
    preco: 120,
    descricao:
      "Bola de basquete oficial tamanho 7 da Penalty, ideal para jogos amadores e profissionais. Superfície resistente, com ótima aderência para quadras internas e externas.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/1376235/bola_basquete_penalty_play_off_baby_2189_1_37b61e1db8e4a3987093b4be92f58a32.jpg",
    categoria: "Esportes",
  },
  {
    id: 62,
    nome: "Tênis Nike Revolution 7",
    preco: 350,
    descricao:
      "Tênis esportivo da Nike com tecnologia de amortecimento, ideal para corridas de longa distância. Design moderno, leveza e conforto para o dia a dia ou atividades físicas intensas.",
    imagem: "https://imgnike-a.akamaihd.net/1300x1300/027284IMA8.jpg",
    categoria: "Esportes",
  },
  {
    id: 63,
    nome: "Camisa Brasil 2025 ",
    preco: 180,
    descricao:
      "Camisa oficial da Seleção Brasileira modelo 2025. Produzida com tecido respirável, leve e confortável, perfeita para torcer ou praticar esportes.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/694710/camisa_brasil_2025_camisa_i_selecao_brasileira_2727_1_05852a3a673bddf968477bde49a2c813.png",
    categoria: "Esportes",
  },
  {
    id: 64,
    nome: "Bolsa de Academia Active",
    preco: 200,
    descricao:
      "Bolsa esportiva resistente e espaçosa, ideal para academia, viagens curtas ou atividades físicas. Compartimentos internos e alças reforçadas para facilitar o transporte.",
    imagem:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/090006/01/fnd/BRA/w/1000/h/1000/fmt/png",
    categoria: "Esportes",
  },
  {
    id: 65,
    nome: "Faixa de Cabelo Dri-Fit 2.0 Nike",
    preco: 20,
    descricao:
      "Faixa esportiva com tecnologia Dri-Fit da Nike que ajuda a manter o suor longe dos olhos durante exercícios. Leve, confortável e com excelente ajuste à cabeça.",
    imagem:
      "https://www.capitaldoesporte.com.br/wp-content/uploads/2021/03/Faixa-Nike.jpg",
    categoria: "Esportes",
  },
  {
    id: 66,
    nome: "Kit Halteres Neoprene",
    preco: 250,
    descricao:
      "Conjunto de halteres revestidos em neoprene com pesos variados, ideal para exercícios em casa, musculação leve e tonificação muscular. Pegada confortável e antiderrapante.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxjUVMiHOZ7DO2uRVfHWaDG5YUKneMvNmjw&s",
    categoria: "Esportes",
  },
  {
    id: 67,
    nome: "Colchonete Yoga de Eva",
    preco: 90,
    descricao:
      "Colchonete em EVA de alta densidade, antiderrapante e confortável, ideal para práticas de yoga, pilates ou alongamentos. Fácil de limpar e transportar.",
    imagem:
      "https://cdn.dooca.store/2643/products/za2ru7yrom3jmxcmpoilfosvkrfvbvkneowj_640x640+fill_ffffff.jpg?v=1675963044&webp=0",
    categoria: "Esportes",
  },
  {
    id: 68,
    nome: "Raquete Tênis Convoy",
    preco: 300,
    descricao:
      "Raquete de tênis leve, resistente e de ótimo desempenho, ideal para jogadores intermediários que buscam maior controle e potência nas partidas.",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2xQR4RAOTKW6rpYFxCUq7V5YuaIptqaDefw&s",
    categoria: "Esportes",
  },
  {
    id: 69,
    nome: "Garrafa térmica Stanley",
    preco: 160,
    descricao:
      "Garrafa térmica de alta durabilidade, com vedação segura e excelente capacidade de manter líquidos frios ou quentes por horas. Ideal para treinos, trilhas e o dia a dia.",
    imagem:
      "https://sublitransferbrasil.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1060081677_garrafa_termica_1000ml_sublitransfer_2_.png.png",
    categoria: "Esportes",
  },
  {
    id: 70,
    nome: "Touca De Natação",
    preco: 45,
    descricao:
      "Touca de natação em silicone resistente, anatômica e confortável. Ideal para prática esportiva em piscinas, oferecendo proteção aos cabelos e melhor desempenho na água.",
    imagem:
      "https://lojaspeedo.vtexassets.com/arquivos/ids/205998/C18009_180_1-TOUCA-SILICONE-LISA.png?v=637891200719570000",
    categoria: "Esportes",
  },
  {
    id: 71,
    nome: "Óleo Lubrificante Lubrax",
    preco: 70,
    descricao:
      "Óleo sintético de alta performance ideal para motores modernos. Garante excelente lubrificação, proteção contra desgaste e maior durabilidade ao motor, mesmo em condições extremas.",
    imagem:
      "https://agrosolo.fbitsstatic.net/img/p/oleo-lubrificante-sintetico-lubrax-para-motores-valora-5w-30-1-litro-80193/273105-1.jpg?w=700&h=700&v=no-value",
    categoria: "Automotivo",
  },
  {
    id: 72,
    nome: "Kit Limpeza Automotiva Vonixx",
    preco: 85,
    descricao:
      "Kit completo para limpeza automotiva com shampoo, cera e acessórios. Ideal para manter seu carro sempre limpo, brilhante e protegido contra sujeiras e ação do tempo.",
    imagem:
      "https://cdn.awsli.com.br/600x700/2622/2622517/produto/225242196/ml--1200---1200-px---1--x6xma530s0.png",
    categoria: "Automotivo",
  },
  {
    id: 73,
    nome: "Carregador Veicular Turbo",
    preco: 45,
    descricao:
      "Carregador veicular com duas portas USB de alta velocidade. Permite recarregar rapidamente seus dispositivos durante o trajeto, com segurança e compatibilidade universal.",
    imagem:
      "https://cirilocabos.vtexassets.com/arquivos/ids/174761/carregador-veicular-turbo-charging-2-portas-usb-cirilocabos-901735-01.jpg?v=636924014311230000",
    categoria: "Automotivo",
  },
  {
    id: 74,
    nome: "Suporte Veicular Universal",
    preco: 35,
    descricao:
      "Suporte veicular ajustável com trava automática e haste flexível. Compatível com diversos tamanhos de smartphones, garante segurança e praticidade ao dirigir.",
    imagem:
      "https://images.tcdn.com.br/img/img_prod/406359/suporte_veicular_universal_para_celular_com_trava_automatica_e_haste_flexivel_de_metal_exbom_sp_t24_2413_1_8e2d98beab0cd2e1489c1b4a21d1b867_20220707124648.jpg",
    categoria: "Automotivo",
  },
  {
    id: 75,
    nome: "Capa para banco luxo",
    preco: 120,
    descricao:
      "Capa de banco automotiva com material resistente e acabamento de luxo. Protege contra sujeira, desgaste e líquidos, oferecendo um visual sofisticado ao interior do veículo.",
    imagem:
      "https://cdn.awsli.com.br/600x1000/2212/2212053/produto/214785715/_capa-para-banco-com-logo-luxo-cod-81068-axbmjion75.jpg",
    categoria: "Automotivo",
  },
  {
    id: 76,
    nome: "Macaco Jacaré Longo",
    preco: 200,
    descricao:
      "Macaco hidráulico tipo jacaré, ideal para oficinas e trocas de pneu. Suporta até 10 toneladas, oferecendo estabilidade, segurança e facilidade no manuseio.",
    imagem:
      "https://sertao.vtexassets.com/arquivos/ids/195349/macaco-hidraulico-tipo-jacare-10t-marcon.png?v=638670533664070000",
    categoria: "Automotivo",
  },
  {
    id: 77,
    nome: "Alarme Automotivo Positron",
    preco: 350,
    descricao:
      "Sistema de alarme moderno com sensor de movimento e controle remoto. Oferece proteção completa contra furtos, bloqueio do motor e alertas sonoros eficientes.",
    imagem:
      "https://lojapositron.vteximg.com.br/arquivos/ids/156727-500-500/exact360_blade.png?v=638132982686730000",
    categoria: "Automotivo",
  },
  {
    id: 78,
    nome: "Som Automotivo Positron",
    preco: 60,
    descricao:
      "Som automotivo compacto da Positron com entrada USB, rádio FM e conexão Bluetooth. Ideal para ouvir suas músicas favoritas com qualidade durante a viagem.",
    imagem:
      "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/165126-1000-1000/p_45092_alta_1.png?v=637003478895570000",
    categoria: "Automotivo",
  },
  {
    id: 79,
    nome: "Lanterna Pendente de Emergência",
    preco: 70,
    descricao:
      "Lanterna LED recarregável ideal para situações emergenciais em veículos. Compacta, potente e prática, oferece luz pendente com alcance e autonomia prolongada.",
    imagem:
      "https://a-static.mlcdn.com.br/800x560/lanterna-pendente-de-emergencia-carro-luz-de-led-extensao-idea/olistsp/ospnxjutu6lrf2i1/03c59f394c49a1934a725624f25b3fcb.jpeg",
    categoria: "Automotivo",
  },
  {
    id: 80,
    nome: "Pneu Aro 17 Continental",
    preco: 239,
    descricao: "Tapete resistente e antiderrapante para carro",
    imagem:
      "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-23555r17-contipremiumcontact-5-continental-99v-original-audi-q3-1.png?width=1200&height=1200&optimize=low",
    categoria: "Automotivo",
  },
];

export default produtos;
