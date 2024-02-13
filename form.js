const form = document.querySelector('form');

function emailValidator(email) {
    // Regular expression pattern for email validation
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    console.log(pattern.test(email));

    // Check if the email matches the pattern
    return pattern.test(email);
}

function phoneValidator(phone) {
    // Regular expression pattern for phone number validation
    const pattern = /^\d{10}$/;

    // Check if the phone number matches the pattern
    return pattern.test(phone);
}

function serviceValidator(service) {
    const options = Array.from(document.querySelectorAll('.option'));

    return options.some(option => option.textContent === service);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    form.classList.add('loading');

    Array.from(
        document.querySelectorAll(
            '.input-field > input, .input-field > div#service-input'
        )
    ).forEach(input => input.classList.remove('error'));

    if (!emailValidator(document.querySelector('[name="email"]').value)) {
        form.classList.remove('loading');

        return document.querySelector(`[name="email"]`).classList.add('error');
    }

    if (
        document.querySelector('[name="phone"]').value &&
        !phoneValidator(document.querySelector('[name="phone"]').value)
    ) {
        form.classList.remove('loading');

        return document.querySelector(`[name="phone"]`).classList.add('error');
    }

    if (!serviceValidator(document.querySelector('[name="service"]').value)) {
        form.classList.remove('loading');

        return document
            .querySelector('div#service-input')
            .classList.add('error');
    }

    // form.submit();

    const inputs = Array.from(document.querySelectorAll('input, textarea'));

    const requestBody = inputs.reduce((result, input) => {
        result[input.name] = input.value;
        return result;
    }, {});

    fetch('https://formspree.io/f/xjvnwgyl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error();
        })

        .then(data => {
            // if (data.success === 'false') throw new Error();

            document.body.classList.add('success-message');

            setTimeout(() => {
                document.body.classList.remove('success-message');
            }, 4000);

            form.reset();

            Array.from(document.querySelectorAll('.option')).forEach(option =>
                option.classList.remove('selected')
            );

            updateSymbolsLeft();
        })
        .catch(error => {
            document.body.classList.add('dialog-opened');
        })
        .finally(() => {
            form.classList.remove('loading');
        });
});

const textarea = document.querySelector('textarea');
const symbolsLeftSpan = document.querySelector('span#symbols-left');

updateSymbolsLeft();

textarea.addEventListener('keyup', updateSymbolsLeft);

function updateSymbolsLeft() {
    symbolsLeftSpan.textContent = `${500 - textarea.value.length} symbols left`;
}

const serviceDropdown = document.querySelector('div#service-input');

serviceDropdown.addEventListener('click', e => {
    serviceDropdown.classList.toggle('opened');

    if (e.target.matches('.option')) {
        const options = Array.from(document.querySelectorAll('.option'));
        const input = serviceDropdown.querySelector('input');

        options.forEach(option => {
            if (option === e.target) {
                input.value = option.textContent;
                return option.classList.add('selected');
            }

            option.classList.remove('selected');
        });
    }
});

document.addEventListener('click', e => {
    const isDropdownInputClicked =
        e.target.matches('div#service-input') ||
        e.target.closest('div#service-input');
    if (
        !isDropdownInputClicked &&
        serviceDropdown.classList.contains('opened')
    ) {
        serviceDropdown.classList.remove('opened');
    }
});

const dialogBtn = document.querySelector('div#dialog > button');

dialogBtn.addEventListener('click', () =>
    document.body.classList.remove('dialog-opened')
);
