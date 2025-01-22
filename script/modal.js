export function setupModales() {
    const infoButtons = document.querySelectorAll('.info-button');
    const container = document.getElementById('modal-container');

    infoButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const data = modalData[modalId];
            loadModal(modalId, data, container);
        });
    });

}

const modalData = {
    geoModal: [
        ["Les chiffres", "La répartition géographique est basée sur les données collectées dans la région."],
        ["Pourquoi", "Comprendre la distribution permet d'identifier les zones en développement."],
    ],
    workTypesModal: [
        ["Les chiffres", "Analyse des formes d'emploi entre 2020 et 2024."],
        ["Pourquoi", "L'évolution des formes d'emploi permet de prévoir les besoins futurs."],
    ],
    jobsModal: [
        ["Les chiffres", "Les métiers en forte croissance incluent IA, cybersécurité et UX/UI."],
        ["Pourquoi", "Ces secteurs en tension nécessitent des talents spécialisés pour répondre à la demande."],
    ],
};

document.addEventListener("DOMContentLoaded", () => {
    const infoButtons = document.querySelectorAll(".info-button");
    const container = document.getElementById("modal-container");

    infoButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const data = modalData[modalId];
            loadModal(modalId, data, container);
        });
    });
});

export function loadModal(modalId, data, container) {
    container.innerHTML = generateModalHTML(modalId, data);
    setupModalInteractions(modalId);
}

function generateModalHTML(modalId, data) {
    const sections = data
        .map(
            ([title, content]) =>
                `<div class="modal-section"><h3>${title}</h3><p>${content}</p></div>`
        )
        .join("");

    return `
    <div class="modal" id="${modalId}">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        ${sections}
      </div>
    </div>`;
}

function setupModalInteractions(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = modal.querySelector(".modal-overlay");
    const closeButton = modal.querySelector(".modal-close");

    const closeModal = () => modal.classList.remove("active");

    overlay.addEventListener("click", closeModal);
    closeButton.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    modal.classList.add("active");
}