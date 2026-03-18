import { inicializarAnimacaoRevelacao } from "./inicializar-animacao-revelacao";
import { inicializarBotaoWhatsapp } from "./inicializar-botao-whatsapp";
import { inicializarCabecalho } from "./inicializar-cabecalho";

const executarInicializacao = () => {
	inicializarCabecalho();
	inicializarBotaoWhatsapp();
	inicializarAnimacaoRevelacao();
};

export const inicializarPagina = () => {
	if (typeof document === "undefined") {
		return;
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", executarInicializacao, {
			once: true,
		});
		return;
	}

	executarInicializacao();
};
