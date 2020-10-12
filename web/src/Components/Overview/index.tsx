import React from 'react';

import { Container, Cards, Chart, TopMenu } from './styles';

const Overview: React.FC = () => {
  return (
		<Container>

			<TopMenu>
				<div className="title">Visão Geral</div>

				<span className="items">
					<img src="" alt="search"/>
					<img src="" alt="push"/>

					<span className="user">
						<span className="username">Marianda Silva</span>
						<img src="" alt="user profile-pic"/>
					</span>
				</span>
			</TopMenu>

			<Cards>
				<div className="card">
					<span>
						<h3>Vendas</h3>
						<h1>328</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Compras</h3>
						<h1>16</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Faturamento do mês</h3>
						<h1>R$ 16.100</h1>
					</span>
				</div>

				<div className="card">
					<span>
						<h3>Antecipar</h3>
						<h1>R$ 1.000</h1>
					</span>
				</div>
			</Cards>

			<Chart>
				<div className="chart">
					<h2>Panorama Anual</h2>
					<span>12 Outubro 2020, 09:41 AM</span>


				</div>

				<div className="data">
					<div className="item">
						<h3>Crédito</h3>
						<h1>R$ 449,98</h1>
					</div>

					<div className="item">
						<h3>Débito</h3>
						<h1>R$ 426,99</h1>
					</div>

					<div className="item">
						<h3>GetPay</h3>
						<h1>R$ 3390,00</h1>
					</div>

					<div className="item">
						<h3>Pontos</h3>
						<h1>94</h1>
					</div>

					<div className="item">
						<h3>Referência</h3>
						<h1>31%</h1>
					</div>
				</div>
			</Chart>

		</Container>
  );
}

export default Overview;
