const apiKey = 'pub_23554e6e585a7bf49510dfab6b30ce5fc28d6';
const country = 'br';
const category = '';
const newsdata_url = `https://newsdata.io/api/1/news?apikey=${apiKey}`;

let fetch_url = newsdata_url;



const status_data = {
  request: {
    fetch_url: newsdata_url,
    query: {
      country: "br",
      category: "",
      q: "",
      language: ""
    }
  },
  results: {
    query: {},
    news: {}
  }
}

sources = {
  categories: {
    "": "Geral",
    "top": "Top",
    "world": "Mundo",
    "politics": "Política",
    "health": "Saúde",
    "technology": "Tecnologia",
    "entertainment": "Entretenimento",
    "sports": "Esportes"
  },
  countries: {
    "br": "Brasil",
    "": "Global",
    "us": "EUA",
    "gb": "UK",
    "cn": "China"
  }

}


function applyQuery(url) {
  const query = status_data.request.query;
  const queryString = Object.keys(query).map(key => !(query[key] == null || query[key].trim().length === 0) ?
    (encodeURIComponent(key) + '=' + encodeURIComponent(query[key])) : null).join('&');
  return url + `&${queryString}`;
}

async function requestAPI(url, page) {
  response = await fetch(url + `&page=${page}`)
  const data = await response.json();
  return data;
}

