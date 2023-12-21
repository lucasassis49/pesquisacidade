import './App.css';
// CitySearch.js
import React, { useState } from 'react';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const citiesInFilial01 = ['Ipatinga','Açucena','Aimorés','Alpercata','Antonio Dias','Baixo Guandu', 'Bela Vista de Minas', 'Belo Oriente','Bugre','Capitão Andrade','Conselheiro Pena','Coroaci','Coronel Fabriciano','Dionísio','Dom Cavati','Dom Silvério','Engenheiro Caldas','Fernandes Tourinho','Frei Inocêncio','Galiléia',' Governador Valadares','Iapu','Ipaba','Itanhomi','Itueta','Jaguaraçu','João Monlevade','Marilac','Marliéria','Mathias Lobato','Mesquita','Naque','Nova Era','Periquito','Resplendor','Rio Doce','Rio Piracicaba','Santa Rita do Itueto','Santana do Paraíso','São Domingo do Prata','São Geraldo da Piedade','São João do Oriente','São José do Goiabal','Sem-Peixe','Sobrália','Tarumirim','Timóteo','Tumiritinga'];
  const bh = ['Belo Horizonte','Barão de Cocais','Betim','Bom Jesus do Amparo','Brumadinho','Caeté','Confins','Contagem','Esmeralda','Florestal','Ibirité','Igarapé','Itabirito','Jaboticatubas','Juatuba','Lagoa Santa','Mário Campos','Mateus Leme','Nova Lima','Nova União','Pará de Minas','Pedro Leopoldo','Raposos','Ribeirão das Neves','Rio Acima','Sabará','Santa Bárbara','Santa Luzia','São Joaquim de Bicas','São José da Lapa','Sarzedo','Taquaraçu de Minas','Vespasiano'];
  const caratinga = ['Caratinga','Alvarenga','Bom Jesus do Galho','Conceição de Ipanema','Córrego Novo','Entre Folhas','Imbé de Minas','Inhapim','Ipanema','Mutum','Piedade de Caratinga','Pingo-dagua','Pocrane','Raul Soares','Santa Bárbara do Leste','Santa Rita de Minas','São Domingos das Dores','São Pedro dos Ferros','São Sebastião do Anta','Taparuba','Ubaporanga','Vargem Alegre','Vermelho Novo'];
  const manhuacu = ['Manhuaçu', 'Abre Campo', 'Alegre','Brejetuba', 'Caparaó, Caputira', 'Carangola', 'Conceição do Castelo', 'Divino', 'Durandé', 'Espera Feliz', 'Guaçuí', 'Ibatiba', 'Irupi', 'Iuná', 'Jerônimo Monteiro', 'Lajinha', 'Luisburgo', 'Manhumirim', 'Matipó', 'Muniz Freire', 'Muriaé, Orizânia', 'Pedra Bonita', 'Ponte Nova', 'Rio Casca', 'Reduto', 'Santa Margarida', 'São Francisco do Glória', 'São Jose do Mantimento', 'Simonésia', 'Visoça', 'Visconde do Rio Branco'];
  const guanhaes = ['Guanhães','Alvorada de Minas','Braúnas','Cantagalo','Carmésia','Divinolândia de Minas','Dom Joaquim','Dores de Guanhães','Ferros','Gonzaga','Joanésia','Itabira','Materlândia','Passabém','Paulista','Peçanha','Sabinopolis','Santa Efigênia de Minas','Santa Maria de Itabira','São João Evangelista','São Sebastião do Rio Preto','Sardoá','Serra Azul de Minas','Serro','Virginópolis'];
  const vilavelha = ['Vila Velha','Alfredo Chaves','Anchieta','Aracruz','Cachoeiro de Itapemirim','Cariacica','Castelo','Domingos Martins','Fundão','Guarapari','Itaguaçu','Itapemirim','João Neiva','Marataízes','Marechal Floriano','Piúma','Presidente Kennedy','Rio Novo do Sul','Santa Leopoldina','Santa Teresa','São Francisco de Itabapoana','São Roque do Canaã','Serra','Vargem Alta','Viana','Vitória'];
  const to = ['Teófilo Otoni','Água Boa','Águas Formosas','Alcobaça','Almenara','Angelândia','Araçuaí','Aricanduva','Ataleia','Berilo','Bertópolis','Campanário','Capelinha','Caraí','Caravelas','Carlos Chagas','Catuji','Chapada do Norte','Comercinho','Coronel Murta','Crisólita','Cristália','Felisburgo','Franciscópolis','Frei Faspar','Fronteira dos Vales','Fruta de Leite','Grão Mogol','Ibirapuã','Itaipé','Itamaraju','Itamarandiba','Itambacuri','Itanhém','Itaobim','Itinga','Janaúba','Jenipapo de Minas','Jequitinhonha','Joaíma','Josenópolis','Jucuruçu','Ladainha','Lajedão','Leme do Prado','Machacalis','Malacacheta','Medeiros Neto','Medina','Minas Novas','Montanha','Monte Formoso','Mucuri','Nanuque','Nova Porteirinha','Nova Viçosa','Novo Cruzeiro','Novo Oriente de Minas','Novorizonte','Ouro Verde de Minas','Padre Carvalho','Padre Paraíso','Palmópolis','Pavão','Ponto Belo','Pontos dos Volantes','Porteirinha','Poté','Prado','Riacho dos Machados','Rio do Prado','Rubelita','Rubim','Salinas','Santa Cruz de Salinas','Santa Helena de Minas','Santa Maria do Suaçuí','São Sebastião do Maranhão','Serra dos Aimorés','Setubinha','Teixeira de Freitas','Turmalina','Vereda','Veredinha','Virgem da Lapa']

  const handleSearch = () => {
    if (citiesInFilial01.includes(city)) {
      setMessage(`A cidade de ${city} pertence à Regional Ipatinga MG.`);
    } else if (bh.includes(city)) {
      setMessage(`A cidade de ${city} pertence à filial 04 ( Belo Horizonte ).`);
    } else if (caratinga.includes(city)) {
      setMessage(`A cidade de ${city} pertence à filial 05 ( Caratinga ).`);
    } else if (manhuacu.includes(city)) {
      setMessage(`A cidade de ${city} pertence à credenciada ( Manhuaçu ).`);
    } else if (guanhaes.includes(city)) {
      setMessage(`A cidade de ${city} pertence à credenciada( Guanhães ).`);
    } else if (vilavelha.includes(city)) {
      setMessage(`A cidade de ${city} pertence à filial 08 ( Vila Velha ).`);
    } else if (to.includes(city)) {
      setMessage(`A cidade de ${city} pertence à filial 07 ( Teófilo Otoni ).`);
    }else{
      setMessage(`Digite a cidade corretamente.`)
    }
    
    // Limpa o campo de pesquisa após a busca
    setCity('');
  };

  return (
    <div className='content'>
      <div className='center'>
      <h2>Pesquisar Cidade</h2>
      <input 
        type="text" 
        placeholder="Digite o nome da cidade" 
        value={city} 
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <p></p>
      <h2>{message}</h2>
      </div>
    </div>
  );
};

export default CitySearch;
