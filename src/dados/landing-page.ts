import type {
	ContatosLandingPage,
	DadosApresentacao,
	DadosAtendimentos,
	DadosPsicoterapia,
	ItemMenu,
	PostInstagram,
} from "../tipos/landing-page";

const mensagemWhatsapp = "Oii, gostaria de informações sobre a terapia!";

export const contatosLandingPage: ContatosLandingPage = {
	mensagemWhatsapp,
	linkWhatsapp: `https://wa.me/5543991264083?text=${encodeURIComponent(mensagemWhatsapp)}`,
	linkInstagram: "https://instagram.com/deborafernandes.psi",
	email: "deborafernandes.psi@gmail.com",
	telefoneExibicao: "(43) 99126-4083",
	usuarioInstagram: "@deborafernandes.psi",
};

export const dadosApresentacao: DadosApresentacao = {
	nome: "DÉBORA FERNANDES",
	profissao: "Psicóloga Clínica",
	crp: "CRP-08/38319",
	chamada:
		"Terapia on-line com acolhimento, ética e compromisso com sua história.",
	tituloSecao: "Débora Fernandes",
	textos: [
		"Sou psicóloga clínica - CRP 08/38319. Meu trabalho é oferecer um ambiente seguro, ético e respeitoso para que você possa se aproximar de si mesma com mais clareza.",
		"Sou formada em Psicologia pela PUCPR e especialista em terapias comportamentais contextuais, com atuação orientada pela Análise do Comportamento.",
	],
};

export const dadosPsicoterapia: DadosPsicoterapia = {
	titulo: "Sobre a psicoterapia",
	introducao:
		"A psicoterapia é um processo de acompanhamento psicológico que ajuda você a compreender melhor seus pensamentos, emoções e comportamentos. Ao longo das sessões, investigamos juntos:",
	topicos: [
		"Padrões que se repetem em relacionamentos e situações da vida.",
		"Formas de lidar com ansiedade, insegurança, conflitos e mudanças.",
		"Dificuldades emocionais e momentos de sofrimento.",
		"Possibilidades de construir uma vida mais alinhada ao que é importante para você.",
	],
};

export const dadosAtendimentos: DadosAtendimentos = {
	titulo: "Como funcionam os atendimentos?",
	descricao:
		"As sessões duram cerca de 50 minutos, acontecem online por videochamada e, geralmente, uma vez por semana. Todo o atendimento é feito em um ambiente seguro, ético e confortável para você.",
	observacao:
		"A terapia não é apenas um espaço de “resolver problemas”, mas também um lugar de descoberta, reflexão e desenvolvimento de novas formas de viver.",
	textoBotao: "Entre em contato comigo!",
};

export const postsInstagram: PostInstagram[] = [
	{
		imagem: "/post_1.jpg",
		link: "https://www.instagram.com/p/DV1WNDWGhAG",
		alt: "Psicóloga Débora Fernandes refletindo sobre dores e valores na prática clínica.",
		caption:
			"Reflexões sobre as dores e os valores que atravessam a prática clínica na psicologia.",
	},
	{
		imagem: "/post_2.jpg",
		link: "https://www.instagram.com/p/DVwEW9fFhAP",
		alt: "Mensagem sobre trabalho e sentido de vida: você não precisa amar seu trabalho para construir uma vida significativa.",
		caption:
			"Uma reflexão sobre trabalho, propósito e a construção de uma vida com significado.",
	},
	{
		imagem: "/post_3.jpg",
		link: "https://www.instagram.com/p/DUqt-O1mvPm",
		alt: "Reflexão psicológica sobre pertencimento e autenticidade e seus conflitos emocionais.",
		caption:
			"Pertencimento e autenticidade: um conflito emocional comum na forma como nos relacionamos com o mundo.",
	},
];

export const itensMenu: ItemMenu[] = [
	{ rotulo: "Início", href: "#inicio" },
	{ rotulo: "Sobre mim", href: "#sobre-mim" },
	{ rotulo: "Psicoterapia", href: "#psicoterapia" },
	{ rotulo: "Atendimentos", href: "#atendimentos" },
	{ rotulo: "Redes sociais", href: "#redes-sociais" },
];