function tmp_getFetchedNews(url, page) {
  return {
    "status": "success", "totalResults": 1089, "results": [
      { "title": "Quem ganhou a corrida de Fórmula 1 hoje: Verstappen vence GP de Mônaco 2023", "link": "https://www.dci.com.br/esporte/quem-ganhou-a-corrida-de-formula-1-hoje-verstappen-vence-gp-de-monaco-2023/296289/", "keywords": ["Esporte", "F1"], "creator": ["Beatriz Fabbri"], "video_url": null, "description": "Este conteúdo foi publicado primeiro em https://www.dci.com.br/ Pela sexta prova de 2023 na Fórmula 1, confira quem ganhou o Grande Prêmio de Mônaco Este conteúdo foi publicado primeiro em https://www.dci.com.br/", "content": "Max Verstappen, da Red Bull, é quem ganhou a corrida de Fórmula 1 hoje, o Grande Prêmio de Mônaco, em 28 de maio de 2023. Correndo no circuito de rua de Monte Carlo, o piloto largou da primeira posição e de lá não saiu mais. Confira como foi o GP de Mônaco neste domingo. Fecham a parte da frente da classificação os pilotos Fernando Alonso, da Aston Martin, e Esteban Ocon, da Alpine. Verstappen é quem ganhou a corrida de Mônaco na Fórmula 1 O belíssimo Circuito de Mônaco, em Monte Carlo, recebeu a sexta prova da temporada neste domingo, e quem ganhou a corrida foi Max Verstappen. O holandês largou em primeiro lugar no grid de largada e facilmente abriu vantagem contra os oponentes, e terminou a prova com 1:25:201. O segundo lugar ficou com Fernando Alonso, e Esteban Ocon em terceiro completam o pódio no resultado da Fórmula 1 hoje no GP de Mônaco. O dia de corrida começou nublado com arquibancadas lotadas, as sacadas dos luxuosos hotéis cheias e a bela vista de Monte Carlo. Na largada, Verstappen assumiu a primeira posição, seguido por Fernando Alonso e Esteban Ocon. A classificação na parte da frente foi assim até o fim da corrida. A chuva tomou conta do GP de Mônaco a partir da volta 60. A atenção dos pilotos teve de ser redobrada na pista para evitar acidentes, batidas e toques entre os carros. Enquanto a parte da frente não teve alteração entre Verstappen, Alonso e Ocon, os pilotos de trás trataram de brigar por melhores posições. Mesmo com a chuva, o total de 78 voltas foram completas. Esta é a quarta vitória de Verstappen na temporada. RESULTADO DA FÓRMULA 1 NO GP DE MÔNACO 2023 1 Max Verstappen (Red Bull) – 1:25:201 2 Fernando Alonso (Aston Martin) – 1:25:668 3 Esteban Ocon (Alpine) – 1:24:231 4 Lewis Hamilton (Mercedes) 5 George Russell (Mercedes) 6 Charles Leclerc (Ferrari) 7 Pierre Gasly (Alpine) 8 Carlos Sainz (Ferrari) 9 Lando Norris (McLaren) 10 Oscar Piastri (McLaren) 11 Valtteri Bottas (AlfaRomeo) 12 Nyck De Vries (AlphaTauri) 13 Zhou Guanyu (Alfa Romeo) 14 Alexander Albon (Williams) 15 Yuki Tsunoda (AlphaTauri) 16 Sergio Perez (Red Bull) 17 Nico Hulkenberg (Haas) 18 Logan Sargeant (Williams) 19 Kevin Magnussen (Haas) 20 Lance Stroll (Aston Martin) Quando é a próxima corrida da Fórmula 1? A próxima corrida da Fórmula 1 é o Grande Prêmio da Espanha, no Circuito da Catalunha, marcado para 02 até 04 de junho de 2023. Esta é a sétima prova da temporada, já que Imola foi cancelada. O fim de semana começa na sexta-feira com dois treinos livres. No sábado acontece o treino classificatório que define o grid de largada, enquanto no domingo a corrida na Espanha fecha a competição. Para assistir o torcedor deve sintonizar a Band, na TV aberta, além do canal BandSports, na TV paga, assim como a plataforma BandPlay e o site da emissora. Também dá para ver no F1 TV Pro, mas é preciso ser assinante. Quanto ganha um piloto de Fórmula 1 em 2023? Classificação dos pilotos atualizada Max Verstappen lidera a classificação dos pilotos com quatro vitórias na temporada. O atual campeão mantém a vantagem diante de Sergio Perez, segundo colocado. A tabela está cada vez mais embaralhada entre os pilotos. 1 Max Verstappen – 144 pontos 2 Sergio Perez – 105 pontos 3 Fernando Alonso – 93 pontos 4 Lewis Hamilton – 69 pontos 5 George Russell – 50 pontos 6 Carlos Sainz – 48 pontos 7 Charles Leclerc – 42 pontos 8 Lance Stroll – 27 pontos 9 Esteban Ocon – 21 pontos 10 Pierre Gasly – 14 pontos 11 Lando Norris – 12 pontos 12 Nico Hulknberg – 6 pontos 13 Oscar Piastri – 5 pontos 14 Valtteri Bottas – 4 pontos 15 Zhou Guanyu – 2 pontos 16 Yuki Tsunoda – 2 pontos 17 Kevin Magnussen – 2 pontos 18 Alexander Albon – 1 ponto 19 Nyck De Vries – 0 pontos 20 Logan Sargeant – 0 pontos Leia também: Calendário das corridas da Fórmula 1 em 2023", "pubDate": "2023-05-28 15:03:25", "image_url": null, "source_id": "dci", "category": ["sports"], "country": ["brazil"], "language": "portuguese" },
      { "title": "Ucrânia afirma ter frustrado o maior ataque de drones russos em Kiev desde a invasão", "link": "https://www.em.com.br/app/noticia/internacional/2023/05/28/interna_internacional,1499700/ucrania-afirma-ter-frustrado-o-maior-ataque-de-drones-russos-em-kiev-desde.shtml", "keywords": ["Internacional"], "creator": null, "video_url": null, "description": "A Ucrânia afirmou, neste domingo (28), que conseguiu repelir durante a noite o \"maior\" ataque de drones lançado em Kiev desde o início da invasão russa, que deixou pelo menos dois mortos e três feridos na capital. \"No total, houve um número recorde de drones explosivos lançados: 54!\", disse a força aérea ucraniana no Telegram, alegando ter \"destruído 52\". Do total, cerca de 40 foram lançados em Kiev. \"Este é o maior ataque de drones contra a capital desde o início da invasão\" há 15 meses, lamentou a administração militar regional no Telegram. As autoridades militares especificaram que o ataque \"se desenvolveu em várias ondas e o alerta aéreo durou mais de 5 horas\". \"De acordo com dados preliminares, mais de 40 drones russos foram derrubados pela defesa antiaérea\" em Kiev, acrescentou.O presidente ucraniano, Volodimir Zelensky, agradeceu o trabalho. \"Toda vez que eles derrubam drones e mísseis inimigos, vidas são salvas (...). Eles são os nossos heróis\", escreveu ele no Telegram. Os ataques, no entanto, deixaram pelo menos dois mortos e três feridos na capital, segundo as autoridades. \"As pessoas estão em estado de choque. Os danos são significativos, as janelas estão quebradas, o telhado danificado\", disse Sergei Movchan, um morador de 50 anos. O prefeito de Kiev, Vitali Klitschko, descreveu o ataque como \"massivo\" e especificou que os drones foram lançados \"de várias direções ao mesmo tempo\". É o 14º ataque de drones russos em Kiev desde o início de maio, segundo as autoridades. A capital estava relativamente livre desse tipo de ofensiva desde o início do ano.- Kiev como \"símbolo\" -No bairro de Solomianski, um homem de 41 anos morreu e uma mulher de 35 anos foi hospitalizada. Outra pessoa morreu no bairro de Golosivski depois que restos de drones russos caíram \"em um prédio de sete andares\", segundo a administração regional. Uma pessoa ficou ferida. Houve também um incêndio numa zona de armazéns, que se propagou por mais de 1.000 m2 e deixou um homem ferido.\"Kiev, uma cidade de pessoas livres e corajosas, tornou-se um símbolo do espírito inabalável da Ucrânia e das ambições imperiais fracassadas do Kremlin\", elogiou o ministro da Defesa, Oleksiy Reznikov. Mikhailo Podoliak, assessor da presidência ucraniana, culpou o Irã, onde são fabricados os drones Shahed usados por Moscou.\"O Irã de hoje é um regime terrorista que constitui uma ameaça à Europa e ao Oriente Médio\", escreveu ele no Twitter, prometendo retaliação.No total, 54 drones explosivos foram lançados \"das regiões de Bryansk e Krasnodar\" na Rússia, disse a Força Aérea da Ucrânia, comemorando ter interceptado 52 deles.Segundo essa fonte, a Rússia mirou em \"instalações militares e infraestruturas estratégicas nas regiões centrais do país, em particular na região de Kiev\". O ministro das Relações Exteriores da Rússia, Serguei Lavrov, afirmou neste domingo que as potências ocidentais estavam brincando \"com fogo\" após a recente autorização dos Estados Unidos para futuras entregas de caças F-16 à Ucrânia. \"É uma escalada inaceitável\" promovida por \"Washington, Londres e os seus satélites dentro da UE (União Europeia)\" que querem \"enfraquecer a Rússia\", destacou.- Guerra de drones -O uso desses pequenos dispositivos pilotados remotamente na zona de conflito é cada vez mais comum no front ucraniano. Nas últimas semanas, o território russo também tem sido alvo de ataques deste tipo, além das sabotagens, em um momento em que Kiev afirma estar concluindo os preparativos para lançar uma contraofensiva e recuperar todos os territórios ocupados por Moscou, incluindo a península da Crimeia anexada pela Rússia em 2014. O maior ataque ocorreu em 3 de maio, quando dois drones foram derrubados sobre o Kremlin em Moscou, residência oficial e local de trabalho ocasional do presidente Vladimir Putin. A Rússia acusou a Ucrânia, que negou envolvimento.Geralmente são as regiões fronteiriças à Ucrânia que estão sendo atacadas, onde o exército russo abastece parte de suas tropas.Mas esses drones também podem atingir centenas de quilômetros da fronteira. No sábado, dois drones danificaram um prédio de onde é administrado um oleoduto na região de Pskov, no oeste da Rússia, segundo o governador Mikhail Vedernikov. Baza, um veículo de comunicação russo com fontes nos serviços secretos, também relatou um ataque de drone em outra estação de petróleo na região de Tver, a noroeste de Moscou.", "content": "A Ucrânia afirmou, neste domingo (28), que conseguiu repelir durante a noite o \"maior\" ataque de drones lançado em Kiev desde o início da invasão russa, que deixou pelo menos dois mortos e três feridos na capital. \"No total, houve um número recorde de drones explosivos lançados: 54!\", disse a força aérea ucraniana no Telegram, alegando ter \"destruído 52\". Do total, cerca de 40 foram lançados em Kiev. \"Este é o maior ataque de drones contra a capital desde o início da invasão\" há 15 meses, lamentou a administração militar regional no Telegram. As autoridades militares especificaram que o ataque \"se desenvolveu em várias ondas e o alerta aéreo durou mais de 5 horas\". \"De acordo com dados preliminares, mais de 40 drones russos foram derrubados pela defesa antiaérea\" em Kiev, acrescentou. O presidente ucraniano, Volodimir Zelensky, agradeceu o trabalho. \"Toda vez que eles derrubam drones e mísseis inimigos, vidas são salvas (...). Eles são os nossos heróis\", escreveu ele no Telegram. Os ataques, no entanto, deixaram pelo menos dois mortos e três feridos na capital, segundo as autoridades. \"As pessoas estão em estado de choque. Os danos são significativos, as janelas estão quebradas, o telhado danificado\", disse Sergei Movchan, um morador de 50 anos. O prefeito de Kiev, Vitali Klitschko, descreveu o ataque como \"massivo\" e especificou que os drones foram lançados \"de várias direções ao mesmo tempo\". É o 14º ataque de drones russos em Kiev desde o início de maio, segundo as autoridades. A capital estava relativamente livre desse tipo de ofensiva desde o início do ano. - Kiev como \"símbolo\" - No bairro de Solomianski, um homem de 41 anos morreu e uma mulher de 35 anos foi hospitalizada. Outra pessoa morreu no bairro de Golosivski depois que restos de drones russos caíram \"em um prédio de sete andares\", segundo a administração regional. Uma pessoa ficou ferida. Houve também um incêndio numa zona de armazéns, que se propagou por mais de 1.000 m2 e deixou um homem ferido. \"Kiev, uma cidade de pessoas livres e corajosas, tornou-se um símbolo do espírito inabalável da Ucrânia e das ambições imperiais fracassadas do Kremlin\", elogiou o ministro da Defesa, Oleksiy Reznikov. Mikhailo Podoliak, assessor da presidência ucraniana, culpou o Irã, onde são fabricados os drones Shahed usados por Moscou. \"O Irã de hoje é um regime terrorista que constitui uma ameaça à Europa e ao Oriente Médio\", escreveu ele no Twitter, prometendo retaliação. No total, 54 drones explosivos foram lançados \"das regiões de Bryansk e Krasnodar\" na Rússia, disse a Força Aérea da Ucrânia, comemorando ter interceptado 52 deles. Segundo essa fonte, a Rússia mirou em \"instalações militares e infraestruturas estratégicas nas regiões centrais do país, em particular na região de Kiev\". O ministro das Relações Exteriores da Rússia, Serguei Lavrov, afirmou neste domingo que as potências ocidentais estavam brincando \"com fogo\" após a recente autorização dos Estados Unidos para futuras entregas de caças F-16 à Ucrânia. \"É uma escalada inaceitável\" promovida por \"Washington, Londres e os seus satélites dentro da UE (União Europeia)\" que querem \"enfraquecer a Rússia\", destacou. - Guerra de drones - O uso desses pequenos dispositivos pilotados remotamente na zona de conflito é cada vez mais comum no front ucraniano. Nas últimas semanas, o território russo também tem sido alvo de ataques deste tipo, além das sabotagens, em um momento em que Kiev afirma estar concluindo os preparativos para lançar uma contraofensiva e recuperar todos os territórios ocupados por Moscou, incluindo a península da Crimeia anexada pela Rússia em 2014. O maior ataque ocorreu em 3 de maio, quando dois drones foram derrubados sobre o Kremlin em Moscou, residência oficial e local de trabalho ocasional do presidente Vladimir Putin. A Rússia acusou a Ucrânia, que negou envolvimento. Geralmente são as regiões fronteiriças à Ucrânia que estão sendo atacadas, onde o exército russo abastece parte de suas tropas. Mas esses drones também podem atingir centenas de quilômetros da fronteira. No sábado, dois drones danificaram um prédio de onde é administrado um oleoduto na região de Pskov, no oeste da Rússia, segundo o governador Mikhail Vedernikov. Baza, um veículo de comunicação russo com fontes nos serviços secretos, também relatou um ataque de drone em outra estação de petróleo na região de Tver, a noroeste de Moscou.", "pubDate": "2023-05-28 14:32:00", "image_url": null, "source_id": "estadominasbz", "category": ["world"], "country": ["brazil"], "language": "portuguese" },
      { "title": "'Abusamos do plástico porque é muito barato', alerta diretora da ONU-Meio Ambiente", "link": "https://www.em.com.br/app/noticia/internacional/2023/05/28/interna_internacional,1499696/abusamos-do-plastico-porque-e-muito-barato-alerta-diretora-da-onu-meio-a.shtml", "keywords": ["Internacional"], "creator": null, "video_url": null, "description": "A humanidade abusa do plástico porque é muito barato, mas um tratado internacional ambicioso reduziria enormemente nossa dependência de plásticos descartáveis, diz Inger Andersen, diretora executiva do Programa das Nações Unidas para o Meio Ambiente, em entrevista à AFP. Inger Andersen pede aos ativistas que \"mantenham a pressão\" e às indústrias que se unam ao esforço.Pergunta: Quais são os principais obstáculos para um tratado ambicioso?Resposta: Hoje, o polímero virgem bruto é mais barato do que o polímero reciclado. O que nos permitirá passar do atual sistema linear (\"tomamos, produzimos, jogamos fora\") para um sistema circular? Não vai ser fácil. Atualmente é gratuito jogar fora, mas a externalidade do custo ambiental e para a saúde humana é enorme. E isso não tem impostos. Acredito firmemente na reformulação dos produtos. Hoje queremos que muitos de nossos produtos sejam líquidos: nosso xampu, nosso creme dental, nosso detergente. Porque nossa espécie ama a vida prática. Mas há muitas coisas que podemos \"desliquefazer\" e transportar de forma sólida em caixas.P: A reciclagem - 9% atualmente - é uma solução credível?R: A reciclagem em si não vai resolver o problema. Mas a reciclagem é uma das muitas chaves para progredirmos. Devemos estar cientes de que hoje jogamos fora o material plástico. Não tem valor algum. Quando eu era pequena na Dinamarca e tinha pouca mesada, juntava garrafas com meus irmãos, porque naquela época eles nos davam 50 centavos. Era muito pouco, mas tinha valor. Imagine o dia em que essas coisas terão valor: vamos tratá-las de maneira muito diferente.P: Quais outras mudanças de mentalidade são necessárias?R: Estar consciente é a primeira etapa. Sem colocar a responsabilidade no consumidor, já que no final são empresas e governos que devem assumi-la. A segunda etapa é a seguinte: temos poder de escolha sobre muitas coisas. Por exemplo, numa festa: precisamos de copos descartáveis ou podemos lavá-los depois? Preciso mesmo deste saco plástico para carregar cinco tomates? É um polímero pesado, que vai passar cem ou até mil anos no aterro sanitário. E se você vir bananas em um saco plástico ao lado de algumas sem... você sabe, a Terra as fez e já as embalou. Mas as mudanças sistêmicas mais importantes virão com acordos como o tratado que estamos prestes a negociar.P: A poluição plástica foi ignorada por muito tempo nas negociações internacionais. Como se abriu o caminho para um projeto de tratado como este?R: A demanda popular se tornou muito forte e, na maioria dos países, vem tanto da esquerda quanto da direita. Para mim, é o resultado do ativismo de uma grande variedade de pessoas. E peço a todos esses ativistas que mantenham a pressão para que o futuro tratado contenha elementos obrigatórios (...) ambiciosos.P: Mas os ativistas estão preocupados com a influência da indústria?R: Registramos um total de 2.800 participantes para essas negociações em Paris, sendo 908 governamentais, 1.712 membros de ONGs e dez associações industriais.Se voltarmos à camada de ozônio, que é provavelmente o nosso tratado de maior sucesso, não conseguiríamos encontrar uma solução sem a presença da indústria na mesa de negociações. Acho que assim que a legislação for aprovada, as empresas vão seguir. Já que estão lá, é melhor participarem e fazerem parte da mudança, porque o tratado está chegando e será ambicioso. É o que o mundo quer.P: A humanidade será capaz de prescindir do plástico algum dia?R: O plástico está por toda parte. Sempre precisaremos do interruptor elétrico, do volante etc. Mas devemos refletir sobre o problema do uso único. Abusamos do plástico porque é muito barato, mas há consequências para o meio ambiente, oceanos, flora e fauna. Estamos cada vez mais conscientes do impacto na nossa própria saúde.", "content": "A humanidade abusa do plástico porque é muito barato, mas um tratado internacional ambicioso reduziria enormemente nossa dependência de plásticos descartáveis, diz Inger Andersen, diretora executiva do Programa das Nações Unidas para o Meio Ambiente, em entrevista à AFP. Inger Andersen pede aos ativistas que \"mantenham a pressão\" e às indústrias que se unam ao esforço. Pergunta: Quais são os principais obstáculos para um tratado ambicioso? Resposta: Hoje, o polímero virgem bruto é mais barato do que o polímero reciclado. O que nos permitirá passar do atual sistema linear (\"tomamos, produzimos, jogamos fora\") para um sistema circular? Não vai ser fácil. Atualmente é gratuito jogar fora, mas a externalidade do custo ambiental e para a saúde humana é enorme. E isso não tem impostos. Acredito firmemente na reformulação dos produtos. Hoje queremos que muitos de nossos produtos sejam líquidos: nosso xampu, nosso creme dental, nosso detergente. Porque nossa espécie ama a vida prática. Mas há muitas coisas que podemos \"desliquefazer\" e transportar de forma sólida em caixas. P: A reciclagem - 9% atualmente - é uma solução credível? R: A reciclagem em si não vai resolver o problema. Mas a reciclagem é uma das muitas chaves para progredirmos. Devemos estar cientes de que hoje jogamos fora o material plástico. Não tem valor algum. Quando eu era pequena na Dinamarca e tinha pouca mesada, juntava garrafas com meus irmãos, porque naquela época eles nos davam 50 centavos. Era muito pouco, mas tinha valor. Imagine o dia em que essas coisas terão valor: vamos tratá-las de maneira muito diferente. P: Quais outras mudanças de mentalidade são necessárias? R: Estar consciente é a primeira etapa. Sem colocar a responsabilidade no consumidor, já que no final são empresas e governos que devem assumi-la. A segunda etapa é a seguinte: temos poder de escolha sobre muitas coisas. Por exemplo, numa festa: precisamos de copos descartáveis ou podemos lavá-los depois? Preciso mesmo deste saco plástico para carregar cinco tomates? É um polímero pesado, que vai passar cem ou até mil anos no aterro sanitário. E se você vir bananas em um saco plástico ao lado de algumas sem... você sabe, a Terra as fez e já as embalou. Mas as mudanças sistêmicas mais importantes virão com acordos como o tratado que estamos prestes a negociar. P: A poluição plástica foi ignorada por muito tempo nas negociações internacionais. Como se abriu o caminho para um projeto de tratado como este? R: A demanda popular se tornou muito forte e, na maioria dos países, vem tanto da esquerda quanto da direita. Para mim, é o resultado do ativismo de uma grande variedade de pessoas. E peço a todos esses ativistas que mantenham a pressão para que o futuro tratado contenha elementos obrigatórios (...) ambiciosos. P: Mas os ativistas estão preocupados com a influência da indústria? R: Registramos um total de 2.800 participantes para essas negociações em Paris, sendo 908 governamentais, 1.712 membros de ONGs e dez associações industriais. Se voltarmos à camada de ozônio, que é provavelmente o nosso tratado de maior sucesso, não conseguiríamos encontrar uma solução sem a presença da indústria na mesa de negociações. Acho que assim que a legislação for aprovada, as empresas vão seguir. Já que estão lá, é melhor participarem e fazerem parte da mudança, porque o tratado está chegando e será ambicioso. É o que o mundo quer. P: A humanidade será capaz de prescindir do plástico algum dia? R: O plástico está por toda parte. Sempre precisaremos do interruptor elétrico, do volante etc. Mas devemos refletir sobre o problema do uso único. Abusamos do plástico porque é muito barato, mas há consequências para o meio ambiente, oceanos, flora e fauna. Estamos cada vez mais conscientes do impacto na nossa própria saúde.", "pubDate": "2023-05-28 14:22:00", "image_url": null, "source_id": "estadominasbz", "category": ["world"], "country": ["brazil"], "language": "portuguese" },
      { "title": "Prefeito tenta \"permutar professor\" com outra cidade, mas MP quer impedir lei", "link": "https://www.campograndenews.com.br/politica/prefeito-tenta-permutar-professor-com-outra-cidade-mas-mp-quer-impedir-lei", "keywords": null, "creator": null, "video_url": null, "description": "A Promotoria de Justiça de Nova Andradina recomendou ao prefeito da cidade, que fica a 300 Km de Campo Grande, que não sancione lei que autoriza permuta de professores do município com prefeitura e governo de Mato Grosso do Sul. O promotor Paulo Leonardo de Faria afirma que há “pessoalidade” na demanda. A lei em questão foi aprovada em 24 de março na Câmara de Vereadores, mas ainda não sancionada. Assim, o promotor, em recomendação, orienta ao prefeito José Gilberto Garcia que “se abstenha de sancionar o Projeto de Lei Complementar nº 3, de 24 de março de 2023, de modo a preservar a segurança jurídica e a moralidade administrativa”. Em 2019, o mesmo tipo de procedimento foi objeto de outra recomendação da promotoria, mas no caso, ao invés de lei, o município usava convênios de cooperação técnica para realizar a permuta de servidores. Para o promotor, a prática é uma “afronta à moralidade administrativa, mormente pela aparente pessoalidade”. A peça foi aprovada pelos vereadores de Nova Andradina mesmo havendo parecer jurídico da assessoria da Casa e das Comissões de Justiça e Redação relatando que a matéria era inconstitucional. Caso o município não acolha a recomendação, a promotoria poderá acionar a Justiça. O prefeito disse que um professor concursado na cidade de Dourados tem interesse na permuta e já teria conseguido a troca junto à rede estadual de Mato Grosso Sul para dar aulas em Batayporã. Entretanto, ele também é efetivo da Prefeitura de Dourados e somente a lei questionada pelo MP daria condições de haver também permuta entre as redes municipais. “Estamos analisando. Se houver arcabouço jurídico, vamos sancionar. Se não houver, não vamos. Normalmente acatamos as recomendações do Ministério Público”, disse. Pela publicação, há 10 dias para que o município apresente resposta ao pedido ministerial. O procedimento está fechado para consulta online.", "content": "Política Medida de Nova Andradina que permite permuta de professores; prefeito analisa pedido para veto A Promotoria de Justiça de Nova Andradina recomendou ao prefeito da cidade, que fica a 300 Km de Campo Grande, que não sancione lei que autoriza permuta de professores do município com prefeitura e governo de Mato Grosso do Sul. O promotor Paulo Leonardo de Faria afirma que há “pessoalidade” na demanda. A lei em questão foi aprovada em 24 de março na Câmara de Vereadores, mas ainda não sancionada. Assim, o promotor, em recomendação, orienta ao prefeito José Gilberto Garcia que “se abstenha de sancionar o Projeto de Lei Complementar nº 3, de 24 de março de 2023, de modo a preservar a segurança jurídica e a moralidade administrativa”. Em 2019, o mesmo tipo de procedimento foi objeto de outra recomendação da promotoria, mas no caso, ao invés de lei, o município usava convênios de cooperação técnica para realizar a permuta de servidores. Para o promotor, a prática é uma “afronta à moralidade administrativa, mormente pela aparente pessoalidade”. A peça foi aprovada pelos vereadores de Nova Andradina mesmo havendo parecer jurídico da assessoria da Casa e das Comissões de Justiça e Redação relatando que a matéria era inconstitucional. Caso o município não acolha a recomendação, a promotoria poderá acionar a Justiça. O prefeito disse que um professor concursado na cidade de Dourados tem interesse na permuta e já teria conseguido a troca junto à rede estadual de Mato Grosso Sul para dar aulas em Batayporã. Entretanto, ele também é efetivo da Prefeitura de Dourados e somente a lei questionada pelo MP daria condições de haver também permuta entre as redes municipais. “Estamos analisando. Se houver arcabouço jurídico, vamos sancionar. Se não houver, não vamos. Normalmente acatamos as recomendações do Ministério Público”, disse. Pela publicação, há 10 dias para que o município apresente resposta ao pedido ministerial. O procedimento está fechado para consulta online.", "pubDate": "2023-05-28 14:05:00", "image_url": null, "source_id": "campograndenews", "category": ["top"], "country": ["brazil"], "language": "portuguese" },
      { "title": "Alta participação nas eleições municipais e regionais na Espanha", "link": "https://www.em.com.br/app/noticia/internacional/2023/05/28/interna_internacional,1499693/alta-participacao-nas-eleicoes-municipais-e-regionais-na-espanha.shtml", "keywords": ["Internacional"], "creator": null, "video_url": null, "description": "Os espanhóis votam neste domingo (28) nas eleições municipais e regionais que servirão de prelúdio para as legislativas nacionais em seis meses, nas quais, segundo pesquisas, o socialista Pedro Sánchez poderá ser derrotado pela direita. Às 12h00 GMT (09h00 no horário de Brasília), a participação nas eleições municipais era de 36,69%, face a 35,10% em 2019, informou Isabel Goicoechea, subsecretária de Estado do Ministério do Interior. Além de todos os municípios do país, os espanhóis vão renovar os parlamentos e, portanto, os governos, de 12 das 17 regiões do país. A participação também cresceu na maioria dessas regiões em relação às eleições anteriores, segundo dados oficiais, apesar de ter chovido em grande parte do país.As votações serão encerradas às 18h00 GMT (15h00 em Brasília) e os primeiros resultados são esperados para as 20h00 GMT (17h00 em Brasília). O presidente do governo, Pedro Sánchez, votou em Madri no início da manhã e fez um apelo para que os cidadãos compareçam em massa às urnas.\"Quanto mais pessoas votarem hoje, melhor para as nossas instituições\", disse aos jornalistas, acrescentando ter a certeza de que \"a maioria dos cidadãos (...) votará positivo\".Uma mensagem semelhante à do seu principal rival, o líder do Partido Popular (PP, direita), Alberto Núñez Feijóo, que votou poucas horas depois também na capital espanhola. \"Anos complexos nos esperam (...) por isso, quanto mais governos fortes tivermos, mais forte será nossa democracia e mais rápido sairemos dos problemas\", disse Núñez Feijóo.- \"Teste importante\" -Essas eleições \"são um teste importante, porque é a única forma que temos de expressar nossa opinião em todos esses anos de governo\", disse à AFPTV María Alonso, médica de 61 anos que votou em Madri. Embora o nome de Pedro Sánchez não esteja em nenhuma cédula, o que está em jogo é muito importante para seu futuro político e de seu governo de esquerda.Presidente do governo desde 2018, Pedro Sánchez chega a este teste eleitoral com desvantagens: o desgaste do poder, a inflação elevada - embora inferior à da maioria dos países europeus - e a consequente queda do poder de compra. A imagem do governo sofreu com os repetidos confrontos entre os sócios da coalizão: os socialistas e a esquerda radical do Podemos.Neste contexto, Núñez Feijóo procurou apresentar as eleições deste domingo como um plebiscito sobre Sánchez, a quem acusa de ser subordinado tanto à esquerda radical quanto aos partidos pró-independência do País Basco e da Catalunha, que costumam apoiar o governo para aprovar a sua reformas. Sánchez fez campanha exaltando seu governo, especialmente em questões econômicas e na luta contra a seca e gestão da água, uma questão cada vez mais central na Espanha, país europeu na linha da frente contra a mudança clima.Das 12 regiões que renovarão seu parlamento, 10 são lideradas pelos socialistas, seja diretamente ou em coalizão. O número de regiões que o PP conseguir arrancar dos socialistas vai determinar se Núñez Feijóo pode afirmar que venceu este primeiro turno das eleições e se sua vitória no final do ano é inevitável.", "content": "Os espanhóis votam neste domingo (28) nas eleições municipais e regionais que servirão de prelúdio para as legislativas nacionais em seis meses, nas quais, segundo pesquisas, o socialista Pedro Sánchez poderá ser derrotado pela direita. Às 12h00 GMT (09h00 no horário de Brasília), a participação nas eleições municipais era de 36,69%, face a 35,10% em 2019, informou Isabel Goicoechea, subsecretária de Estado do Ministério do Interior. Além de todos os municípios do país, os espanhóis vão renovar os parlamentos e, portanto, os governos, de 12 das 17 regiões do país. A participação também cresceu na maioria dessas regiões em relação às eleições anteriores, segundo dados oficiais, apesar de ter chovido em grande parte do país. As votações serão encerradas às 18h00 GMT (15h00 em Brasília) e os primeiros resultados são esperados para as 20h00 GMT (17h00 em Brasília). O presidente do governo, Pedro Sánchez, votou em Madri no início da manhã e fez um apelo para que os cidadãos compareçam em massa às urnas. \"Quanto mais pessoas votarem hoje, melhor para as nossas instituições\", disse aos jornalistas, acrescentando ter a certeza de que \"a maioria dos cidadãos (...) votará positivo\". Uma mensagem semelhante à do seu principal rival, o líder do Partido Popular (PP, direita), Alberto Núñez Feijóo, que votou poucas horas depois também na capital espanhola. \"Anos complexos nos esperam (...) por isso, quanto mais governos fortes tivermos, mais forte será nossa democracia e mais rápido sairemos dos problemas\", disse Núñez Feijóo. - \"Teste importante\" - Essas eleições \"são um teste importante, porque é a única forma que temos de expressar nossa opinião em todos esses anos de governo\", disse à AFPTV María Alonso, médica de 61 anos que votou em Madri. Embora o nome de Pedro Sánchez não esteja em nenhuma cédula, o que está em jogo é muito importante para seu futuro político e de seu governo de esquerda. Presidente do governo desde 2018, Pedro Sánchez chega a este teste eleitoral com desvantagens: o desgaste do poder, a inflação elevada - embora inferior à da maioria dos países europeus - e a consequente queda do poder de compra. A imagem do governo sofreu com os repetidos confrontos entre os sócios da coalizão: os socialistas e a esquerda radical do Podemos. Neste contexto, Núñez Feijóo procurou apresentar as eleições deste domingo como um plebiscito sobre Sánchez, a quem acusa de ser subordinado tanto à esquerda radical quanto aos partidos pró-independência do País Basco e da Catalunha, que costumam apoiar o governo para aprovar a sua reformas. Sánchez fez campanha exaltando seu governo, especialmente em questões econômicas e na luta contra a seca e gestão da água, uma questão cada vez mais central na Espanha, país europeu na linha da frente contra a mudança clima. Das 12 regiões que renovarão seu parlamento, 10 são lideradas pelos socialistas, seja diretamente ou em coalizão. O número de regiões que o PP conseguir arrancar dos socialistas vai determinar se Núñez Feijóo pode afirmar que venceu este primeiro turno das eleições e se sua vitória no final do ano é inevitável.", "pubDate": "2023-05-28 14:00:00", "image_url": null, "source_id": "estadominasbz", "category": ["world"], "country": ["brazil"], "language": "portuguese" }
    ], "nextPage": "16852800605fc2d89187955aef3874eabb3e7c5b0b"
  }
}

