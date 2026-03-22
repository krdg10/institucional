export interface ItemMenu {
	rotulo: string;
	href: string;
}

export interface ContatosLandingPage {
	mensagemWhatsapp: string;
	linkWhatsapp: string;
	linkInstagram: string;
	email: string;
	telefoneExibicao: string;
	usuarioInstagram: string;
}

export interface DadosApresentacao {
	nome: string;
	profissao: string;
	crp: string;
	chamada: string;
	tituloSecao: string;
	textos: string[];
}

export interface DadosPsicoterapia {
	titulo: string;
	introducao: string;
	topicos: string[];
}

export interface DadosAtendimentos {
	titulo: string;
	descricao: string;
	observacao: string;
	textoBotao: string;
}

export interface PostInstagram {
	imagem: string;
	link: string;
	alt: string;
	caption: string;
}
