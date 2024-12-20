document.addEventListener('DOMContentLoaded', () => {
    // Handle add-to-cart and add-to-bag forms
    document.querySelectorAll('.add-to-cart-form, .add-to-bag-form').forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Retrieve necessary values
            const actionUrl = form.getAttribute('action'); // Get form action dynamically
            const csrfToken = form.querySelector('[name=csrfmiddlewaretoken]')?.value;
            const quantityInput = form.querySelector('[name=quantity]');
            const quantity = quantityInput ? quantityInput.value : 1; // Default to 1 if no quantity field
            const redirectUrl = form.querySelector('[name=redirect_url]')?.value;
            const toastNotification = document.getElementById('toast-notification'); // Toast container

            if (!actionUrl || !csrfToken || !redirectUrl) {
                console.error('Missing required form data.');
                return;
            }

            console.log('Sending fetch request...');
            console.log('Action URL:', actionUrl);
            console.log('Quantity:', quantity);
            console.log('Redirect URL:', redirectUrl);

            // Submit the form via fetch API
            fetch(actionUrl, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrfToken,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity: quantity, redirect_url: redirectUrl }),
            })
                .then(response => {
                    console.log('Response status:', response.status);
                    if (!response.ok) {
                        throw new Error(`Failed to add to bag: ${response.status} ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Success response:', data);

                    // Show success toast notification
                    if (toastNotification) {
                        toastNotification.querySelector('.toast-body').textContent = data.message || 'Product added to bag!';
                        const toast = new bootstrap.Toast(toastNotification);
                        toast.show();
                    }
                })
                .catch(error => {
                    console.error('Error:', error);

                    // Show error toast notification
                    if (toastNotification) {
                        toastNotification.querySelector('.toast-body').textContent = 'Failed to add product to bag.';
                        const toast = new bootstrap.Toast(toastNotification);
                        toast.show();
                    }
                });
        });
    });

    // Handle sorting
    document.getElementById('sort-selector').addEventListener('change', function () {
        const selectedValue = this.value;

        let url = new URL(window.location.href);
        let params = url.searchParams;

        if (selectedValue === 'reset') {
            params.delete('sort');
            params.delete('direction');
        } else {
            const [sort, direction] = selectedValue.split('_');
            params.set('sort', sort);
            params.set('direction', direction);
        }

        window.location.href = `${url.pathname}?${params.toString()}`;
    });

    // Back-to-Top Button Logic
    const backToTopButton = document.querySelector('.btt-button');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Show button when scrolled down 200px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll smoothly to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll effect
        });
    });
});
