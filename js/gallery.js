// gallery.js

document.addEventListener('DOMContentLoaded', () => {
    const mainGalleryImage = document.getElementById('js-main-gallery-image');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    if (!mainGalleryImage || !thumbnailContainer) {
        console.warn('Gallery elements not found. Skipping gallery initialization.');
        return;
    }

    // Set the first thumbnail as active initially
    const firstThumbnail = thumbnailContainer.querySelector('.js-thumbnail');
    if (firstThumbnail) {
        firstThumbnail.classList.add('is-active');
    }

    thumbnailContainer.addEventListener('click', (event) => {
        const clickedThumbnail = event.target.closest('.js-thumbnail');

        if (clickedThumbnail) {
            // Remove active class from previously active thumbnail
            const currentActive = thumbnailContainer.querySelector('.js-thumbnail.is-active');
            if (currentActive) {
                currentActive.classList.remove('is-active');
            }

            // Add active class to the clicked thumbnail
            clickedThumbnail.classList.add('is-active');

            // Update the main image
            const newImageSrc = clickedThumbnail.dataset.full;
            const newImageAlt = clickedThumbnail.alt;

            mainGalleryImage.src = newImageSrc;
            mainGalleryImage.alt = newImageAlt;
        }
    });
});
