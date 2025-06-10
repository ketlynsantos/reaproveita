const stepsData = [
    {
        title: "1. Encontre um mercado pertinho de você",
        description: "Ao abrir o app, você verá uma lista de mercados parceiros próximos da sua localização. Assim, fica fácil escolher onde comprar com praticidade e sem precisar sair do seu bairro.",
        className: 'red'
    },
    {
        title: "2. Garanta suas ofertas favoritas",
        description: "Navegue pelas ofertas disponíveis e encontre alimentos próximos da validade com até 70% de desconto. Dá pra economizar muito e ainda evitar o desperdício. Mas corre — os produtos são limitados!",
        className: 'orange'
    },
    {
        title: "3. Paque rapidinho pelo app",
        description: "Adicione os itens ao carrinho, finalzie o pedido e escolha a melhor forma de pagamento. tudo é feito direto pelo app, com segurança e em poucos cliques.",
        className: 'yellow'
    },
    {
        title: "4. Ajude o planeta com uma atitude simples",
        description: "Ao comprar pelo ReAproveita, você não só economiza, como também contribui para um mundo com menos desperdício. É bom para você, para o seu bolso e para o meio ambiente.",
        className: 'yellow-light'
    }
];

const steps = document.querySelectorAll('.step');
const title = document.getElementById('step-title');
const description = document.getElementById('step-description');
const dotsContainer = document.getElementById('steps-dots');

function updateStep(index) {
    // Atualiza título e texto
    title.textContent = stepsData[index].title;
    title.className = `subtitle ${stepsData[index].className}`;
    description.textContent = stepsData[index].description;

    // Atualiza classes ativas nos passos
    steps.forEach((step, i) => {
        step.classList.toggle('active', i === index);
    });

    // Atualiza dots
    dotsContainer.innerHTML = '';
    stepsData.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === index) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });
}

steps.forEach(step => {
    step.addEventListener('click', () => {
        const index = parseInt(step.dataset.step);
        updateStep(index);
    });
});

// Inicializa na etapa 0
updateStep(0);