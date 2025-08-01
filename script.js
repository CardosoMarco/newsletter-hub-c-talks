// Lista de newsletters disponíveis
const newsletters = [
    {
        date: "01-08-2025",
        description: "EMS Ozempic brasileiro, Meta US$ 47,5 bi, Microsoft = Nvidia US$ 4 tri"
    },
    {
        date: "31-07-2025",
        description: "BC mantém Selic 15%, tarifaço Trump 700 exceções, ChatGPT vs Google"
    },
    {
        date: "30-07-2025",
        description: "Autoescola pode acabar, iFood/CRMBonus R$ 440 mi, vagas IA crescem 21x"
    },
    {
        date: "29-07-2025",
        description: "Petrobras R$ 2 tri no limbo, Prime Video supera Netflix, apps 44% mais caros"
    },
    {
        date: "28-07-2025",
        description: "Stanley R$ 4 bi, Paramount fusão US$ 8 bi, financeiras viram fintechs"
    },
    {
        date: "25-07-2025",
        description: "iFood compra Alelo R$ 5 bi, GPT-5 em agosto, Google 8,5 bi pesquisas/dia"
    },
    {
        date: "24-07-2025",
        description: "Nubank vira operadora, Pop Mart supera Barbie, Três Gargantas move a Terra"
    },
    {
        date: "23-07-2025",
        description: "Figma prepara maior IPO do ano, TSMC no clube do trilhão, Gen Z e IA"
    },
    {
        date: "22-07-2025",
        description: "OpenAI queima US$ 46 bi, Tiffany irrita bilionários, skin readers"
    },
    {
        date: "21-07-2025",
        description: "Criptomoedas atingem US$ 4 trilhões, Red Bull e inovação"
    },
    {
        date: "18-07-2025",
        description: "STF mantém IOF, OpenAI expande, Lovable vira unicórnio"
    },
    {
        date: "17-07-2025",
        description: "Trump de olho no Pix, IOF, Verificação em duas etapas"
    }
    // Novas newsletters serão adicionadas aqui
];

// Função para carregar a lista de newsletters
function loadNewsletterList() {
    const listElement = document.getElementById("newsletter-list");
    
    if (!listElement) return;
    
    newsletters.forEach(newsletter => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <a href="newsletters/${newsletter.date}.html">
                <strong>${newsletter.date}</strong> - ${newsletter.description}
            </a>
        `;
        listElement.appendChild(listItem);
    });
}

// Carregar a lista quando a página for carregada
document.addEventListener("DOMContentLoaded", loadNewsletterList);

