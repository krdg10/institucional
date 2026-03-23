export const schemaPessoa = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "name": "Débora Fernandes",
            "jobTitle": "Psicóloga Clínica",
            "url": "https://psicologadeborafernandes.com.br",
            "image": "https://psicologadeborafernandes.com.br/me.jpg",
            "sameAs": [
                "https://instagram.com/deborafernandes.psi"
            ]
        },
        {
            "@type": "ProfessionalService",
            "name": "Débora Fernandes Psicologia",
            "description": "Psicóloga clínica com atendimento online para todo o Brasil.",
            "url": "https://psicologadeborafernandes.com.br",
            "areaServed": "BR",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Londrina",
                "addressRegion": "PR",
                "addressCountry": "BR"
            }
        }
    ]
};