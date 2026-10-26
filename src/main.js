const commentForms = document.querySelectorAll('.comment-form');

commentForms.forEach((form) => {
  const button = form.querySelector('button');
  const authorInput = form.querySelector('[data-field="author"]');
  const textInput = form.querySelector('[data-field="text"]');
  const list = document.querySelector('.comment-list');

  if (!button || !authorInput || !textInput || !list) return;

  button.addEventListener('click', () => {
    const author = authorInput.value.trim() || 'Anonim';
    const text = textInput.value.trim();

    if (!text) {
      alert('Lütfen yorum metnini yazın.');
      return;
    }

    const item = document.createElement('article');
    item.className = 'comment';

    const initials = author.charAt(0).toUpperCase();

    item.innerHTML = `
      <div class="comment-top">
        <div class="user">
          <div class="avatar">${initials}</div>
          <span>${author}</span>
        </div>
        <time>az önce</time>
      </div>
      <p>${text}</p>
    `;

    list.prepend(item);
    authorInput.value = '';
    textInput.value = '';
  });
});
