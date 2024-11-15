import css from './profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => (
<div className={css.container}>
	<div className={css.wrapper}>
		<img src={image} alt={`${name} avatar`} className={css.avatar} />
		<p className={css.name}>{name}</p>
		<p className={css.description}>@{tag}</p>
		<p className={css.description}>{location}</p>

		<ul className={css.stats}>
			<li className={css.item}>
				<span className={css.label}>Followers</span>
				<span className={css.quantity}>{stats.followers}</span>
			</li>
			<li className={css.item}>
				<span className={css.label}>Views</span>
				<span className={css.quantity}>{stats.views}</span>
			</li>
			<li className={css.item}>
				<span className={css.label}>Likes</span>
				<span className={css.quantity}>{stats.likes}</span>
			</li>
		</ul>
	</div>
</div>
);
  
export default Profile;