// function fetchNew(url, n) {
//   requestAPI(url)
//     .then(response => response.json())
//     .then(data => {
//       data['results'] = data.results.slice(0, n)
//       console.log(JSON.stringify(data))
//     })
// }

function clearNews() {
  const fetched_news = document.querySelectorAll(".fetched-news");
  fetched_news.forEach(node => {
    node.remove();
  });
}

function changeCategory(category) {
  if (setCategoryQuery(category)) {
    getSearchQuery();
    reloadNews();
  }
}
function changeCountry(country) {
  if (setCountryQuery(country)) {
    getSearchQuery();
    reloadNews();
  }
}

function generateOptionButton(modelBtn, option, listener, clone) {
  const categoryBtn = clone ? modelBtn.cloneNode(true) : modelBtn;
  categoryBtn.setAttribute("data-option", option);

  categoryBtn.addEventListener('click', () => listener(categoryBtn.getAttribute("data-option")));

  return categoryBtn;
}

function getSearchQuery() {
  const searchInput = document.querySelector("#searchInput");
  status_data.request.query.q = searchInput.value;
  return true;
}

function displayNews(news, quantity) {
  const articles = news.results;
  console.log(news.results);
  const newsContainer = document.querySelector(".news-container");
  const newsTemplate = newsContainer.querySelector(".news-template");
  const resultText = newsContainer.querySelector(".result-text");

  if (status_data.results.query.q != "") {
    resultText.textContent = `Encontradas ${status_data.results.news.totalResults} notícias`;
    resultText.style.display = "block";
  }
  else {
    resultText.style.display = "none";
  }


  articles.forEach(article => {
    const articleElement = newsTemplate.cloneNode(true);
    articleElement.classList.remove("template");
    articleElement.classList.add("fetched-news");
    const titleElement = articleElement.querySelector(".news-title").firstElementChild;
    titleElement.setAttribute("href", article.link);
    titleElement.innerText = article.title;
    const descriptionElement = articleElement.querySelector(".news-description");
    descriptionElement.textContent = article.description;
    const imageElement = articleElement.querySelector(".news-image");
    if (article.image_url == null) {
      imageElement.style.display = "none";
    }
    else {
      imageElement.src = article.image_url;
    }
    const categoryElement = articleElement.querySelector("button[data-option]");

    if (status_data.results.query.category != "") {
      categoryElement.style.display = "none";
    }
    else {
      const cat = getActualCategory(article.category);
      const categoryName = sources.categories[cat];
      categoryElement.firstElementChild.innerText = categoryName;
      generateOptionButton(categoryElement, cat, changeCategory, false);
    }

    // const descriptionCollapse = new bootstrap.Collapse(descriptionElement)._config;
    const showMoreElement = articleElement.querySelector(".show-more");
    showMoreElement.addEventListener('click', () => {
      if (descriptionElement.classList.contains("expanded")) {
        descriptionElement.classList.remove("expanded");
        showMoreElement.innerText = "Ver mais";
      }
      else {
        descriptionElement.classList.add("expanded");
        showMoreElement.innerText = "Ver menos";
      }
    });


    newsContainer.appendChild(articleElement);


    if (descriptionElement.clientHeight < descriptionElement.scrollHeight) {
      showMoreElement.style.display = "inline";
    }

  });
}

