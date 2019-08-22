import uuidv4 from 'uuid/v4';
const generateId = () => uuidv4().slice(0,10);

export default [
	{
		id: generateId(),
		title: 'Trail',
		routeName: 'shop/trail',
		items: [
			{
				id: generateId(),
				details: {
					name: 'Stumpjumper Pro 29',
					price: '6,300.00',
					partNumber: 'No.94159-0001',
				},
				image: require('../Assets/Images/PreviewCard/StumpJumperPro29.jpeg'),
				images: [],
			},
			{
				id: generateId(),
				details: {
					name: 'StumpJumper Expert 29',
					price: '5,000.00',
					partNumber: 'No.94159-0002',
				},
				image: require('../Assets/Images/PreviewCard/StumpJumperExpert29.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'StumpJumper Expert 27.5',
					price: '5,000.00',
					partNumber: 'No.94159-0003',
				},
				image: require('../Assets/Images/PreviewCard/StumpJumperExpert27.5.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'Fuse Expert 29',
					price: '2,100.00',
					partNumber: 'No.94159-0004',
				},
				image: require('../Assets/Images/PreviewCard/FuseExpert29.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'Fuse Expert 27.5',
					price: '2,000.00',
					partNumber: 'No.94159-0005',
				},
				image: require('../Assets/Images/PreviewCard/FuseExpert27.5.jpeg'),
			},
		]
	},
	{
		id: generateId(),
		title: 'DownHill',
		routeName: 'shop/downhill',
		items: [
			{
				id: generateId(),
				details: {
					name: 'Demo Racer 29',
					price: '6,500.00',
					partNumber: 'No.94159-0006',
				},	
				image: require('../Assets/Images/PreviewCard/DemoRacer29.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'Demo Expert 29',
					price: '6,300.00',
					partNumber: 'No.94159-0007',
				},
				image: require('../Assets/Images/PreviewCard/DemoExpert29.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'Demo Alloy 27.5',
					price: '3,400.00',
					partNumber: 'No.94159-0008',
				},
				image: require('../Assets/Images/PreviewCard/DemoAlloy27.5.jpeg'),
			},
		]
	},
	{
		id: generateId(),
		title: 'S-Works',
		routeName: 'shop/s-works',
		items: [
			{
				id: generateId(),
				details: {
					name: 'S-Works Epic EVO',
					price: '9,500.00',
					partNumber: 'No.94159-0010',
				},
				image: require('../Assets/Images/PreviewCard/EpicEvo.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'S-Works StumpJumper 29',
					price: '9,520.00',
					partNumber: 'No.94159-0011',
				},
				image: require('../Assets/Images/PreviewCard/StumpJumper29.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'S-Works StumpJumper 27.5',
					price: '9,520.00',
					partNumber: 'No.94159-0012',
				},
				image: require('../Assets/Images/PreviewCard/StumpJumper27.5.jpeg'),
			},
			{
				id: generateId(),
				details: {
					name: 'S-Works Demo 8 Frame',
					price: '4,000.00',
					partNumber: 'No.94159-0013',
				},
				image: require('../Assets/Images/PreviewCard/Demo8Frame.jpg'),
			},
		]
	}
];
