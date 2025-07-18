// Lista de newsletters disponíveis
const newsletters = [
    {
        date: "18-07-2025",
        title: "18 de julho de 2025",
        description: "STF mantém IOF, OpenAI expande, Lovable vira unicórnio"
    }
    // Novas newsletters serão adicionadas aqui
];

// Função para carregar a lista de newsletters
function loadNewsletterList() {
    const listElement = document.getElementById('newsletter-list');
    
    if (!listElement) return;
    
    newsletters.forEach(newsletter => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="newsletters/${newsletter.date}.html">
                <strong>${newsletter.date}</strong> - ${newsletter.description}
            </a>
        `;
        listElement.appendChild(listItem);
    });
}

// Carregar a lista quando a página for carregada
document.addEventListener('DOMContentLoaded', loadNewsletterList);

