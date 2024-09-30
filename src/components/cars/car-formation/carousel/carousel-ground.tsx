const CarouselGround = ({ radius }: { radius: number }) => {
	return (
		<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
			<circleGeometry args={[radius + 10, 64]} />
			<meshStandardMaterial color="black" />
		</mesh>
	);
};

export default CarouselGround;
