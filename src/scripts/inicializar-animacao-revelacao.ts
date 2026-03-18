const obterElementosRevelacao = (): NodeListOf<HTMLElement> =>
	document.querySelectorAll(".reveal-up");

const elementoJaVisivelNaTela = (elemento: HTMLElement, fator = 0.95): boolean => {
	const retangulo = elemento.getBoundingClientRect();

	return retangulo.top < window.innerHeight * fator && retangulo.bottom > 0;
};

export const inicializarAnimacaoRevelacao = () => {
	if (typeof document === "undefined" || typeof window === "undefined") {
		return;
	}

	const elementos = obterElementosRevelacao();
	if (!elementos.length) {
		return;
	}

	const observador = new IntersectionObserver(
		(entradas, observadorAtual) => {
			entradas.forEach((entrada) => {
				if (!entrada.isIntersecting) {
					return;
				}

				entrada.target.classList.add("is-visible");
				observadorAtual.unobserve(entrada.target);
			});
		},
		{
			threshold: 0.06,
			rootMargin: "0px 0px -6% 0px",
		},
	);

	elementos.forEach((elemento) => {
		if (elementoJaVisivelNaTela(elemento)) {
			elemento.classList.add("is-visible");
			return;
		}

		observador.observe(elemento);
	});

	window.addEventListener(
		"load",
		() => {
			obterElementosRevelacao().forEach((elemento) => {
				if (elementoJaVisivelNaTela(elemento, 1)) {
					elemento.classList.add("is-visible");
				}
			});
		},
		{ once: true },
	);
};
