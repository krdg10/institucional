const obterElementosCabecalho = () => ({
	cabecalho: document.getElementById("siteHeader"),
	botaoMenuMobile: document.getElementById("botaoMenuMobile"),
	menuMobile: document.getElementById("menuMobile"),
	linksMenu: document.querySelectorAll("[data-menu-link]"),
});

export const inicializarCabecalho = () => {
	if (typeof document === "undefined" || typeof window === "undefined") {
		return;
	}

	const { cabecalho, botaoMenuMobile, menuMobile, linksMenu } = obterElementosCabecalho();

	if (!cabecalho) {
		return;
	}

	const atualizarEstadoCabecalho = () => {
		const menuAberto = menuMobile?.classList.contains("is-open") ?? false;

		cabecalho.classList.toggle(
			"header--scrolled",
			window.scrollY > 24 || menuAberto,
		);
	};

	const fecharMenuMobile = () => {
		if (!botaoMenuMobile || !menuMobile) {
			return;
		}

		botaoMenuMobile.setAttribute("aria-expanded", "false");
		menuMobile.classList.remove("is-open");
		document.body.classList.remove("menu-mobile-open");
		atualizarEstadoCabecalho();
	};

	const alternarMenuMobile = () => {
		if (!botaoMenuMobile || !menuMobile) {
			return;
		}

		const menuAberto = menuMobile.classList.toggle("is-open");
		botaoMenuMobile.setAttribute("aria-expanded", String(menuAberto));
		document.body.classList.toggle("menu-mobile-open", menuAberto);
		atualizarEstadoCabecalho();
	};

	atualizarEstadoCabecalho();

	window.addEventListener("scroll", atualizarEstadoCabecalho, {
		passive: true,
	});

	botaoMenuMobile?.addEventListener("click", alternarMenuMobile);

	linksMenu.forEach((link) => {
		link.addEventListener("click", () => {
			fecharMenuMobile();
		});
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 840) {
			fecharMenuMobile();
		}
	});
};
