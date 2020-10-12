import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu';
import TopMenu from '../../Components/TopMenu';
import { Container, Content } from '../Dashboard/styles';
import { Text, Volta } from './styles';


const Trilha: React.FC = () => {
  return (
    <Container>
      <Menu menu3="active" />
      <Content>
        <TopMenu title="Trilhas de conhecimento"/>
        <Text>
          <h2>Planejamento Financeiro</h2>
          <h3>Para quem quer abrir um negócio</h3>
          <p>
          Quem não sonha em deixar de ser empregado e abrir o próprio negócio? Para evitar operações muito arriscadas e aumentar as chances do seu negócio dar certo, você vai precisar de muita criatividade, determinação e, acima de tudo, planejamento.
          </p>
          <p>
          O primeiro passo é descobrir a sua vocação, afinal, não adianta abrir um pet shop se você não gosta de animais. Depois de decidir que tipo de negócio quer abrir, siga as dicas abaixo e monte seu planejamento financeiro, também chamado de plano de negócios:
          </p>
          <ul>
            <li>Busque cursos de capacitação e orientações sobre como abrir e gerenciar um negócio;</li>
            <li>Estude tudo a respeito do negócio que deseja abrir: pesquise os custos, as chances de sucesso, a localização mais adequada e quem será o público que vai consumir seu produto ou serviço;</li>
            <li>Pesquise seus fornecedores: identifique quem fornece a matéria-prima, os equipamentos, etc;</li>
            <li>Pesquise seus concorrentes: descubra como eles trabalham e entenda suas estratégias;</li>
            <li>Defina como será o trabalho: verifique se vai precisar de funcionários, embalagens e outros materiais;</li>
            <li>E não se esqueça da parte mais importante: defina seus objetivos! Quanto poderá investir? Em quanto tempo deseja obter algum retorno? Quais são seus objetivos a curto e longo prazo? Quais são os pontos fortes e fracos do seu negócio?​</li>
          </ul>

          <h2>Para quem já é empreendedor</h2>

          <p>Você sabe qual é a condição econômica do seu negócio hoje? Fazer um planejamento financeiro vai te ajudar a saber qual a situação da sua empresa e a enxergar com clareza quanto você pode investir e quanto pretende faturar, gastar e lucrar. Assim, terá condições de definir a melhor estratégia para utilizar os seus recursos.</p>

          <p>Separamos algumas dicas para te ajudar a fazer o planejamento financeiro da sua empresa:</p>
          <ul>
            <li>Registre e monitore todas as operações financeiras para ter controle do seu dinheiro;</li>
            <li>Faça uma estimativa das despesas, receitas, custos e investimentos: você pode utilizar o histórico de operações da sua empresa, mas não esqueça de considerar novos custos e despesas. O ideal é fazer anualmente;</li>
            <li>Elabore cenários para evitar problemas com a não realização do que foi projetado. Você pode considerar um cenário otimista, onde as receitas são maiores e/ou as despesas menores, e um cenário pessimista com números piores do que o projetado, para se preparar para um aumento da necessidade de caixa;</li>
            <li>Elabore estratégias: defina quais as ações necessárias para alcançar os resultados projetados.</li>
            <li>Crie políticas diversas: de recebimento - à vista, a prazo, no dinheiro, no boleto, no cartão de crédito, etc; de pagamento - se vai trabalhar com compras parceladas ou à vista; de distribuição de lucros - em que condições o lucro será distribuído, qual o percentual, qual a periodicidade, etc. As políticas podem mudar de acordo com o cenário projetado.</li>
            <li>Utilize ferramentas para controlar todas as atividades definidas nos itens anteriores. Assim, você saberá exatamente se está seguindo o que foi planejado e se os resultados estão sendo alcançados e terá condições de reajustar o planejamento, se for necessário.</li>
          </ul>

          <h4>Material de Apoio:</h4>
          <p>
            <a download="Cálculo do Preço de Venda" href="https://www.caixa.gov.br/Downloads/educacao-financeira/calculo_preco_venda.xlsx?Web=1">Planilha: Cálculo do Preço de Venda</a>
            <br/>
            <a download="Cálculo do Ganho Unitário" href="https://www.caixa.gov.br/Downloads/educacao-financeira/calculo_ganho_unitario.xlsx?Web=1">Planilha: Cálculo do Ganho Unitário</a>
          </p>

        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento">
              Voltar
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/capital-de-giro">
              Capital de giro
            </Link>
          </div>
        </Volta>
      </Content>
    </Container>
  );
}

export default Trilha;
