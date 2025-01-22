export function setupModals() {
    const infoButtons = document.querySelectorAll('.info-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const overlays = document.querySelectorAll('.modal-overlay');

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('active');
        });
    });

    const closeModal = (modal) => {
        modal.classList.remove('active');
    };

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            const modal = overlay.closest('.modal');
            closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => closeModal(modal));
        }
    });
}
