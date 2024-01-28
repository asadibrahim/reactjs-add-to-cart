

const ProductsList = [
    {
        id: 1,
        title: 'Beurer BF 1000 Diagnostic Weighing Scale',
        href: '#',
        image: 'https://www.thesportstore.pk/image/cache/02-03-21/30-03-21/BF-1000-1000x1000.png',
        imageAlt: "Beurer BF 1000 Diagnostic Weighing Scale",
        price: '300',
        color: 'White',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 2,
        title: 'Beurer BF 105 Digital Weighing Scale',
        href: '#',
        image: 'https://www.thesportstore.pk/image/cache/01-01-2020/21-01-20/BF-105-1000x1000.png',
        imageAlt: "Beurer BF 105 Digital Weighing Scale",
        price: '180',
        color: 'Silver',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 3,
        title: 'Ergonomic Trigrip Rubber Weight Plate Ers 1 Inch Dia Standard',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2022/01/APOLLO-ERS-1-INCH-DIA-ERGONOMIC-TRIGRIP-RUBBER-WEIGHT-PLATE-STANDARD-6-768x768.jpg',
        imageAlt: "Ergonomic Trigrip Rubber Weight Plate Ers 1 Inch Dia Standard 10-Kg",
        price: '25',
        color: 'Black',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 4,
        title: 'Weight Training Bench Press Ap-350',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2021/08/APOLLO-WEIGHT-TRAINING-BENCH-PRESS-AP-350.jpg',
        imageAlt: "Weight Training Bench Press Ap-350",
        price: '80',
        color: 'Black',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 5,
        title: 'Multi Bench Press Adjustable Incline Decline Ap-330',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2021/08/APOLLO-MULTI-BENCH-AP-330-web-768x768.jpg',
        imageAlt: "Multi Bench Press Adjustable Incline Decline Ap-330",
        price: '60',
        color: 'Black',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 6,
        title: 'Liveup Kettlebell 4kg Ls2044',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2020/06/LIVEUP-LS2044-KETTLE-BELL-2.jpg',
        imageAlt: "Liveup Kettlebell 4kg Ls2044",
        price: '30',
        color: 'Black',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 7,
        title: 'Livepro Skipping Jump Rope PVC Wire + Handle Red – LP8286',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2023/12/Livepro-Skipping-Jump-Rope-LP8286-PVC-Wire-Handle-Red.jpg',
        imageAlt: "Liveup Kettlebell 4kg Ls2044",
        price: '10',
        color: 'Red',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    {
        id: 8,
        title: 'Liveup Push Up Exercise Bar LS9424',
        href: '#',
        image: 'https://apollosports.pk/wp-content/uploads/2023/04/LS3424.jpg',
        imageAlt: "Liveup Push Up Exercise Bar LS9424",
        price: '13',
        color: 'Yellow',
        description:'Including cross measurement with 8 electrodes for precise monitoring of different areas of the body For professional weighing – raised display on an aluminium stand with blue lighting Weight, body fat, visceral fat, body water, muscle percentage, bone mass, AMR/BMR Body fat and muscle percentage in segments Illuminated XXL display: 112 x 65 mm State-of-the-art dot matrix display Intuitive user menu in: D, GB, F, ES ITO2 surface finish on the scale Brushed stainless steel electrodes (hand-held unit) Standing surface: 10 mm thick safety glass 5 activity levels'
    },
    // More products...
]

export default ProductsList;