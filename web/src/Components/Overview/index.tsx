import React from 'react';

import { Container, Cards, Chart } from './styles';

const Overview: React.FC = () => {
  return (
		<Container>
			<Cards>
				<div className="card">
					<h3>Vendas</h3>
					<h1>328</h1>
				</div>

				<div className="card">
					<h3>Compras</h3>
					<h1>16</h1>
				</div>

				<div className="card">
					<h3>Faturamento do mês</h3>
					<h1>R$ 16.100</h1>
				</div>

				<div className="card">
					<h3>Antecipar</h3>
					<h1>R$ 1.000</h1>
				</div>
			</Cards>

			<Chart>
				asd
			</Chart>
			
		</Container>
  );
}

export default Overview;