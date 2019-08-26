import uuidv4 from 'uuid/v4';
const generateId = () => uuidv4().slice(0,10);

export const bikes = [
	{
		id: generateId(),
		details: {
			name: 'Stumpjumper Pro 29',
			price: 6300,
			partNumber: 'No.94159-0001',
		},
		image: require('../Assets/Images/PreviewCard/StumpJumperPro29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/93319-16_SJ-FSR_PRO-CARBON-29_NVY-WHT_HERO?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'StumpJumper Expert 29',
			price: 5000,
			partNumber: 'No.94159-0002',
		},
		image: require('../Assets/Images/PreviewCard/StumpJumperExpert29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN-EXPERT-CARBON-29-CKD-STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-32_SJ-FSR-MEN_EXPERT-CARBON-29_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'StumpJumper Expert 27.5',
			price: 5000,
			partNumber: 'No.94159-0003',
		},
		image: require('../Assets/Images/PreviewCard/StumpJumperExpert27.5.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-30_SJ-FSR-MEN-EXPERT-CARBON-275-CKD-STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/95718-30_SJ-FSR-MEN-EXPERT-CARBON-275-STRMGRY-RKTRED_FRONT-3-4?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/95718-30_SJ-FSR-MEN-EXPERT-CARBON-275-STRMGRY-RKTRED_REAR-3-4?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-30_SJ-FSR_EXPERT-CARBON-27.5_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-30_SJ-FSR_EXPERT-CARBON-27.5_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/97518-30_SJ-FSR_EXPERT-CARBON-27.5_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
		],
	},
	{
		id: generateId(),
		details: {
			name: 'Fuse Expert 29',
			price: 2100,
			partNumber: 'No.94159-0004',
		},
		image: require('../Assets/Images/PreviewCard/FuseExpert29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/96020-30_FUSE-EXPERT-29-BRSH-CMLN_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/96020-30_FUSE-EXPERT-29-BRSH-CMLN_FDSQ?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/96020-30_FUSE-EXPERT-29-BRSH-CMLN_RDSQ?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'Fuse Expert 27.5',
			price: 2000,
			partNumber: 'No.94159-0005',
		},
		image: require('../Assets/Images/PreviewCard/FuseExpert27.5.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/96019-30_FUSE_EXPERT-296FATTIE_ESTSRS-BLK_HERO?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'Demo Racer 29',
			price: 6500,
			partNumber: 'No.94159-0006',
		},	
		image: require('../Assets/Images/PreviewCard/DemoRacer29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1518_PDP_Product-Carousel_1_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1518_PDP_Product-Carousel_2_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1518_PDP_Product-Carousel_3_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1518_PDP_Product-Carousel_4_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/MTB-1518_PDP_Product-Carousel_5_3840x1280?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-00_DEMO_RACE-29_METBLK-BNTYEL_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
		],
	},
	{
		id: generateId(),
		details: {
			name: 'Demo Expert 29',
			price: 6300,
			partNumber: 'No.94159-0007',
		},
		image: require('../Assets/Images/PreviewCard/DemoExpert29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-4?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-5?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-30_DEMO_EXPERT-29_STRMGRY-RKTRED_DETAIL-6?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
		],
	},
	{
		id: generateId(),
		details: {
			name: 'Demo Alloy 27.5',
			price: 3400,
			partNumber: 'No.94159-0008',
		},
		image: require('../Assets/Images/PreviewCard/DemoAlloy27.5.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-51_DEMO_8-I-ALLOY-27.5_CLGRY-ION_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-51_DEMO_8-I-ALLOY-27.5_CLGRY-ION_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-51_DEMO_8-I-ALLOY-27.5_CLGRY-ION_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-51_DEMO_8-I-ALLOY-27.5_CLGRY-ION_DETAIL-4?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/94519-51_DEMO_8-I-ALLOY-27.5_CLGRY-ION_DETAIL-5?wid=1920&hei=640&$hybris-pdp-hero-exp$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'S-Works Epic EVO',
			price: 9500,
			partNumber: 'No.94159-0010',
		},
		image: require('../Assets/Images/PreviewCard/EpicEvo.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_DETAIL-1?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_DETAIL-2?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark-fb?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_DETAIL-3?wid=1920&hei=640&$hybris-pdp-hero-exp$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_FDSQ?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/90319-00_EPIC-MEN-SW-CARBON-EVO-29-CARB-SILHLG-CHRM_RDSQ?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'S-Works StumpJumper 29',
			price: 9520,
			partNumber: 'No.94159-0011',
		},
		image: require('../Assets/Images/PreviewCard/StumpJumper29.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/95718-06_SJ-FSR-MEN-SW-CARBON-29-CKD-ACDKWI-BLK_HERO?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'S-Works StumpJumper 27.5',
			price: 9520,
			partNumber: 'No.94159-0012',
		},
		image: require('../Assets/Images/PreviewCard/StumpJumper27.5.jpeg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-dark?wid=1920&hei=640}&layer=1&src=is{Specialized/95718-04_SJ-FSR-MEN-SW-CARBON-275-CKD-ACDKWI-BLK_HERO?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
	{
		id: generateId(),
		details: {
			name: 'S-Works Demo 8 Frame',
			price: 4000,
			partNumber: 'No.94159-0013',
		},
		image: require('../Assets/Images/PreviewCard/Demo8Frame.jpg'),
		images: [
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/74518-00_DEMO-8-FSR_SW-CARBON-650B-FRM_REDTNT-REDFLKTNT-FLKSIL_HERO?wid=920&hei=600&$hybris-pdp-hero$}",
			"https://s7d5.scene7.com/is/image/Specialized/?layer=0&wid=1920&hei=640&fmt=jpg&src=is{Specialized/pdp-product-bg-light?wid=1920&hei=640}&layer=1&src=is{Specialized/186643?wid=920&hei=600&$hybris-pdp-hero$}"
		],
	},
];

export default [
	{
		id: generateId(),
		title: 'DownHill',
		routeName: 'shop/downhill',
		items: bikes.slice(5,8)
	},
	{
		id: generateId(),
		title: 'Trail',
		routeName: 'shop/trail',
		items: bikes.slice(0,5)
	},
	{
		id: generateId(),
		title: 'S-Works',
		routeName: 'shop/s-works',
		items: bikes.slice(8)
	}
];
