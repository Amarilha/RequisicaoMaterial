document.getElementById('material').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
        const descriptionDiv = document.getElementById('description');
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerHTML = `${selectedValue} <button onclick="removeTag(this)">X</button>`;
        descriptionDiv.appendChild(tag);
        this.value = '';
    }
});

function removeTag(button) {
    const tag = button.parentElement;
    tag.remove();
}