function reloadNews() {
  clearNews();
  status_data.request.fetch_url = applyQuery(newsdata_url);
  fetchAndDisplayNews('', 10);
}


async function fetchAndDisplayNews(page, quantity) {
  if (page == null) {
    return;
  }
  const news = await requestAPI(status_data.request.fetch_url, page);
  status_data.results.news = news;
  status_data.results.query = Object.assign({}, status_data.request.query);

  displayNews(news, quantity);
}


{
  const categoryMenuModel = document.querySelector(".category-menu button[data-option]");
  Object.keys(sources.categories).forEach(category => {
    const button = generateOptionButton(categoryMenuModel, category, changeCategory, true);
    button.classList.remove("template");
    button.innerText = sources.categories[category];
    categoryMenuModel.parentNode.appendChild(button);
  });
}
{
  const countryMenuModel = document.querySelector(".country-menu button[data-option]");
  Object.keys(sources.countries).forEach(country => {
    const button = generateOptionButton(countryMenuModel, country, changeCountry, true);
    button.classList.remove("template");
    button.innerText = sources.countries[country];
    countryMenuModel.parentNode.appendChild(button);
  });
}

function getActualCategory(category) {
  let firstCat = '';
  category.toString().split(',').forEach(cat => {
    if (cat in sources.categories) {
      firstCat = cat;
      return;
    }
  })
  return firstCat;
}


function setCategoryQuery(category) {
  category = category in sources.categories ? category : '';
  if (status_data.request.query.category != category) {
    status_data.request.query.category = category;
    const dropdown = document.querySelector("#categoryDropdown");
    dropdown.textContent = sources.categories[category];
    return true;
  }
  return false;
}

function setCountryQuery(country) {
  country = country in sources.countries ? country : '';
  if (status_data.request.query.country != country) {
    status_data.request.query.country = country;
    const dropdown = document.querySelector("#countryDropdown");
    dropdown.textContent = sources.countries[country];
    return true;
  }
  return false;
}


reloadNews();


