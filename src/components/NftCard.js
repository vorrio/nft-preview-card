import ethereumSvg from '../images/icon-ethereum.svg'
import clockSvg from '../images/icon-clock.svg'
import equilibriumImg from '../images/image-equilibrium.jpg'
import avatarImg from '../images/image-avatar.png'
import viewSvg from '../images/icon-view.svg'
import './NftCard.css'

export default function NftCard () {
	return (
		<div className="card">
			<div className="card-image-container">
				<img className="card-image" src={equilibriumImg} alt="equilibrium"></img>
				<div className="card-image-overlay">
					<div className="overlay"></div>
					<img className="overlay-icon" src={viewSvg} alt="icon view"></img>
				</div>
			</div>
			<h1 className="card-title">Equilibrium #3429</h1>
			<p className="card-text">Our Equilibrium collection promotes balance and calm.</p>
			<div className="flex-between">
				<div className ="flex-group">
					<img src={ethereumSvg} alt="equilibrium"></img>
					<p className="text-crypto">0.041 ETH</p>
				</div>
				<div className ="flex-group">
					<img src={clockSvg} alt="equilibrium"></img>
					<p className="text-time">3 days left</p>
				</div>
			</div>
			<div className="divider"></div>
			<div className ="flex-group">
				<img className="avatar" src={avatarImg} alt="avatar"></img>
				<p className="text-author">Creation of <span className="author-name">Jules Wyvern</span></p>
			</div>
		</div>
	)
}
