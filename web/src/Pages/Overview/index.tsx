import React from 'react';
import chartImg from '../../assets/chart.png';
import { Container, Cards, Chart } from './styles';
import TopMenu from '../../Components/TopMenu';

const data = {
	vendas: 328,
	compras: 16,
	faturamento: 16100,
	antecipar: 1000,
	credito: 449.98,
	debito: 426.99,
	getpay: 3390,
	pontos: 94,
	referencia: 31,
}

const Overview: React.FC = () => {
  return (
		<Container>

			<TopMenu title="Visão Geral" />

			<Cards>
				<div className="card">
					<span>
						<h3>Vendas</h3>
						<h1>{data.vendas}</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Compras</h3>
						<h1>{data.compras}</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Faturamento do mês</h3>
						<h1>R${data.faturamento.toLocaleString('pt-br')}</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Antecipar</h3>
						<h1>R${data.antecipar.toLocaleString('pt-br')}</h1>
					</span>
				</div>
			</Cards>

			<Chart>
				<div className="chart">
					<h2>Panorama Anual</h2>
					<span>12 Outubro 2020, 09:41 AM</span>

					<img src={chartImg} alt="Gráfico"/>
				</div>

				<div className="data">
					<div className="item">
						<span>
							<h3>Crédito</h3>
							<h1>{data.credito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Débito</h3>
							<h1>{data.debito.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>GetPay</h3>
							<h1>{data.getpay.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Pontos</h3>
							<h1>{data.pontos}</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Referência</h3>
							<h1>{data.referencia}%</h1>
						</span>
					</div>
				</div>
			</Chart>

		</Container>
  );
}

export default Overview;
