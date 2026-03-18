export const inicializarBotaoWhatsapp = () => {
	if (typeof document === "undefined" || typeof window === "undefined") {
		return;
	}

	const botaoWhatsapp = document.getElementById("whatsappButton");
	if (!botaoWhatsapp) {
		return;
	}

	const atualizarVisibilidadeBotao = () => {
		botaoWhatsapp.classList.toggle("visible", window.scrollY > 120);
	};

	atualizarVisibilidadeBotao();

	window.addEventListener("scroll", atualizarVisibilidadeBotao, {
		passive: true,
	});
};
