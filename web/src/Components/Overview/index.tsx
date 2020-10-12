import React from 'react';
import chartImg from '../../assets/chart.png';
import avatarIMG from '../../assets/avatar.png';
import { Container, Cards, Chart, TopMenu } from './styles';

const Overview: React.FC = () => {
  return (
		<Container>

			<TopMenu>
				<div className="title">Visão Geral</div>

				<span className="items">
					
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" stroke-width="1.5"/>
						<path d="M11 11L15 15" stroke="#C5C7CD" stroke-width="1.5" stroke-linecap="round"/>
					</svg>

					<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.99999 16C8.10374 16 8.99905 15.1047 8.99905 14H5.00093C5.00093 15.1047 5.89624 16 6.99999 16ZM13.7309 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.99937 1.65125V1C7.99937 0.447812 7.55187 0 6.99999 0C6.44812 0 6.00062 0.447812 6.00062 1V1.65125C3.70499 2.12812 2.00249 4.07188 2.00249 6.5C2.00249 9.69687 0.872804 10.6728 0.269054 11.3216C0.0815536 11.5231 -0.00157141 11.7641 -8.9117e-06 12C0.00342859 12.5125 0.405616 13 1.00312 13H12.9969C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9184 11.5228 13.7309 11.3216Z" fill="#C5C7CD"/>
					</svg>


					<span className="username">Marianda Silva</span>
					
					<img src={avatarIMG} alt="Avatar"/>
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

					<img src={chartImg} alt="Gráfico"/>
				</div>

				<div className="data">
					<div className="item">
						<span>
							<h3>Crédito</h3>
							<h1>R$ 449,98</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Débito</h3>
							<h1>R$ 426,99</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>GetPay</h3>
							<h1>R$ 3390,00</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Pontos</h3>
							<h1>94</h1>
						</span>
					</div>

					<div className="item">
						<span>
							<h3>Referência</h3>
							<h1>31%</h1>
						</span>
					</div>
				</div>
			</Chart>
			
		</Container>
  );
}

export default Overview;